module.exports = {
    //'@disabled': true,
    'Email nao informado': function (browser) {  
        let login = browser.page.login()

        login
            .with('', '')
            .expectAlertInfo('Opps. Cadê o email?')                        
    }  
}
