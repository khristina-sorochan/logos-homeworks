var express = require('express');
var router = express.Router();

const items = [
    {
        id: 1,
        name: 'IPhone',
        model: 'X',
        price: 300,
        onSale: true
    },
    {
        id: 2,
        name: 'IPhone',
        model: '8',
        price: 200,
        onSale: true
    },
    {
        id: 3,
        name: 'IPhone',
        model: 'XS',
        price: 330,
        onSale: true
    },

];

router.get('/:id', ( req, res, next ) => {
    try {
        let { id } = req.params;

        if ( !id ) return res.status(404).json({ error: `No id is provided` });

        let findedItem = items.find(item => item.id == id);

        return res.status(findedItem ? 200 : 204).json(findedItem);
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

router.get('/', ( req, res, next ) => {
    try {
        let { offset, limit } = req.query;

        offset = offset ? offset : 0;
        limit = limit ? limit : 10;

        if(!offset || !limit) res.status(400).json({error: 'Offset or limit is not provided'});

        return res.status(200).json(items.slice(offset, limit));
    } catch (err) {
        res.status(400).json({ error: err });
    }
});


module.exports = router;
