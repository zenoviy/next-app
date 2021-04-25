
import shopModules from '../lib/shopProducts'

const ShopSingleItem = ({singleProductData, params}) => {
    console.log(singleProductData, params)
    const productsAsObjects = singleProductData.productsAsObjects;
    return(
        <div>
            <h2>Single product {productsAsObjects.name}</h2>
        </div>
    )
}

export default ShopSingleItem





export async function getStaticPaths() {
    const paths = await shopModules.getAllProductsNames();
    console.log(paths)
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) { 
    const singleProductData = await shopModules.getAllProducts(params.shopitem)
    console.log(params)
    return({
        props: {
            singleProductData,
            params
        }
    })
}