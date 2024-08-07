async function getItems() {
    let item = await fetch('https://dummyjson.com/products?limit=194').then(res=>res.json())
    let products = item.products
    let container = document.querySelector(".container")
    for (let i = 0; i < products.length; i++) {
        let card = document.createElement("div")
        card.classList = "card"
        card.innerHTML = `
        <div class="image">
            <img src=${products[i].images[0]} alt="item">
        </div>

        <div class="title">${products[i].title}</div>

        <div class="details">
            <p>Rating: ${products[i].rating}</p>
            <p>Price: ${products[i].price}</p>
            <p>In Stock: ${products[i].stock}</p>
        </div>

        <div class="button">
            <button>Buy</button>
        </div>
        `
        container.appendChild(card)
    }
}

getItems()

