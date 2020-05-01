import React from "react";
import './header.css';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux'

function Header(props) {

    let history = useHistory();

        const [Search,setSearch] = React.useState(false);
        const onClick = ()=>setSearch(true)

        return(
            <div className = 'header'>
            <div >
                <i className="fa fa-star starIcon" onClick={() => history.push('/adobeCart')}></i>
            </div>
            <div>
                <i className="fa fa-search searchIcon" onClick={onClick}></i>
                {
                    Search ? <div className="togglesearch">
                    <input className='InputSearch' type="text" placeholder="Search"/>
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
    console.log(state)
    return{
        items: state.addedItems,
        total:state.total
    }
}

export default connect(mapStateToProps)(Header);