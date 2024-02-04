import cart from './assets/cart.svg'
const CartWidget = () => {
    const style = {
        width: '30px',
        height: '30px',
        fontSize: '10px'
    };
    return (
        <div style={style}>
            <img style={style} src={cart} alt="cart-widget"/>
            0
        </div>
    )
}
export default CartWidget