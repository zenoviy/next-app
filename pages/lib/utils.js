

const priceConfigured = ({currency, value}) => {
    const localCurrency = currency === 'USD' ? 'us-US': 'us-US'; 

    return new Intl.NumberFormat(localCurrency, { style: 'currency', currency }).format(value)
}


module.exports = {
    priceConfigured
}