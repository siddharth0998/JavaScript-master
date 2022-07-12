// https://fakestoreapi.com/products

var dataArray = [];

const display = () => {

  fetch('https://fakestoreapi.com/products')
    .then(x => x.json())
    .then(x => {
      dataArray = x;
      displayMyHtml(x, true);
    })
  }

const displayMyHtml = (dataArray, isload) => {

  const data = dataArray.map((value) => {
    return     `<article class="product" onclick="showDetail(event)" id="${value.id}">
<img src="${value.image}" class="product-img img" alt="" />
<footer>
    <h5 class="product-name">${value.title}</h5>
    <span class="product-price">$${value.price}</span>
</footer>
</article>`
  })
  document.getElementById("items").innerHTML = data.join(" ");

  if (isload) {

    const btn = dataArray.map((value) => {
      return `<div class="row1"><input type="checkbox" class="inputcheck" value="${value.category}" onclick="filter_info(event)"><button class="company-btn">${value.category}</button></div>`
    });

    const filt_btn = [...new Set(btn)];
    //console.log(filt_btn);

    document.getElementById("categories").innerHTML = filt_btn.join(" ");
  }

}

display();





const showDetail = (e) => {
  var dataDescription = {};
  const id1 = e.target.parentNode.id;

  if(id1 == ""){
    const id2 = e.target.parentNode.parentNode.id;
    
    dataDescription[id2] = dataArray[id2-1].description;
    //alert(dataDescription[id2]);
    const para = document.createElement("div");
    para.innerText = dataDescription[id2];
    document.getElementById(id2).appendChild(para); 
  }
  else{
    dataDescription[id1] = dataArray[id1-1].description;
    //alert(dataDescription[id1]);
    const para = document.createElement("div");
    para.innerText = dataDescription[id1];
    document.getElementById(id1).appendChild(para); 
  }

  
}






function filter_info(e) {
  var array = []
  var ty = document.querySelectorAll('.inputcheck:checked');

  if (ty.length > 0) {
    for (var i = 0; i < ty.length; i++) {
      array.push(ty[i].defaultValue)
    }

    var myfilterData = dataArray.filter((value) => {

      return array.includes(value.category)
    });

    displayMyHtml(myfilterData, false);

  }
  else {z
    displayMyHtml(dataArray, false);
  }

}

