import React, { Component } from 'react';
import './Product.scss';
import PropTypes from 'prop-types';
import cola from '../../assets/images/cola.png';
import fanta from '../../assets/images/fanta.png';
import sprite from '../../assets/images/sprite.png';
import croissant from '../../assets/images/7-days.png';
import bakerolls from '../../assets/images/bakerolls.png';
import sandwich from '../../assets/images/sandwich.png';
import { PRODUCT_PRICE } from '../../config/ProductPrice';
import { PRODUCT_CODE } from '../../config/ProductCode';

class Product extends Component {
    render() {
        const currency = "lei";

        let product = null;

        switch (this.props.type) {
            case ('cola'):
                product = <div className="product">
                    <img src={cola} alt="cola" />
                    <div className="label"><span className="code">{PRODUCT_CODE['cola']}</span><span className="price">{`${PRODUCT_PRICE['cola']} ${currency}`}</span></div>
                </div>;
                break;
            case ('fanta'):
                product = (<div className="product">
                    <img src={fanta} alt="fanta" />
                    <div className="label"><span className="code">{PRODUCT_CODE['fanta']}</span><span className="price">{`${PRODUCT_PRICE['fanta']} ${currency}`}</span></div>
                </div>);
                break;
            case ('sprite'):
                product = <div className="product">
                    <img src={sprite} alt="sprite" />
                    <div className="label"><span className="code">{PRODUCT_CODE['sprite']}</span><span className="price">{`${PRODUCT_PRICE['sprite']} ${currency}`}</span></div>
                </div>;
                break;
            case ('croissant'):
                product = <div className="product">
                    <img src={croissant} alt="croissant" />
                    <div className="label"><span className="code">{PRODUCT_CODE['croissant']}</span><span className="price">{`${PRODUCT_PRICE['croissant']} ${currency}`}</span></div>
                </div>;
                break;
            case ('bakerolls'):
                product = <div className="product">
                    <img src={bakerolls} alt="bake rolls" />
                    <div className="label"><span className="code">{PRODUCT_CODE['bakerolls']}</span><span className="price">{`${PRODUCT_PRICE['bakerolls']} ${currency}`}</span></div>
                </div>;
                break;
            case ('sandwich'):
                product = <div className="product">
                    <img src={sandwich} alt="sandwich" />
                    <div className="label"><span className="code">{PRODUCT_CODE['sandwich']}</span><span className="price">{`${PRODUCT_PRICE['sandwich']} ${currency}`}</span></div>
                </div>;
                break;
            default:
                product = null;
        }
        return product;
    }
}

Product.propTypes = {
    type: PropTypes.string.isRequired
}

export default Product;