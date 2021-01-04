// Number Format
const formatNumber = (num, digits) => {
    return num.toFixed(digits).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default formatNumber;