const HOST = 'http://localhost:3300';
const getAllProductsLink = '/all-products';
import path from 'path'
import fs from 'fs';
const postsDirectory = path.join(process.cwd(), 'public/db/')


/* const getAllProducts = async () => {
    const allProducts = await fetch(`${HOST}${getAllProductsLink}`)
    const productsAsObjects = await allProducts.json();

    return {productsAsObjects, HOST}
} */


const getAllProducts = async (id = 0) => {
    //fs.readFile()

    return new Promise((res) => {
        const fullPath = path.join(postsDirectory, 'product.json');

        fs.readFile(fullPath, (err, data) => {
            if(err) return res({ productsAsObjects: null, HOST})
            if(id) return res({ productsAsObjects: JSON.parse(data).find(item => item.id == id)})  
            else  return res({ productsAsObjects: JSON.parse(data)})
        })
    })
    
    
}

const getAllProductsNames = async (id) => {
    const fullPath = path.join(postsDirectory, 'product.json');

    return new Promise((res) => {
        fs.readFile(fullPath, (err, data) => {
            if(err) return res({ productsAsObjects: null, HOST})

            let dataAsObject = JSON.parse(data);
            res(
                dataAsObject.map(item => {
                    return {
                        params: {
                            shopitem: item.id.toString()
                        }
                    }
                })
            )
        })
    })
}



module.exports =  {
    getAllProducts,
    getAllProductsNames
}