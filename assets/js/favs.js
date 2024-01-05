let favcontainer = document.getElementById("favcontainer");
const getFavorites = async () => {
  const response = await fetch(`http://localhost:3000/favorites`);
  const data = await response.json();
  db = data;
  db.map((item) => {
    let card = document.createElement("div");
    card.className = "myCard";
    card.innerHTML = ` 
    <div class="item2">
        <img src="${item.image}" alt="">
        <h4>${item.name}</h4>
        <span>$${item.price} </span>
        <div>
      <i onclick="removeFromFav(${item.id})"  class="fa-regular fa-heart"></i>
      `;
    favcontainer.appendChild(card);
  });
};

const removeFromFav = (id) => {
  fetch("http://localhost:3000/favorites/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
getFavorites();
