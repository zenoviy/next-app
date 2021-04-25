import { useState } from 'react'
import shopModules from '../lib/shopProducts'
import utils from '../lib/utils'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'

import SidePanelComponent from './shop-layout/side-panel-component'
import DetailInformationComponent from './shop-layout/detail-information-component'


const ShopSingleItem = ({singleProductData, allProducts, params}) => {
    const [mediaData, setMediaData] = useState({currentImageId: 0});

    const changeImage = ({newId}) => {
        setMediaData({
            ...mediaData,
            currentImageId: newId
        })
    }

    const productsAsObjects = singleProductData.productsAsObjects;
    return(
        <Layout>
            <div className={`${styles.row}`}>
                <DetailInformationComponent 
                    productsAsObjects={productsAsObjects} 
                    mediaData={mediaData}
                    changeImage={changeImage}
                    priceConfigured={utils.priceConfigured}
                    />
                <SidePanelComponent allProducts={allProducts} />
            </div>
            
        </Layout>
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
    const singleProductData = await shopModules.getAllProducts(params.shopitem);
    const allProducts = await shopModules.getAllProducts();
    
    return({
        props: {
            singleProductData,
            allProducts: allProducts.productsAsObjects,
            params
        }
    })
}