interface IProduct {
    id: Number,
    artikel: String,
    trademark: String,
    title: String,
    price: Number,
    description: String,
    characteristics: {},
    reviews: [
        {
            reating: Number,
            title: String,
            text: String
        }
    ]
}

export default IProduct;