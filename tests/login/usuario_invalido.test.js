module.exports = {
    
    'Usuario invalido': (browser) => {
        let login = browser.page.login()
         
        login
            .with('SemLoginRegistrado@hotmail.com', 'SenhaErrada')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }  
}
