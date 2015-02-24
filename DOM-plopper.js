var fs = require('fs');
var protractor = require('protractor');
var ptor;

// create a directory for our captures
fs.mkdir('dom-captures', function () {

});

// a helper method for capturing the DOM
function snapDOM (filename) {
	ptor.getPageSource().then(function (source) {
		fs.writeFile(filename, source, function (err) {
			if (err) throw err;
		});
	});
}

describe('E2E: main page', function() {

	beforeEach(function() {
		browser.get('/');
		// create new protractor instance
		ptor = protractor.getInstance();
	});

// home ------------------------------------------------------------------------------

	it('should capture the home page', function() {
		browser.get('/');
		expect(ptor.getCurrentUrl()).toMatch('/');
		snapDOM('dom-captures/home.html');
	});

// about -----------------------------------------------------------------------------

	it('should capture the about page', function() {
		browser.get('/about');
		expect(ptor.getCurrentUrl()).toMatch('/about');
		snapDOM('dom-captures/about.html');
	});

// contact ---------------------------------------------------------------------------

	it('should capture the contact page', function() {
		browser.get('/contact');
		expect(ptor.getCurrentUrl()).toMatch('/contact');
		snapDOM('dom-captures/contact.html');
	});



});