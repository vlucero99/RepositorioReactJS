const prendas = [
    {id: 101, imagen: <img src={process.env.PUBLIC_URL + '/img/Remera_musculosa_beige.jpg'} alt="Remera Musculosa Beige" />, nombre: "Musculosa Beige", precio: 3500, descripción: "Remera musculosa color beige de algodón. Viene en talle S al XL.", stock: 20, categoria: "Remeras" },
    {id: 102, imagen: <img src={process.env.PUBLIC_URL + '/img/Remera_negra.jpg'} alt="Remera Negra" />, nombre: "Remera Negra", precio: 4000, descripción:"Remera volados color negra de algodón. Viene en talle S al XL.", stock: 15, categoria: "Remeras"},
    {id: 103, imagen: <img src={process.env.PUBLIC_URL + '/img/Vestido_beige.jpg'} alt="Vestido Beige" />, nombre: "Vestido Beige", precio: 5000, descripción:"Vestido de fiesta color beige de lycra. Talle único.", stock: 10, categoria:"Vestidos"},
    {id: 104, imagen: <img src={process.env.PUBLIC_URL + '/img/Remera_musculosa_blanca.jpg'} alt="Remera Musculosa Blanca" />, nombre: "Músculosa Blanca", precio: 3000, descripción:"Remera musculosa blanca estampada. Viene en talle S al L.", stock: 25, categoria: "Remeras"},
    {id: 105, imagen: <img src={process.env.PUBLIC_URL + '/img/Jean_oscuro.jpg'} alt="Jean Oscuro" />, nombre: "Jean Oscuro", precio: 7500, descripción:"Jean rígido oscuro. Viene en talle 32 al 50.", stock: 7, categoria:"Pantalones"},
    {id: 106, imagen: <img src={process.env.PUBLIC_URL + '/img/Bikini_celeste.jpeg'} alt="Bikini Celeste" /> , nombre: "Bikini Celeste", precio: 6500, descripción:"Bikini celeste de lycra. Viene en talle 1 al 3.", stock: 3, categoria:"Bikinis"},
    {id: 107, imagen: <img src={process.env.PUBLIC_URL + '/img/Vestido_floreado.jpg'} alt="Vestido Floreado" /> , nombre: "Vestido Floreado", precio: 4500, descripción:"Vestido floreado de algodón. Viene en talle 1 al 5.", stock: 14, categoria:"Vestidos"},
    {id: 108, imagen: <img src={process.env.PUBLIC_URL + '/img/Jean_clarito.jpg'} alt="Jean MOM claro" />, nombre: "Jean MOM", precio: 8000, descripción:"Jean mom color celeste. Viene en talle 32 al 46.", stock: 5, categoria:"Pantalones"}
];

export const getPrendas = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(prendas)
        }, 500)
    });
};

export const getPrendaById = (prendaId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const prenda = prendas.find(prod => prod.id === parseInt(prendaId, 10));
            if (prenda) {
                resolve(prenda);
            } else {
                reject(new Error(`Prenda no encontrada para el ID: ${prendaId}`));
            }
        }, 500);
    });
};



export const getPrendasByCategory = (prendaCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (prendas.filter(prod => prod.categoria === prendaCategory)) 
        }, 500)
    })
}

