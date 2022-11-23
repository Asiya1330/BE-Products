const express = require('express');
const fs = require("fs");
const cors = require('cors')
const _ = require('underscore');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(cors())

// app.get('/products', (req, res, next) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     const fileData = fs.readFileSync('./products.json', { encoding: 'utf8' })
//     res.send(fileData)
//     next();
// })

app.post('/api/purchase', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    let purchases = fs.readFileSync('./purchases.json', { encoding: 'utf8' })
    purchases = JSON.parse(purchases);

    purchases.push(req['body']);
    fs.writeFileSync("./purchases.json", JSON.stringify(purchases));
    res.send(req['body']);
    next();
})

app.get('/products', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    const fileData = fs.readFileSync('./products.json', { encoding: 'utf8' })
    let products = JSON.parse(fileData);
    if (!req.query.name) {
        res.send(products);
        next();
    }
    else {
        let fetchProducts = []
        _.mapObject(products, (product) => {
            let expression = `.*${req.query.name}.*`;
            console.log(expression, 'exp');
            if (product.name.match(expression)) {
                console.log(product.name.match(expression))
                fetchProducts.push(product)
            }
        });

        res.send(fetchProducts)
        next();
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})