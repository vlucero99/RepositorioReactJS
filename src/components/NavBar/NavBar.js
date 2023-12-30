import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    const style = {
        backgroundColor: 'pink',
        color: 'palevioletred',
        borderColor: 'palevioletred',
        margin: '5px',
    };
    const styletitle = {
        fontFamily: 'Dancing Script',
        fontSize: '50px',
    }
    return (
        <nav>
            <h3 style={styletitle}>DejavuInd</h3>
            <div>
                <button style={style}>Remeras</button>
                <button style={style}>Vestidos</button>
                <button style={style}>Pantalones</button>
                <button style={style}>Bikinis</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar