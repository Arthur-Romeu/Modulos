const divProdutos = document.querySelector('#produtos')

fetch('https://fakestoreapi.com/products')
.then(response=> response.json())
.then(arryProdutos => {
    for (let index = 0; index < arryProdutos.length; index++) {
        divProdutos.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="${arryProdutos[index].image}" class="card-img-top" alt="${arryProdutos[index].title}">
            <div class="card-body">
                <h5 class="card-title"> ${arryProdutos[index].title}</h5>
                <p class="card-text"> ${arryProdutos[index].description}</p>
                <a href="#" class="btn btn-primary">R$ ${arryProdutos[index].price}</a>
            </div>
        </div>
    </div>`
    }
})
