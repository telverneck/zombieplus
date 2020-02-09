module.exports = {
    '@tags': ['smoke'],

    'Login com sucesso': (browser) => {
        // atribuindo os Pages objects
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('telverneck@hotmail.com', 'tel0607' ) //Ja esta recebendo de URL de Pages/login.js
            

        sidebar
            .expectNameUser('Telmo')
    }
    // 'dado que eu acesso a pagina de login': (browser) => {
    //     browser
    //         .resizeWindow(1680, 1050)
    //         .url('http://zombie-web:5000/login')
    //         .waitForElementVisible('.card-login', 3000)
    // },
    // 'quando eu faço login com sucesso': function (browser) {
    //     browser
    //         .setValue('input[name=email]', 'telverneck@hotmail.com')
    //         .setValue('input[name=password]', 'tel0607')
    //         .click('.login-button')
    // },
    // 'entao devo ver o meu nome na area logada': function (browser) {
    //     let usuario = '.user .info span'

    //     browser
    //         .waitForElementVisible(usuario, 3000)
    //         .assert.containsText(usuario, 'Telmo')
    //         .end();
    // }
}
