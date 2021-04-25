import Link from "next/link"
import Head from "next/head"
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

import shopModules from '../lib/shopProducts'

const ShopPage = ({allProducts}) => {
    //console.log(allProducts)
    return(

        <Layout>
            <h1>Shop</h1>
            <ul className={`${styles.row} ${styles.wrap} products-wrapper`}>
                {allProducts ? allProducts.map(product => {
                    return(
                        <li key={product.id}>
                            <img src={product.image[0]} />
                            <h3><Link href={`/shop/${product.id}`}>{product.name}</Link></h3>
                        </li>
                    )
                }) : null}
            </ul>
            
        </Layout>
    )
}

export default ShopPage


export async function getStaticProps() { 
    const allProducts = await shopModules.getAllProducts();

    //console.log(allProducts)
    return {
        props: { 
            allProducts: allProducts.productsAsObjects
        }   
    }
}