import React from 'react'
import { connect } from 'react-redux'

const DisplayPrice = (props) => {
    return (
        <div className='display-price container'>
            <div className='display-price header'>
                <h1>Current Bitcoin Price</h1>
            </div>
            <div className='display-price body'>
                <h3>${props.price}</h3>
                <div className='update button'><span>Update Price</span></div>
            </div>
        </div>
    )
}
const mapStatetoProps = state => {
    return {
        price: state.price
    }
}

export default connect(mapStatetoProps, {})(DisplayPrice);