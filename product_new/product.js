// https://fakestoreapi.com/products

var dataArray = [];


const displayMyHtml = (dataArray,isload)=> {

 const   data=  dataArray.map((value) => {
        return `<article class="product" ondblclick="showDetail(event)" id="${value.id}">
<img src="${value.image}" class="product-img img" alt="" />
<footer>
    <h5 class="product-name">${value.title}</h5>
    <span class="product-price">$${value.price}</span>
</footer>
</article>`
    })
    document.getElementById("items").innerHTML = data.join(" ");

    if(isload)
    {

    const btn = dataArray.map((value) => {
        return `<div class="row1"><input type="checkbox" class="inputcheck" value="${value.category}" id="${value.category}" onclick="filter_info(event)"><button class="company-btn">${value.category}</button></div>`
    });

    const filt_btn = [...new Set(btn)];
    //console.log(filt_btn);

    document.getElementById("categories").innerHTML = filt_btn.join(" ");
}

}



const display = () => {

    fetch('https://fakestoreapi.com/products')
        .then(x => x.json())
        .then(x => {
            dataArray = x;
          displayMyHtml(x,true);
        })
}

display();

const showDetail = (e) => {
    console.log(e.target);
}


function filter_info(e) {
    var array = []
    var  ty = document.querySelectorAll('.inputcheck:checked');

    console.log(ty);
    for (var i = 0; i < ty.length; i++) {
        array.push(ty[i].value)
      }

    //   if(array.length )

      var myfilterData = dataArray.filter((value)=> {

        return array.includes(value.category)
      });




     displayMyHtml(myfilterData);
      

   

}


