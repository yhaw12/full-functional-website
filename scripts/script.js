// sidemenu bars
let bars = document.querySelector('.fa-bars');

// bars.addEventListener('click', ()=>{
//   document.querySelector(".links").classList.toggle('show');
// });

// login form

let user = document.querySelector('.fa-user');
let closeBtn = document.querySelector('.fa-times');

// user.addEventListener('click', function(){
//   document.querySelector('.login').classList.toggle('active');
//   document.querySelector(".links").classList.remove('show');
// });

// login form close button
// closeBtn.addEventListener('click', ()=>{
//    document.querySelector('.login').classList.remove('active');
// });


// checkout 
// let checkOut = document.querySelector('.fa-shopping-cart');
// checkOut.addEventListener('click', ()=>{
//   document.querySelector('.items').classList.toggle('show');
// });



// window.addEventListener('scroll', function(){
//   document.querySelector('.login').classList.remove('active');
//   document.querySelector(".links").classList.remove('show');
//   document.querySelector('.items').classList.remove('show');
// });





// product page javascript
let mnImage = document.querySelector('#mn-img');
function changeImg(any){
  mnImage.src = any;
}
    
// ===All Products Page===================
let items = {
  data:[
    {
      productName: "blue Flower",
      category: "Small Flowers",
      image: "images/img-1.jpg"
    },
    {
      productName: "Rose Flower",
      category: "Small Flowers",
      image: "images/img-2.jpg"
    },
    {
      productName: "Red Flower",
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


function products(){
  for (let i of items.data){
  // create products card
  let card = document.createElement('div');

  // add categories to cards
  card.classList.add("card", "i.category");

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
  container.appendChild(btn);

  // add wishlist =========
  let wishlist = document.createElement('i');
  wishlist.classList.add("wishlist");
  wishlist.innerHTML = '<i class="fas fa-heart fa-2x"></i>';
  container.appendChild(wishlist);

  card.appendChild(container);

  document.getElementById('product-cards').appendChild(card);
};
}








// filtering the products
 
let searcInput = document.querySelector(".srch");

function filter(){

  searcInput.addEventListener('keyup', ()=>{
    products()
    let searchResults = searcInput.value.toUpperCase();
    for (let name of items.data){
      let productsName = name.productName.toUpperCase();

      if (productsName.indexOf(searchResults)!= -1){
        document.getElementById('product-cards').appendChild(card).style.display = 'block';
      }
      else{
        document.getElementById('product-cards').appendChild(card).style.display = "none";
      }
    }
   
  })
}


filter();