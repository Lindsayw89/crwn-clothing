import React from 'react';
import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shoppingBag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';

const CartIcon =({toggleCrtHidden, itemCount}) =>(
    <div className='cart-icon' onClick={toggleCrtHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCrtHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
})

// const mapStateToProps = state => ({
//     itemCount: state.cartItems.itemCount
// }) couldnt get this to WORK!
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
