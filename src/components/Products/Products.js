import React from 'react';

import './Products.scss';
import Product from '../Product/Product';

const Products = (props) => {
    let transformedProducts = Object.keys(props.products)
        .map(igKey => {
            return [...Array(props.products[igKey])].map((_, i) => {
                return <Product key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedProducts.length === 0) {
        transformedProducts = <p>There are no products!</p>;
    }
    return (
        <div className="glass">
            <div className="products">
                {transformedProducts}
            </div>
        </div>
    );
};

export default Products;