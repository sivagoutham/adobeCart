import React from "react";
import './header.css';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';
import { searchitem } from '../actions/cartActions'

function Header(props) {

    let history = useHistory();

        const [Search,setSearch] = React.useState(false);
        const onClick = ()=>setSearch(true)

        const handleSearch =(val)=>{
            props.searchitem(val)
        }

        return(
            <div className = 'header'>
            <div >
                <i className="fa fa-star starIcon" onClick={() => history.push('/adobeCart')}></i>
            </div>
            <div>
                <i className="fa fa-search searchIcon" onClick={onClick}></i>
                {
                    Search ? <div className="togglesearch">
                    <input className='InputSearch' type="text" placeholder="Search" onChange = {(e)=>handleSearch(e.target.value)}/>
                </div> :null
                }
                
            </div>
            <div>
                <i className="fa fa-shopping-cart cartIcon" onClick={() => history.push('/Cart')}></i>
                {props.items.length>0 ?<div className='count'>{props.items.length}</div>:null}
            </div>
            </div>
        )
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total:state.total
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        searchitem :(val)=>{
            dispatch(searchitem(val))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);