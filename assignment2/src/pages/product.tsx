// import { useParams } from 'react-router-dom'

// const ProductDetail = () => {
//     const { id } = useParams()
//     console.log(id);

//     return <h1>Product detail</h1>
// }

// export default ProductDetail

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => {
                const product = data.products.find(p => p.id === Number(id));
                setProduct(product);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    return product ? (
        <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
        </div>
    ) : (
        <div>Product not found</div>
    );
}

export default ProductDetail;
