


module.exports = (req, res) => {
    res.status(200).send(  `<h1 style='text-align: center; color: blue; padding: 10%;'>
    
    Welcome to the Shop server</h1>
    <a href='/all-products'>All Products</a>
    `)
};