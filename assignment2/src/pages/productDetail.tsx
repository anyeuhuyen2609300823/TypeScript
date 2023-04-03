import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams()
    console.log(id);
    
    return <h1>Product Detail</h1>
}

export default ProductDetail