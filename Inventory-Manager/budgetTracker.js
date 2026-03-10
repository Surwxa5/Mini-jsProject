const Inventory=[
  {
    name:"milk",
    price:3
  },
  {
    name:"chocolate",
    price:4
  },
  {
    name:"chocopouder",
    price:6
  }
]

const list = document.getElementById('item-list');
const budgetInput = document.getElementById("input-text"); // Renamed for clarity

const displayItem = () => {
  list.innerHTML = ''; // Clear the old list
  
  // 1. Get the number the user typed
  const userBudget = Number(budgetInput.value);

  
  const affordableItems = Inventory.filter(item => item.price <= userBudget);


  if (affordableItems.length === 0) {
    list.innerHTML = "<li>You can't afford anything!</li>";
    return; 
  }
  affordableItems.forEach((item) => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item: ${item.name} | Price: $${item.price}`;
    list.appendChild(newItem);
  });
};

document.getElementById('showItem').addEventListener("click", displayItem)