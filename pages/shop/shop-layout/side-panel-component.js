import Link from "next/link"
import Head from "next/head"
import styles from '../../../components/layout.module.css'

//import shopModules from '../../lib/shopProducts'

const SidePanelComponent = ({allProducts}) => {
    console.log(allProducts)
    return(
        <div>
            <h2>Side panel</h2>
            <ul>
                {allProducts? allProducts.map((product, i) => {
                    return(
                        <li key={product.id}>
                            <Link href={`/shop/${product.id}`}>{product.name}</Link>
                        </li>
                    )
                }) : 'No items'} 
            </ul>
        </div>
    )
}


export default SidePanelComponent

/*
export async function getStaticProps() { 
    const allProducts = await shopModules.getAllProducts();

    console.log(allProducts)
    return {
        props: { 
            allProducts: allProducts.productsAsObjects
        }   
    }
}*/