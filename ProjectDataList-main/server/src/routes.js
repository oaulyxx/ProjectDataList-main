const height130upController = require('./controllers/height130upController')
const PhilipsController = require('./controllers/PhilipsController')
const TefalController = require('./controllers/TefalController')
const height155upController = require('./controllers/height155upController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // height130up
    app.get('/height130ups', height130upController.index)
    
    app.post('/height130up', height130upController.create)
    
    app.put('/height130up/:height130upId', height130upController.put)
    
    app.delete('/height130up/:height130upId', height130upController.delete)
    
    app.get('/height130up/:height130upId', height130upController.show)

    
    // Philips
    // get all philips
    app.get('/philipss', PhilipsController.index)
    
    // create philips
    app.post('/philips', PhilipsController.create)
    
    // edit philips, suspend, active
    app.put('/philips/:philipsId', PhilipsController.put)

    // delete philips
    app.delete('/philips/:philipsId', PhilipsController.delete)
    
    // get philips by id
    app.get('/philips/:philipsId', PhilipsController.show)

    
    // Tefal
    app.get('/tefals', TefalController.index)
    
    app.post('/tefal', TefalController.create)
    
    app.put('/tefal/:tefalId', TefalController.put)
    
    app.delete('/tefal/:tefalId', TefalController.delete)
    
    app.get('/tefal/:tefalId', TefalController.show)


    // height155up
    app.get('/height155ups', height155upController.index)
    
    app.post('/height155up', height155upController.create)
    
    app.put('/height155up/:height155upId', height155upController.put)
    
    app.delete('/height155up/:height155upId', height155upController.delete)
    
    app.get('/height155up/:height155upId', height155upController.show)
}