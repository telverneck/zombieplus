module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1680, 1050)
        done()
    },
    
    afterEach: (browser, done) => {
        browser.end();
        done()

    },

}