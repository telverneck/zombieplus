module.exports = {
   
    'Senha invalida': (browser) => {
        let login = browser.page.login()
        
        login
            .with('telverneck@hotmail.com', 'SenhaErrada')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }    
}
