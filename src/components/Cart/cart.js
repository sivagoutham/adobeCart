import React,{Component} from "react";
import './cart.css';
import { connect } from 'react-redux'
import data from '../..//cart.json';

const shoppingList = data.items;

class Cart extends Component{

    render(){
        let addedItems = this.props.items.length ?
            (
                    this.props.items.map((item,i)=>{
                        return(
                            <div className='column1' key={i}>
                                    <img className='imgSection' src={item.image} alt={item.name} />
                                    <div style={{paddingLeft:'10px'}}>
                                        <div>{item.name}</div>
                                            <div className='priceList'>
                                                <div className='price'><span>&#8377;</span>{item.price.actual}</div>
                                                <div className='price priceDisplay'><del>{item.price.display}</del></div>
                                                <div className='price priceDiscount'>{item.discount}{'% off'}</div>
                                            </div>
                                    </div>
                                    <div className='IncrementContainer'>
                                        <div className='flexContainer'>
                                            <button className='btnMinus'>-</button>
                                            <div className='inputBox'>
                                                <input type="text" value="1" className="inputText"/>
                                            </div>
                                            <button className='btnPlus'>+</button>
                                        </div>
                                    </div>
                                    <div className="removeBtn">Remove</div>

                            </div>
                        )
                    })
                ):null
        return(
            
            <div className='cartContainer'>
            
                <div className='cartItemsContainer'>
                <div className='row'>
                {addedItems}
                </div>
            </div>
            {this.props.items.length?<div className = "totalContainer">
                <span className='priceDetails'> PRICE DETAILS </span>
                <div className='details'>
                    <div className="price">
                        <div className="priceHeader">Price ({this.props.items.length} items)</div>
                        <span> :</span>
                        <span> ₹{this.props.total}</span>
                    </div>
                    <div className="price">
                        <div className="priceHeader">Discount</div>
                        <span> :</span>
                        <span> ₹{this.props.discount}</span>
                    </div>
                </div>
                <div className='total'>
                    <div className="price">
                        <div className="priceHeader">Total Payable</div>
                        <span> ₹{this.props.finalBill}</span>
                    </div>
                </div>
            </div>:null}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total:state.total,
        discount:state.discount,
        finalBill:state.finalBill
    }
}

export default connect(mapStateToProps)(Cart)