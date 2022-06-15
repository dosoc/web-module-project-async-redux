import React from 'react'
import { connect } from 'react-redux'
import {updatePrice} from '../actions/actions'

const DisplayPrice = (props) => {
    const handleUpdate = () => {
        props.updatePrice()
    }
    return (
        <div className='display-price container'>
            <div className='display-price header'>
                <h1>Current Bitcoin Price</h1>
            </div>
            <div className='display-price body'>
                <h3>${props.price}</h3>
                <p>{props.time}</p>
                <div className='update button' onClick={handleUpdate}><span>Update Price</span></div>
            </div>
        </div>
    )
}
const mapStatetoProps = state => {
    return {
        price: state.price,
        time: state.time
    }
}

export default connect(mapStatetoProps, {updatePrice})(DisplayPrice);