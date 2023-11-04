const height130upController = require('./controllers/height130upController')
const height110upController = require('./controllers/height110upController')
const height90upController = require('./controllers/height90upController')
const height155upController = require('./controllers/height155upController')

module.exports = (app) => {
    /* RESFUL Api for users management */

    // height130up
    app.get('/height130ups', height130upController.index)
    
    app.post('/height130up', height130upController.create)
    
    app.put('/height130up/:height130upId', height130upController.put)
    
    app.delete('/height130up/:height130upId', height130upController.delete)
    
    app.get('/height130up/:height130upId', height130upController.show)

    
    // height110up
    // get all height110up
    app.get('/height110ups', height110upController.index)
    
    // create height110up
    app.post('/height110up', height110upController.create)
    
    // edit height110up, suspend, active
    app.put('/height110up/:height110upId', height110upController.put)

    // delete height110up
    app.delete('/height110up/:height110upId', height110upController.delete)
    
    // get height110up by id
    app.get('/height110up/:height110upId', height110upController.show)

    
    // height90up
    app.get('/height90ups', height90upController.index)
    
    app.post('/height90up', height90upController.create) 
    
    app.put('/height90up/:height90upId', height90upController.put)
    
    app.delete('/height90up/:height90upId', height90upController.delete)
    
    app.get('/height90up/:height90upId', height90upController.show)


    // height155up
    app.get('/height155ups', height155upController.index)
    
    app.post('/height155up', height155upController.create)
    
    app.put('/height155up/:height155upId', height155upController.put)
    
    app.delete('/height155up/:height155upId', height155upController.delete)
    
    app.get('/height155up/:height155upId', height155upController.show)
}