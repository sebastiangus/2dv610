##Assignment 1
###Install test environment
1. npm install mocha
2. npm install chai
3. npm install chai-webdriver
⋅⋅* http://chaijs.com/guide/installation/
⋅⋅* http://chaijs.com/plugins/chai-webdriver/
..* Get the latest chrome driver and place in folder at http://chromedriver.storage.googleapis.com/
3. add the following to package.json
    {
    	"scripts": {
    		"test": "mocha"
    	}
    }
4. Run the test with command "npm test".
