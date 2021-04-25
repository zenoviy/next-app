import styles from '../../../components/layout.module.css'


// selected-image
const DetailInformationComponent = ({productsAsObjects, mediaData, changeImage, priceConfigured}) => {
    const images = productsAsObjects ? productsAsObjects.image : [];
    return (
        <div className={`product-central-area ${styles.row}`}>
            <div className={`product-media-area image-area`}>
                <img src={images[mediaData.currentImageId]} />
                <div className={`gallery ${styles.row} ${styles.wrap}`}>
                    {images.map((image, i) => {
                        return(
                            <div key={i} className={`gallery-item ${mediaData.currentImageId == i ? 'selected-image' : ''}`} onClick={() => {changeImage({newId: i})}}>
                                <img src={image} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`product-description-area`}>
                <h2>{productsAsObjects.name}</h2>
                <h3>{productsAsObjects.title}</h3>
                <p>{productsAsObjects.shortDescription}</p>
                <h1>{ priceConfigured({currency: productsAsObjects.currency, value: productsAsObjects.price})}</h1>
                <br />
                <p>{productsAsObjects.detailDescription}</p>
                
            </div>
            
        </div>
    )
}


export default DetailInformationComponent