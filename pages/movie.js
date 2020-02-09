var createActions = {
    newMovie: function() {
        return this
            .click('@addMovieButton')
            .waitForElementVisible('@movieForm', 3000)
    },
    selectStatus: function(status) {
        return this
            .click('@statusSelect')
            .useXpath()
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000)
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss()
    },
    insertCast: function(cast) {
        const browser = this

        cast.forEach(function(actor){
            browser
                .setValue('@castInput', actor)
                .api.keys(browser.api.Keys.TAB)
                
        })
        return this
    },
    uploadCover: function (file) {
        let fullPath = require('path').resolve(__dirname, '../images/' + file) 

        return this
            .setValue('@imageUpload', fullPath)
            .pause(1000)
            .assert.attributeContains('.picture-src', 'src', 'blob')
    }
}


module.exports = {
    commands: [createActions],
    elements: {
        addMovieButton: '.nc-simple-add',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        releaseDateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotTextarea: 'textarea[name=overview]',
        registerButton: '#create-movie',
        deleteButton: '.nc-simple-remove', 
        confirmDeleteButton: '.btn-success',
        alertDanger: '.alert-danger',
        tableMovies: 'table tbody',
        imageUpload: '#upcover',
        movieSearch: 'input[placeholder^=Pesquisar]',
        searchButton: '#search-movie',
        tableMovieResult: 'table tbody tr'

    }
}