import React, { Component } from 'react';
import Products from '../Products/Products';
import './VendingMachine.scss';
// import {PRODUCT_PRICE} from '../../config/ProductPrice';
import { PRODUCT_CODE } from '../../config/ProductCode';
import cola from '../../assets/images/cola.png';
import fanta from '../../assets/images/fanta.png';
import sprite from '../../assets/images/sprite.png';
import croissant from '../../assets/images/7-days.png';
import bakerolls from '../../assets/images/bakerolls.png';
import sandwich from '../../assets/images/sandwich.png';

export class VendingMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: {
                'cola': 4,
                'fanta': 4,
                'sprite': 4,
                'croissant': 4,
                'bakerolls': 4,
                'sandwich': 4
            },
            productsCode: {

            },
            screenText: "",
            selectedProduct: "",
            rotate: false,
            displayProduct: null
        }
    }

    getNumber = (event) => {
        let num = event.target.textContent;
        let currentValue = "";
        if (this.state.screenText.length > 3) {
            this.setState({ screenText: this.state.screenText })
        } else {
            this.setState({ screenText: this.state.screenText + num });
            currentValue = this.state.screenText + num;
        }

        if (currentValue.length === 4) {
            switch (currentValue) {
                case PRODUCT_CODE['cola']: this.setState({ selectedProduct: 'cola' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                case PRODUCT_CODE['fanta']: this.setState({ selectedProduct: 'fanta' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                case PRODUCT_CODE['sprite']: this.setState({ selectedProduct: 'sprite' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                case PRODUCT_CODE['croissant']: this.setState({ selectedProduct: 'croissant' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                case PRODUCT_CODE['bakerolls']: this.setState({ selectedProduct: 'bakerolls' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                case PRODUCT_CODE['sandwich']: this.setState({ selectedProduct: 'sandwich' }, () => { this.showProduct(this.state.selectedProduct) })
                    break;
                default: break;
            }
        }
    }

    showProduct = (item) => {
        switch (item) {
            case 'cola': this.setState({ displayProduct: cola });
                break;
            case 'fanta': this.setState({ displayProduct: fanta });
                break;
            case 'sprite': this.setState({ displayProduct: sprite });
                break;
            case 'croissant': this.setState({ displayProduct: croissant });
                break;
            case 'bakerolls': this.setState({ displayProduct: bakerolls });
                break;
            default: this.setState({ displayProduct: sandwich });
        }

        this.setState({ rotate: true });
        setTimeout(() => {
            this.setState({ rotate: false });
            this.setState({ screenText: "" });
        }, 3000);
    }


    clearText = () => {
        this.setState({ screenText: "" });
    }

    render() {
        const values = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '*', '0', '#'];
        let products = null;
        if (this.state.products) {
            products = this.state.products;
        }

        return (
            <div className="main">
                <h1 className="glow">Vending Machine</h1>
                <div className="vending-machine">
                    <div className="left">
                        <Products products={products} />
                        <div className="bottom">
                            <div className={this.state.rotate ? "push open" : "push"}>PUSH</div>
                            {this.state.rotate ? <img src={this.state.displayProduct} alt="product" /> : null}
                        </div>
                    </div>
                    <div className="right">
                        <div className="keypad">
                            <div className="top">
                                <div className="screen">{this.state.screenText}</div>
                            </div>
                            <div className="numbers">
                                {values.map((item) => {
                                    return <div key={item} className="num" value={item} onClick={this.getNumber}>{item}</div>
                                })}
                            </div>
                            <div className="clear" onClick={this.clearText}>CLEAR</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default VendingMachine;