// var url = 'https://fakestoreapi.com/products';
var array = [];
var limit = 5;
var j = 0; 

const display = () => {

fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  .then(function (value) {
    return value.json();
  }).then(function (value) {
    array = value;
    
      for (var i = j; i < array.length; i++) {
     var html = `<article class="menu-item">
        <img src="${array[i].image}" />
        <div class="item-info">
          <header>
            <h4>${array[i].title}</h4>
            <h4 class="price">${array[i].price}</h4>
          </header>
          <p class="item-text">
            ${array[i].description}
          </p>
        </div>
      </article>`
       ++j;
      document.getElementById("fooditems").insertAdjacentHTML('beforeend', html);
      }
})
}
display();

const showData = () => {
  if(limit <= 20){
   limit = limit + 2;
   display();
  }
}

window.addEventListener('scroll', () => {
   
      const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
      if(scrollTop + clientHeight >= scrollHeight){
        showData();
      }

})