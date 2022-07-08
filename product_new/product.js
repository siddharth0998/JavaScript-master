// https://fakestoreapi.com/products

var array = [];
const display = () => {

    fetch('https://fakestoreapi.com/products')
        .then(x => x.json())
        .then(x => {
            dataArray = x;
            const data = x.map((value) => {
                return `<article class="product">
        <img src="${value.image}" class="product-img img" alt="" />
        <footer>
            <h5 class="product-name">${value.title}</h5>
            <span class="product-price">$${value.price}</span>
        </footer>
    </article>`
            })
            document.getElementById("items").innerHTML = data.join(" ");

            const btn = dataArray.map((value) => {
                array.push(value.category);
                return `<div class="row1"><input type="checkbox" class="inputcheck" id="${value.category}"><button class="company-btn">${value.category}</button></div>`
            });

            const filt_btn = [...new Set(btn)];
            //console.log(filt_btn);

            document.getElementById("categories").innerHTML = filt_btn.join(" ");
        })
}

display();

console.log(array[0]);




