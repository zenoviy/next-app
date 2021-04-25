const fs = require('fs');
const path = require('path')
exports.getAllProducts = (req, res) => {

    const productsLink = path.join(__dirname +'/../../public/db/product.json')

     fs.readFile(productsLink, (err, data) => {
        if(err) return res.status(200).send(`<p>Error has been occured ${productsLink}</p>`)

        let allProducts = JSON.parse(data);
        res.setHeader("Content-type", "application/json");
        res.status(200).send(data)
    })

}