import './style.css'

const CartWidget = () => {
    return (
        <div class="cart-widget py-2">
            <div class="cart-icon">
                <i class="fas fa-shopping-cart"></i>
             </div>
        <div class="cart-notification">0</div>
        </div>
    );
};

export default CartWidget