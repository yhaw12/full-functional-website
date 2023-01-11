// product page javascript
let mnImage = document.querySelector('#mn-img');
function changeImg(any){
  mnImage.src = any;
}
    
// ===All Products Page===================
let items = {
  data:[
    {
      productName: "Rose Flower",
      category: "Small Flowers",
      image: "images/img-1.jpg"
    },
    {
      productName: "Rose Flower",
      category: "Small Flowers",
      image: "images/img-2.jpg"
    },
    {
      productName: "Rose Flower",
      category: "Small Flowers",
      image: "images/img-3.jpg"
    },
    {
      productName: "Rose Flower",
      category: "Small Flowers",
      image: "images/img-4.jpg"
    },
  ]
};

for (let i of items.data){
  // create products card
  let card = document.createElement('div');

  // add categories to cards
  card.classList.add("card", "i.categories");

  // create image container
  let imgContainer = document.createElement('div');
  imgContainer.classList.add("imgContainer");

  // set image Attributes
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);


  // button============
  let container = document.createElement('div');
  container.classList.add('container');

  let desc = document.createElement('h5');
  desc.classList.add('desc');
  desc.innerText = i.productName.toUpperCase();
  container.appendChild(desc);

  // Add to Cart =======
  let btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = "Add To Cart"
  container.appendChild(btn)

  // add wishlist =========
  let wishlist = document.createElement('i');
  wishlist.classList.add("wishlist");
  wishlist.innerHTML = '<i class="fas fa-heart fa-2x"></i>';
  container.appendChild(wishlist)


  card.appendChild(imgContainer);
  card.appendChild(container);

  document.getElementById('product-cards').appendChild(card);
};


// when the pages load
window.onload = ()=>{
  filter('all');
};

// filtering the products
// function filter(value){
//   let buttons = document.querySelectorAll('.btn-products');
//   buttons.forEach(button =>{
//     if (value.toUpperCase() == button.innerText.toUpperCase()){

//     }

//   });

// }

 





   