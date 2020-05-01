import React,{Component} from "react";
import './filter.css';

class Filter extends Component{

    render(){
        return(
            <div className='filterContainer'>
                <h3 style={{margin: '10px'}}>Filters</h3>
                <input type="hidden" id="hidden_minimum_price" value="100"/>
                <input type="hidden" id="hidden_maximum_price" value="10000"/>
                <div className="values">
                  <div><span>&#8377;</span>100</div>
                  <div><span>&#8377;</span>10000</div>
                </div>
                <div>
                  <div className='slider'>
                      <div className='leftDot' style={{transform: 'translateX(0px)'}}>
                        <div className='leftDotInner'></div>
                      </div>
                      <div className='rightDot' style={{transform: 'translateX(-1.19px)'}}>
                        <div className='rightDotInner'></div>
                      </div>
                      <div className='sliderBar'></div>
                      <div className='sliderBarVariation' style={{transform: 'translate(0px) scaleX(0.995)'}}>
                      </div>
                  </div>
                  <div className='priceName'>Price</div>

                </div>
                <button className="button">Apply</button>
                
            </div>
        )
    }
}

export default Filter;