import React,{ Component } from "react";
import './sort.css';
import ShoppingList from '../ShoppingList/shoppingList';

class Sort extends Component{

    constructor(props){
        super(props);
        this.state={
            clickValue:'high'
        }

        this.price=this.price.bind(this);
    }

    price(value){
        this.setState({clickValue:value})
    }

    

    render(){
        return(
            <div className='sortData'>

            <div className='fragment'>

                <span className='sortName'>Sort By</span>

                <div className={this.state.clickValue==='high'?'highlightColor':'normalDisplay'} 
                onClick={()=>this.price('high')}>
                Price -- High Low
                </div>

                <div className={this.state.clickValue==='low'?'highlightColor':'normalDisplay'} 
                onClick={()=>this.price('low')}>
                Price -- Low High
                </div>

                <div className={this.state.clickValue==='discount'?'highlightColor':'normalDisplay'} 
                onClick={()=>this.price('discount')}>
                Discount
                </div>

            </div>

            <ShoppingList sort={this.state.clickValue}/>
            </div>
        )
    }
}

export default Sort;