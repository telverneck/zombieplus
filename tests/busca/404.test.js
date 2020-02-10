module.exports = {
    '@tags': ['smoke', '404'],

    before: function(browser){

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        login
            .with('telverneck@hotmail.com', 'tel0607' )
        sidebar
            .expectNameUser('Telmo')        

    },

    'quando busco um titulo nao cadastrado': function(browser) {
        let movie = browser.page.movie()
        movie
            .setValue('@movieSearch', 'Filme nao cadastrado!')
            .click('@searchButton')
    },

    'entao devo ver uma mensagem de alerta': function(browser) {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    },
}