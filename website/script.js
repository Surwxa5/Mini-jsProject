fetch('https://fakestoreapi.com/products')
.then((res)=>res.json())
.then((data)=>{
  const box=document.getElementById('outputRes')
  data.forEach((item)=>{
    box.innerHTML+=`<div class="product">
      <img src="${item.image}"/>
      <div class="product-title">${item.title}</div>
      <div class="product-price">${item.price}</div>
      <div class="product-rating-rate">${item.rating.rate}</div>
      <div class="product-rating-count">${item.rating.count}</div>

      </div>

      `
  })
})