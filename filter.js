const data = [
    {
        id: 1,
        name: "boAt Wave Call Smart Watch",
        img: "https://m.media-amazon.com/images/I/41qqmdUWnhL._AC_SY200_.jpg",
        price: 1799,
        cat: "Casual"
    },
    {
        id: 2,
        name: "Noise ColorFit Pulse Smart Watch",
        img: "https://m.media-amazon.com/images/I/41Coma77U+L._SY300_SX300_.jpg",
        price: 1899,
        cat: "Casual"
    },
    {
        id: 3,
        name: "Noise Twist Bluetooth Calling Watch",
        img: "https://m.media-amazon.com/images/I/61urYU+lkhL._SL1500_.jpg",
        price: 1999,
        cat: "Casual"
    },
    {
        id: 4,
        name: "Noise Twist Bluetooth Calling Watch",
        img: "https://m.media-amazon.com/images/I/61urYU+lkhL._SL1500_.jpg",
        price: 1999,
        cat: "Casual"
    },
    {
        id: 5,
        name: "Noise Twist Bluetooth Calling Watch",
        img: "https://m.media-amazon.com/images/I/61urYU+lkhL._SL1500_.jpg",
        price: 1999,
        cat: "Casual"
    },
    {
        id: 6,
        name: "Noise Twist Bluetooth Calling Watch",
        img: "https://m.media-amazon.com/images/I/61urYU+lkhL._SL1500_.jpg",
        price: 1999,
        cat: "Casual"
    },
    {
        id: 7,
        name: "Noise ColorFit Pulse Smart Watch",
        img: "https://m.media-amazon.com/images/I/41Coma77U+L._SY300_SX300_.jpg",
        price: 1899,
        cat: "Casual"
    },
    {
        id: 8,
        name: "Noise ColorFit Pulse Smart Watch",
        img: "https://m.media-amazon.com/images/I/41Coma77U+L._SY300_SX300_.jpg",
        price: 1899,
        cat: "Casual"
    },
    {
        id: 9,
        name: "Noise ColorFit Pulse Smart Watch",
        img: "https://m.media-amazon.com/images/I/41Coma77U+L._SY300_SX300_.jpg",
        price: 1899,
        cat: "Casual"
    },
    {
        id: 10,
        name: "Destiny Fashion",
        img: "https://m.media-amazon.com/images/I/71qTbVnVZZL._AC_UL480_FMwebp_QL65_.jpg",
        price: 399,
        cat: "Dress"
    },
    {
        id: 11,
        name: "Destiny Fashion",
        img: "https://m.media-amazon.com/images/I/71qTbVnVZZL._AC_UL480_FMwebp_QL65_.jpg",
        price: 399,
        cat: "Dress"
    },
    {
        id: 12,
        name: "Destiny Fashion",
        img: "https://m.media-amazon.com/images/I/71qTbVnVZZL._AC_UL480_FMwebp_QL65_.jpg",
        price: 399,
        cat: "Dress"
    },
    {
        id: 13,
        name: "Destiny Fashion",
        img: "https://m.media-amazon.com/images/I/71qTbVnVZZL._AC_UL480_FMwebp_QL65_.jpg",
        price: 399,
        cat: "Dress"
    },
    {
        id: 14,
        name: "Aurion Half Kashmir",
        img: "https://m.media-amazon.com/images/I/51hZSRHRudL._SY355_.jpg",
        price: 1399,
        cat: "Sport"
    },
    {
        id: 15,
        name: "Kimirica Bouquet Hand Wash",
        img: "https://m.media-amazon.com/images/I/51jStePxsQL._AC_UL480_FMwebp_QL65_.jpg",
        price: 1399,
        cat: "Luxury"
    },
]
{/* <div class="product">
    <img src="./img/1.jpeg" alt="img">
    <span class="name">name</span>
    <span class="price">Rs-500</span>
</div> */}

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) =>{
    productsContainer.innerHTML = filteredProducts.map((product)=>
         `
        <div class="product">
            <img src=${product.img} alt="img">
            <span class="name">${product.name}</span>
            <span class="price">Rs-${product.price}</span>
        </div> 
        `
    ).join("");
}

displayProducts(data);

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();
    if(value){
        displayProducts(data.filter(item=> item.name.toLowerCase().indexOf(value) !== -1))
    }else{
        displayProducts(data);
    }
})

const setCategories = () =>{
    const allCats = data.map(item=> item.cat)
    const categories = [
        "All", ...allCats.filter((item,i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    console.log(categories);

    categoriesContainer.innerHTML = categories.map(cat => 
        `
         <span class="cat">${cat}</span>
        `
    ).join("");

    categoriesContainer.addEventListener("click", (e) =>{
        const selectedCat = e.target.textContent;

        selectedCat === "All" ? displayProducts(data) : displayProducts(data.filter(item=>
            item.cat === selectedCat
        ));

    })
};

const setPrices = ()=>{
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "Rs - " + maxPrice;

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent = "Rs - " + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    })
}

setCategories(); 
setPrices();