import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderDetails = () => {
    const productId = useParams();
    const [product, setProduct] = useState({});
    const {url, name, description, price} = product;
    useEffect(() => {
        fetch(`https://gentle-oasis-77041.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId]);
    return (
        <div>
            <img src={url} alt="" />
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{price}</p>

            
        </div>
    );
};

export default OrderDetails;