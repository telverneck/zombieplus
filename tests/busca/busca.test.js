//import pg from '../../lib/db'

let movieData = {}
module.exports = {

    before: (browser) => {
        //Massa de teste
        movieData = {
            title: 'Meu namorado é um zumbi',
            status: 'Disponível',
            year: 2013,
            releaseDate: '01/05/2013',
            cast: [ 'Nicholas Hoult', 'Teresa Palmer', 'Analeign Tipton', 'Rob Corddy' ],
            cover: 'meu-namo-zumbi.jpg',
            plot: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum '
        }
        // pg.removeByTitle(movieData.title)
        // pg.insertMovie(movieData)
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()
        login
            .with('telverneck@hotmail.com', 'tel0607' )
        sidebar
            .expectNameUser('Telmo')
        
    },
    'Cadastrar o filme': function(browser){
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

    'quando faço a busca pelo titulo': function(browser) {
        let movie = browser.page.movie()
        movie
            .setValue('@movieSearch', movieData.title)
            .click('@searchButton')
    },
    
    'entao o titulo é exibido na lista': function(browser) {
        let movie = browser.page.movie()
        movie
            .expect.elements('@tableMovieResult').count.to.equal(1)
    },
    'E apos o registro, apago o mesmo filme (para nao manter o registro na base de dados)': (browser) => {
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@deleteButton', 10000)
            .click('@deleteButton')
            .waitForElementVisible('@confirmDeleteButton', 10000)
            .click('@confirmDeleteButton')
            .pause(2000)
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')

    }
}