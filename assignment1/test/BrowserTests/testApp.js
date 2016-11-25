(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function(chaiDom) {
  if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
    module.exports = chaiDom
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return chaiDom
    })
  } else {
    chai.use(chaiDom)
  }
}(function(chai, utils) {
  var flag = utils.flag,

  elToString = function(el) {
    var desc
    if (el instanceof NodeList) {
      if (el.length === 0) return 'empty NodeList'
      desc = Array.prototype.slice.call(el, 0, 5).map(elToString).join(', ')
      return el.length > 5 ? desc + '... (+' + (el.length - 5) + ' more)' : desc
    }
    if (!(el instanceof HTMLElement)) {
      return String(el)
    }

    desc = el.tagName.toLowerCase()
    if (el.id) {
      desc += '#' + el.id
    }
    if (el.className) {
      desc += '.' + String(el.className).replace(/\s+/g, '.')
    }
    Array.prototype.forEach.call(el.attributes, function(attr) {
      if (attr.name !== 'class' && attr.name !== 'id') {
        desc += '[' + attr.name + (attr.value ? '="' + attr.value + '"]' : ']')
      }
    })
    return desc
  },

  attrAssert = function(name, val) {
    var el = flag(this, 'object'), actual = el.getAttribute(name)

    if (!flag(this, 'negate') || undefined === val) {
      this.assert(
        !!el.attributes[name]
        , 'expected ' + elToString(el) + ' to have an attribute #{exp}'
        , 'expected ' + elToString(el) + ' not to have an attribute #{exp}'
        , name
      )
    }

    if (undefined !== val) {
      this.assert(
        val === actual
        , 'expected ' + elToString(el) + ' to have an attribute ' + utils.inspect(name) + ' with the value #{exp}, but the value was #{act}'
        , 'expected ' + elToString(el) + ' not to have an attribute ' + utils.inspect(name) + ' with the value #{act}'
        , val
        , actual
      )
    }

    flag(this, 'object', actual)
  }

  utils.elToString = elToString
  chai.Assertion.addMethod('attr', attrAssert)
  chai.Assertion.addMethod('attribute', attrAssert)

  chai.Assertion.addMethod('class', function(className) {
    var el = flag(this, 'object')
    this.assert(
      el.classList.contains(className)
      , 'expected ' + elToString(el) + ' to have class #{exp}'
      , 'expected ' + elToString(el) + ' not to have class #{exp}'
      , className
    )
  })

  chai.Assertion.addMethod('id', function(id) {
    var el = flag(this, 'object')
    this.assert(
      el.id == id
      , 'expected ' + elToString(el) + ' to have id #{exp}'
      , 'expected ' + elToString(el) + ' not to have id #{exp}'
      , id
    )
  })

  chai.Assertion.addMethod('html', function(html) {
    var el = flag(this, 'object'), actual = flag(this, 'object').innerHTML

    if (flag(this, 'contains')) {
      this.assert(
        actual.indexOf(html) >= 0
        , 'expected #{act} to contain HTML #{exp}'
        , 'expected #{act} not to contain HTML #{exp}'
        , html
        , actual
      )
    } else {
      this.assert(
        actual === html
        , 'expected ' + elToString(el) + ' to have HTML #{exp}, but the HTML was #{act}'
        , 'expected ' + elToString(el) + ' not to have HTML #{exp}'
        , html
        , actual
      )
    }
  })

  chai.Assertion.addMethod('text', function(text) {
    var obj = flag(this, 'object'), contains = flag(this, 'contains'), actual, result

    if (obj instanceof NodeList) {
      actual = Array.prototype.map.call(obj, function(el) { return el.textContent })
      if (Array.isArray(text)) {
        result = contains ?
          text[flag(this, 'negate') ? 'some' : 'every'](function(t) {
            return Array.prototype.some.call(obj, function(el) { return el.textContent === t })
          })
          :
          utils.eql(actual, text)

        actual = actual.join()
        text = text.join()
      } else {
        actual = actual.join('')
        result = contains ? actual.indexOf(text) >= 0 : actual === text
      }
    } else {
      actual = flag(this, 'object').textContent
      result = contains ? actual.indexOf(text) >= 0 : actual === text
    }

    var objDesc = elToString(obj)
    if (contains) {
      this.assert(
        result
        , 'expected ' + objDesc + ' to contain #{exp}, but the text was #{act}'
        , 'expected ' + objDesc + ' not to contain #{exp}, but the text was #{act}'
        , text
        , actual
      )
    } else {
      this.assert(
        result
        , 'expected ' + objDesc + ' to have text #{exp}, but the text was #{act}'
        , 'expected ' + objDesc + ' not to have text #{exp}'
        , text
        , actual
      )
    }
  })

  chai.Assertion.addMethod('value', function(value) {
    var el = flag(this, 'object'), actual = flag(this, 'object').value
    this.assert(
      flag(this, 'object').value === value
      , 'expected ' + elToString(el) + ' to have value #{exp}, but the value was #{act}'
      , 'expected ' + elToString(el) + ' not to have value #{exp}'
      , value
      , actual
    )
  })

  chai.Assertion.overwriteProperty('exist', function(_super) {
    return function() {
      var obj = flag(this, 'object')
      if (obj instanceof NodeList) {
        this.assert(
          obj.length > 0
          , 'expected an empty NodeList to have nodes'
          , 'expected ' + elToString(obj) + ' to not exist')
      } else {
        _super.apply(this, arguments)
      }
    }
  })

  chai.Assertion.overwriteProperty('empty', function(_super) {
    return function() {
      var obj = flag(this, 'object')
      if (obj instanceof HTMLElement) {
        this.assert(
          obj.children.length === 0
          , 'expected ' + elToString(obj) + ' to be empty'
          , 'expected ' + elToString(obj) + ' to not be empty')
      } else if (obj instanceof NodeList) {
        this.assert(
          obj.length === 0
          , 'expected ' + elToString(obj) + ' to be empty'
          , 'expected ' + elToString(obj) + ' to not be empty')
      } else {
        _super.apply(this, arguments)
      }
    }
  })

  chai.Assertion.overwriteChainableMethod('length',
    function(_super) {
      return function(length) {
        var obj = flag(this, 'object')
        if (obj instanceof NodeList || obj instanceof HTMLElement) {
          var actualLength = obj.children ? obj.children.length : obj.length;
          this.assert(
              actualLength === length
            , 'expected ' + elToString(obj) + ' to have #{exp} children but it had #{act} children'
            , 'expected ' + elToString(obj) + ' to not have #{exp} children'
            , length
            , actualLength
          )
        } else {
          _super.apply(this, arguments)
        }
      }
    },
    function(_super) {
      return function() {
        _super.call(this)
      }
    }
  )


  chai.Assertion.overwriteMethod('match', function(_super) {
    return function(selector) {
      var obj = flag(this, 'object')
      if (obj instanceof HTMLElement) {
        this.assert(
          obj.matches(selector)
          , 'expected ' + elToString(obj) + ' to match #{exp}'
          , 'expected ' + elToString(obj) + ' to not match #{exp}'
          , selector
        )
      } else if (obj instanceof NodeList) {
        this.assert(
          (!!obj.length && Array.prototype.every.call(obj, function(el) { return el.matches(selector) }))
          , 'expected ' + elToString(obj) + ' to match #{exp}'
          , 'expected ' + elToString(obj) + ' to not match #{exp}'
          , selector
        )
      } else {
        _super.apply(this, arguments)
      }
    }
  })

  chai.Assertion.overwriteChainableMethod('contain',
    function(_super) {
      return function(subitem) {
        var obj = flag(this, 'object')
        if (obj instanceof HTMLElement) {
          if (typeof subitem === 'string') {
            this.assert(
              !!obj.querySelector(subitem)
              , 'expected ' + elToString(obj) + ' to contain #{exp}'
              , 'expected ' + elToString(obj) + ' to not contain #{exp}'
              , subitem)
          } else {
            this.assert(
              obj.contains(subitem)
              , 'expected ' + elToString(obj) + ' to contain ' + elToString(subitem)
              , 'expected ' + elToString(obj) + ' to not contain ' + elToString(subitem))
          }
        } else {
          _super.apply(this, arguments)
        }
      }
    },
    function(_super) {
      return function() {
        _super.call(this)
      }
    }
  )
}))

},{}],2:[function(require,module,exports){
//http://chaijs.com/plugins/chai-webdriver/ for setup instructions

var expect = chai.expect;
var should = chai.should();
chai.use(require('chai-dom'));

describe('cell-template tests', function () {

    it('html test', function () {
        //use import to get html-document
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#cell-template').should.have.html('<div class="cell"></div>');
    });
});

describe('row-template tests', function () {
    it('html test', function () {
        var importedHtml = document.querySelector('link[rel=import]');
        var content = importedHtml.import;
        content.querySelector('#row-template').should.have.html('<div class="row"></div>');
    });
});



},{"chai-dom":1}]},{},[2]);
