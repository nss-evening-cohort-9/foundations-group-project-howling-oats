const beers = [
    {
        title: 'Vintage T Shirt',
        imageUrl: url('https://img.etsystatic.com/il/380a33/1548068326/il_570xN.1548068326_km2w.jpg?version=0'),
        description: 'Shirt',
        price: '$20.00',
        },
        {
        title: 'Exclusive Variety Six Pack',
        imageUrl: url('https://www.wegmans.com/content/dam/wegmans/products/560/20560.jpg'),
        description: 'Six Pack',
        price: '$10.00',
        },
        {
        title: 'Beer Hat',
        imageUrl: url('https://images-na.ssl-images-amazon.com/images/I/71PjjenZxdL._SL1500_.jpg'),
        description: 'picture of item',
        price: '$15.00',
        },
        {
        title: 'Bar Key',
        imageUrl: url('https://i.etsystatic.com/13657333/d/il/b5dcbd/1202095436/il_340x270.1202095436_8me5.jpg?version=0'),
        description: 'Bar Key',
        price: '$20.00',
        },
        {
        title: 'Pint Glass',
        imageUrl: url('https://images.crateandbarrel.com/is/image/Crate/PintTumblerWCrownSHS16/?$web_product_hero$&160203172057&wid=625&hei=625'),
        description: 'Glass',
        price: '$12.00',
        },
        {
        title: 'Coffee Mug',
        imageUrl: url('https://i.pinimg.com/236x/64/de/7a/64de7abcd9b031bd3eac82badde2a038--the-coffee-coffee-mugs.jpg'),
        description: 'Mug',
        price: '$8.00',
    },
]

const buyBeerCardBuilder = (beerArray) => {
    let domString = '';
    beerArray.forEach(beer => {
        domString += `<div = 'card'>`
        domString += `<h1 class = 'header>${beer.title}</h1>`
        domString += `<img class="card-img-top" src="${beer.imageUrl}" alt="Card image cap">`
        domString += `<h2>${beer.description}>`
        domString += `<h2>${beer.price}>`
        domString += `<div = 'footer'>`
        domString += `    <a class="btn btn-danger addBtn" id =${beer.id}>Add</a>`;

    });

    printToDom('beer-page', domString)

}