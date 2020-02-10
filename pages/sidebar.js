var sidebarActions = {
    expectNameUser: function (name) {
        return this
            .waitForElementVisible('@userInfo', 10000)
            .assert.containsText('@userInfo', name)
    }
}



module.exports = {
    commands:[sidebarActions],
    elements: {
        userInfo: '.user .info span'
    }
}