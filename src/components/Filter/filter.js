import React,{Component} from "react";
import './filter.css';
import { connect } from 'react-redux'
import { filterItem } from '../actions/cartActions'

class Filter extends Component{
    constructor(props){
      super(props);
      this.state={
        min:1000,
        max:100000
      }
    }

  handleChange =(event)=> {
  this.setState({min: event.target.value});}

  handleClick = (val)=>{
    this.props.filterItem(val);
  }

    render(){
        return(
            <div className='filterContainer'>
                <h3 style={{margin: '10px'}}>Filters</h3>
                <input type="hidden" id="hidden_minimum_price" value="100"/>
                <input type="hidden" id="hidden_maximum_price" value="10000"/>
                <div className="values">
                  <div><span>&#8377;</span>{this.state.min}</div>
                  <div><span>&#8377;</span>{this.state.max}</div>
                </div>
                <div>
                  {/* <div className='slider'>
                      <div className='leftDot' style={{transform: 'translateX(0px)'}}>
                        <div className='leftDotInner'>
                        </div>
                      </div>
                      <div className='rightDot' style={{transform: 'translateX(-1.19px)'}}>
                        <div className='rightDotInner'></div>
                      </div>
                      <div className='sliderBar'></div>
                      <div className='sliderBarVariation' style={{transform: 'translate(0px) scaleX(0.995)'}}>
                      </div>
                  </div> */}
                  <div className='slidecontainer'>
                    <input  type="range" className='slider' min="1000" max="100000" value={this.state.min} onChange={this.handleChange}
                         step="1"/>
                         {/* <input  type="range" className='slider1' min="4" max="5" value={this.state.max} onChange={this.handleChangeMax}
                         step="1"/> */}
                  </div>
                  <div className='priceName'>Price</div>

                </div>
                <button className="button" onClick={()=>this.handleClick(this.state.min)}>Apply</button>
                
            </div>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        filterItem :(val)=>{
            dispatch(filterItem(val))
        }
    }
}

export default connect(null,mapDispatchToProps)(Filter);