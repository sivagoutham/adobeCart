import React,{Component} from "react";
import './shoppingList.css';
import * as _ from "lodash";
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'

class ShoppingList extends Component{

    constructor(props){
        super(props);

        this.state={
            List:[],
        }

        this.sortData = this.sortData.bind(this);
    }

    handleClick = (name)=>{
        this.props.addToCart(name);
    }

    sortData(){
        let mapping ;
        if(this.props.sort==='high'){
            mapping = _.orderBy(this.props.items, o => o.price.actual,'desc')
        }else if(this.props.sort==='low'){
            mapping = _.orderBy(this.props.items, o => o.price.actual,'asc')
        }
        else if(this.props.sort==='discount'){
            mapping = _.orderBy(this.props.items, o => o.discount,'asc')
        }
        const myData =mapping.map((item,i)=>{
                        return(
                            <div className='column' key={i}>
                                    <img className='imgSection' src={item.image} alt={item.name} />
                                    <div>{item.name}</div>
                                    <div className='priceList'>
                                        <div className='price'><span>&#8377;</span>{item.price.actual}</div>
                                        <div className='price priceDisplay'><del>{item.price.display}</del></div>
                                        <div className='price priceDiscount'>{item.discount}{'% off'}</div>
                                    </div>
                                    <button className="button btnCart" onClick={()=>this.handleClick(item.name)}>Add to Cart</button>

                            </div>
                        )
                    })
        
        return myData
    }



    render(){

        
        return(
            <div className='row'>
                {
                    this.sortData()
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items:state.initialData.items
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        addToCart :(name)=>{
            dispatch(addToCart(name))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);