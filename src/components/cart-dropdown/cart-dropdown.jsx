import React from 'react';
import {connect } from 'react-redux';
import {selectCartItemsCount, selectCartItems} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item';


const CartDropdown= ({cartItems})=> (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=> (
                <CartItem key = {cartItem.id} item= {cartItem}/>
            ))}
        </div>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    
);
 const mapStateToProps = (state)=> ({
     cartItems: selectCartItems(state)
 })


export default connect(mapStateToProps)(CartDropdown);