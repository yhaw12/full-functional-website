// product page javascript
let mnImage = document.querySelector('#mn-img');
function changeImg(any){
  mnImage.src = any;
}

let pText = document.querySelectorAll('.p');

pText.forEach((item)=>{
    const btn = item.querySelector('.fa-plus');
   console.log(btn) 
// btn.addEventListener('click', ()=>{
//     pText.classlist.toggle('active');

//   });


});
