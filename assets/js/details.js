let id = new URLSearchParams(window.location.search).get("id");
const body = document.querySelector("body");

fetch("http://localhost:3000/All/" + id)
  .then((response) => response.json())
  .then((element) => {
    body.innerHTML = `

    <div class="item2">
    <img src="${element.image}" alt="">
    <h4>${element.name}</h4>
    <span>$${element.price} </span>
       <div>
        `;
  });
