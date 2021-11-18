module.exports.viewAll = function(req, res, next) {
    const restaurants =[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Mikhail_Gorbachev_in_the_Pizza_Hut_commercial%2C_November_1997.png',
        rating: 2,
        category: 'Italian',
        description: 'Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut Pizza Hut'
    },
    {
        id: 2,
        name: 'Pizza Hut 2',
        image: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Mikhail_Gorbachev_in_the_Pizza_Hut_commercial%2C_November_1997.png',
        rating: 5,
        category: 'Italian',
        description: ' Pizza Hut 2'
    }];
    res.render('index', {restaurants});
}

