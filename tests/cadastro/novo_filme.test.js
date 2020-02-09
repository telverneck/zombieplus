require('../../lib/db')
//import pg from '../../lib/db'


let movieData = {}

module.exports = {
    before: (browser) => {
        //Massa de teste
        movieData = {
            title: 'Resident evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: [ 'Milla Jovovich', 'Ali Lartes', 'Ian Glen', 'Shawn Roberts' ],
            cover: 'resident-evil-2002.jpg',
            plot: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
        }
        //pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        login
            .with('telverneck@hotmail.com', 'tel0607' )
        sidebar
            .expectNameUser('Telmo')
    },

        
    'Quando eu faço o cadastro do filme': (browser) => {
        let movie = browser.page.movie()

        movie
            .newMovie()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@releaseDateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotTextarea', movieData.plot)
            .uploadCover(movieData.cover)
            .click('@registerButton')

    },

    'Entao devo ver o filme na lista': (browser) => {
        let movie = browser.page.movie()

        // waitForElementVisible procura o elemento visivel na pagina, mas tb procura pelo Atributo Display
        // waitForElementPresent verifica se esta em algum lugar da pagina
        movie
            .waitForElementPresent('@tableMovies', 5000)
            .assert.containsText('@tableMovies', movieData.title)

    },
    'E apos o registro, apago o mesmo filme (para nao manter o registro na base de dados)': (browser) => {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@deleteButton', 5000)
            .click('@deleteButton')
            .waitForElementVisible('@confirmDeleteButton', 7000)
            .click('@confirmDeleteButton')
            .pause(2000)
            .waitForElementVisible('@alertDanger', 7000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')

    }

}