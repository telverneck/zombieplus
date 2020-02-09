module.exports = {

    'Senha nao informada': function (browser) {
        let login = browser.page.login()

        login
            .with('SemLoginRegistrado@hotmail.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }
}
