import cart from './assets/cart.svg'
const CartWidget = () => {
    const style = {
        width: '70px',
        height: '70px',
    };
    return (
        <div>
            <img style={style} src={cart} alt="cart-widget"/>
            0
        </div>
    )
}
export default CartWidget