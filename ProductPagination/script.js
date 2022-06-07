var url = 'https://fakestoreapi.com/products';
var array = [];

fetch(url)
  .then(function (value) {
    return value.json();
  }).then(function (value) {

    array = value;

    function display(start,end) {

      var html = '';

      for (let i = start; i < end; i++) {
        html += `<article class="menu-item">
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
      }

      document.getElementById("fooditems").innerHTML = html;

    }

    var start = 0;
    var end =5;

    display(start,end);

  

    var button = [];
    for (let i = 0; i < Math.ceil(array.length / 5); i++) {
      button.push(`<li class="page-item"><a class="page-link"  id="test">${i+1}</a></li>`);
    }

    document.getElementById("button").innerHTML = button.join("");


   var data = document.querySelectorAll(".page-link");
  

   data.forEach(element => {
      element.addEventListener("click",()=> {

        let start = parseInt(element.innerHTML)*5 -5;
        let end = parseInt(element.innerHTML) * 5;
        
        display(start,end)
        
      })
   });
    

  })

  


  




