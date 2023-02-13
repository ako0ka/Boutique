let clothing = [
{
    clothUrl:'https://cdn.shopify.com/s/files/1/0451/5456/6312/products/Carhartt-Mens-Chase-Sweat-Hoodie-Hamilton-Brown-001_540x.jpg?v=1661508321',
    title: "Hoods",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 340,
    category: 'Men',
    quantity:32
},
{
    clothUrl:'https://images.contentstack.io/v3/assets/blt95bd61b348310fa3/blte3ab2d735691af6f/63d91a21c9787852a26be779/MOB-Hero_video.jpg?format=pjpg&auto=webp&quality=60&fit=bounds',
    title: "Perangebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 200,
    category: 'Women',
    quantity:27
},
{
    clothUrl:'https://scontent.ftbs5-2.fna.fbcdn.net/v/t39.30808-6/278197226_513686070371268_4377662666383676093_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IGwvAniVowgAX9aHLgt&_nc_ht=scontent.ftbs5-2.fna&oh=00_AfD9tgD2Qg1r-pSF6nYkG5lKShRTVfnMdwfM0KolCb73gQ&oe=63EA92F6',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'kids',
    quantity:18
},
{
    clothUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9E0WnYsN9-Kb1WU3N_-qJM1nzg88SnQzqhQ&usqp=CAU',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'Men',
    quantity:18
},
{
    clothUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-V7WcnHLiM5CawszKoOIMpgGL2KwtWZ30nA&usqp=CAU',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'Men',
    quantity:18
},
{
    clothUrl:'https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/d0/P00593159.jpg',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'Women',
    quantity:18
},
{
    clothUrl:'https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/e6/P00687884.jpg',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'kids',
    quantity:18
},
{
    clothUrl:'https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/f4/P00713702.jpg',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'kids',
    quantity:18
},
{
    clothUrl:'https://img.mytheresa.com/2176/2176/90/jpeg/catalog/product/01/P00685924.jpg',
    title: "Jinsebi",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim laboriosam eos quis aperiam harum!",
    price: 250,
    category: 'Women',
    quantity:18
},
]



const renderItem = (item) => {
    return `<div class="card" >
    <div class="img-container">
      <img src=${item.clothUrl} alt="images go here" class="image" >
    </div>
  
   <div class="card-info">
  <h3 class="card-title" >${item.title}</h3>
  <p class="card-subtitle" >${item.subTitle}</p>
  <p class="card-price" >${item.price}</p>
  <p class="quantity" >${item.quantity}</p>
  <button class="add-button" >Add  to cart</button>
  </div>
  </div>`
};

const cardContainer = document.getElementById("poster");


cardContainer.innerHTML = clothing.map((cloth) => renderItem(cloth));

const btn = document.querySelectorAll(".btn");

    const btns = [...btn];
   
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
        if (btn.textContent === "All") {
            cardContainer.innerHTML = clothing.map((item) => renderItem(item));
            return;
        }


        let filtered = clothing.filter((cloth) => cloth.category === btn.textContent);

        cardContainer.innerHTML = filtered.map((item) => renderItem(item))
    });
});

// const items = [
//     {category: Men},
//     {category: Women},
//     {category: kids},
// ]

// const searchinput = document.getElementById("search")
// const cardContainer = document.getElementById("poster")

// let selectCategory = 'All'

// btns.forEach(btn => {
//     btn.addEventListener("click", event => {
//         selectCategory = event.target.textContent;
//         search();
//     })
// })
    
// searchinput.addEventListener("input", search);

// function search() {
//  const searchTerm = searchinput.value.toLowerCase();  

//  const filteredItems = items.filter(item => {
//     if (selectCategory === "All" || item.category === selectCategory) {
//         return item.name.toLowerCase().includes(searchTerm);
//     }
//     return false;
//  })
// }
//    cardContainer.innerHTML = "";
//    filteredItems.forEach(item => {

//    })

const inputarea = document.getElementById("search")

inputarea.addEventListener("input", function() {
    if(inputarea.value === "All"){
        cardContainer.innerHTML = clothing.map(cloth => renderItem(cloth))
    }else if(inputarea.value ==="kids" || inputarea.value === "Men" || inputarea.value === "Women"){
        let filtered = clothing.filter(cloth => cloth.category === inputarea.value)
        cardContainer.innerHTML = filtered.map(cloth => renderItem(cloth))
    }
})

// const addtocart = document.querySelector(".add-button")
// console.log(addtocart);

const addToCartButtons = document.querySelectorAll('.add-button');
const addToCartInput = document.querySelector('#addtocart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const cardTitle = button.parentElement.querySelector('.card-title').innerText;
    const cardPrice = button.parentElement.querySelector('.card-price').innerText;
    addToCartInput.value += `${cardTitle} - ${cardPrice}\n`;
  });
});

