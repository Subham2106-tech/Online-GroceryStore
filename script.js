const products = [
  {
    id: 1,
    name: "Basmati Rice",
    category: "rice",
    price: 80,
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/71xpepHmE8L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 2,
    name: "Sunflower Oil",
    category: "oil",
    price: 120,
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/sunflower oil - Copy.jpg"
  },
  {
    id: 3,
    name: "Toor Dal",
    category: "dal",
    price: 95,
    image: "c:/Users/suvam/OneDrive/Documents/all image/Tata-Sampann-Toor-Arhar-Dal--500g-_FOP_-with-Sanjeev-kapoor_f1f98892-6dbf-40be-822b-a922be48b2b9.webp"
  },
  {
    id: 4,
    name: "Nutella",
    category: "other",
    price: 350,
    image: "c:/Users/suvam/OneDrive/Documents/all image/81X4tA48x+L._UF1000,1000_QL80_.jpg"
  },
  {
    id: 5,
    name: "Tata Salt",
    category: "other",
    price: 25,
    image: "c:/Users/suvam/OneDrive/Documents/all image/Tata-Salt-1Kg.jpg"
  },
  {
    id: 6,
    name: "Aashirvaad Atta",
    category: "flour",
    price: 60,
    image: "c:/Users/suvam/OneDrive/Documents/all image/aashirvaad-atta-whole-wheat-10-kg-front-sale-online-coimbatore-1000x1000.jpg"
  },
  {
    id: 7,
    name: "Tata Tea Gold",
    category: "tea",
    price: 180,
    image: "c:/Users/suvam/OneDrive/Documents/all image/1700465603199_51og3I5sEPLSL1100.webp"
  },
  {
    id: 8,
    name: "Fortune Besan",
    category: "flour",
    price: 70,
    image: "c:/Users/suvam/OneDrive/Documents/all image/81JmTiQA68L.jpg"
  },
  {
    id: 9,
    name: "Parle-G Biscuits",
    category: "snacks",
    price: 10,
    image: "c:/Users/suvam/OneDrive/Documents/all image/71bufOt9zAL.jpg"
  },
  {
    id: 10,
    name: "Maggi Noodles",
    category: "snacks",
    price: 15,
    image: "c:/Users/suvam/OneDrive/Documents/all image/nestle-maggi-masala-noodles-500x500.webp"
  },
  {
    id: 11,
    name: "Amul Butter",
    category: "dairy",
    price: 52,
    image: "c:/Users/suvam/OneDrive/Documents/all image/7514beed-37f7-4c8c-b50a-4b39842009b8.webp"
  },
  {
    id: 12,
    name: "Dairy Milk",
    category: "dairy",
    price: 25,
    image: "c:/Users/suvam/OneDrive/Documents/all image/Cadbury_Dairy_Milk_Silk_-_Fruit_Nut_55_g.webp"
  },
  {
    id: 13,
    name: "Fresh Apples (1kg)",
    category: "fruits",
    price: 120,
    image: "c:/Users/suvam/OneDrive/Documents/all image/download (1).jpg"
  },
  {
    id: 14,
    name: "Bananas (1 dozen)",
    category: "fruits",
    price: 45,
    image: "c:/Users/suvam/OneDrive/Documents/all image/images.jpg"
  },
  {
    id: 15,
    name: "Fresh Mangoes (1kg)",
    category: "fruits",
    price: 100,
    image: "c:/Users/suvam/OneDrive/Documents/all image/download (2).jpg"
  },
  {
    id: 16,
    name: "Tomatoes (1kg)",
    category: "vegetables",
    price: 35,
    image: "c:/Users/suvam/OneDrive/Documents/all image/download (3).jpg"
  },
  {
    id: 17,
    name: "Onions (1kg)",
    category: "vegetables",
    price: 30,
    image: "c:/Users/suvam/OneDrive/Documents/all image/download (4).jpg"
  },
  {
    id: 18,
    name: "Potatoes (1kg)",
    category: "vegetables",
    price: 25,
    image: "c:/Users/suvam/OneDrive/Documents/all image/download (5).jpg"
  },
 {
    id: 26,
    name: "Sprite",
    category: "softdrinks",
    price: 90,
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/download (6).jpg"
  }, {
    id: 27,
    name: "Maaza",
    category: "softdrinks",
    price: 75,
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/download (7).jpg"
  }, {
    id: 28,
    name: "Thumps Up",
    category: "softdrinks",
    price: 75,
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/download (8).jpg"
  },
  { id: 22, name: "Pepsi", category: "softdrinks", price: 45, image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (1).jpeg" },
  { id: 23, name: "Coca-Cola", category: "softdrinks", price: 45, image: "file:///C:/Users/suvam/OneDrive/Documents/all image/coca-cola-1.25-liter-new.png" },
  { id: 24, name: "Kissan Tomato Ketchup", category: "other", price: 85, image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP.jpeg" },
  { id: 25, name: "Duracell Batteries (4 pcs)", category: "other", price: 50,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (2).jpeg" },
  { id: 26, name: "Pampers Diapers (M)", category: "baby", price: 300,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (23).jpeg" },
  { id: 27, name: "Johnson's Baby Powder", category: "baby", price: 150,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (3).jpeg" },
  { id: 28, name: "Cerelac Wheat Apple", category: "baby", price: 180,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (4).jpeg" },
  { id: 29, name: "Mother’s Horlicks", category: "baby", price: 270, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (5).jpeg" },
  { id: 30, name: "Johnson’s Baby Shampoo", category: "baby", price: 145, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (6).jpeg" },
  { id: 31, name: "Moong Dal", category: "dal", price: 88, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (7).jpeg" },
  { id: 32, name: "Masoor Dal", category: "dal", price: 82, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (8).jpeg" },
  { id: 33, name: "Fortune Soya Oil", category: "oil", price: 110,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/412TbDp8+mL.jpg" },
  { id: 34, name: "Amul Milk (500ml)", category: "dairy", price: 30, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (9).jpeg" },
  { id: 35, name: "Britannia Cheese Slices", category: "dairy", price: 85,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (10).jpeg" },
  { id: 36, name: "Tata Sampann Besan", category: "flour", price: 68, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (11).jpeg" },
  { id: 37, name: "Surf Excel Bar", category: "other", price: 10,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (12).jpeg" },
  { id: 38, name: "Lifebuoy Soap", category: "other", price: 25,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (13).jpeg" },
  { id: 39, name: "Good Day Biscuits", category: "snacks", price: 10,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (14).jpeg" },
  { id: 40, name: "Unibic Cookies", category: "snacks", price: 20, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/Unibic-Choco-Chip-Cookies-500g.webp" },
  { id: 41, name: "Cucumber (500g)", category: "vegetables", price: 20,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (15).jpeg" },
  { id: 42, name: "Carrot (500g)", category: "vegetables", price: 22, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (16).jpeg" },
  { id: 43, name: "Capsicum (500g)", category: "vegetables", price: 28, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (17).jpeg" },
  { id: 44, name: "Orange (1kg)", category: "fruits", price: 80,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (18).jpeg" },
  { id: 45, name: "Grapes (500g)", category: "fruits", price: 65, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (19).jpeg" },
  { id: 46, name: "Red Label Tea", category: "tea", price: 190,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (20).jpeg" },
  { id: 47, name: "Tata Gold Tea Bags", category: "tea", price: 120, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (24).jpeg" },
  { id: 48, name: "Saffola Gold Oil", category: "oil", price: 135, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (21).jpeg" },
  { id: 49, name: "Harpic Toilet Cleaner", category: "other", price: 99, 
    image: "file:///C:/Users/suvam/OneDrive/Documents/all image/Harpic-Toilet-Cleaner-Concentrate-Powerplus-SDL020126350-1-2cc6a.jpg" },
  { id: 50, name: "Vim Dishwash Gel", category: "other", price: 50,
     image: "file:///C:/Users/suvam/OneDrive/Documents/all image/OIP (22).jpeg" }

];


let cart = [];

function loadProducts(filter = "all") {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const filtered = products.filter(p => filter === "all" || p.category === filter);

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartItems = document.getElementById("cartItems");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("totalPrice").innerText = total;

  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price} x 
      <input type="number" min="1" value="${item.quantity}" onchange="changeQty(${item.id}, this.value)">
      = ₹${item.price * item.quantity}
    `;
    cartItems.appendChild(li);
  });
}

function changeQty(productId, qty) {
  const product = cart.find(item => item.id === productId);
  product.quantity = parseInt(qty);
  updateCart();
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
}

function clearCart() {
  cart = [];
  updateCart();
  toggleCart();
}

function filterProducts() {
  const value = document.getElementById("categoryFilter").value;
  loadProducts(value);
}

function searchProducts() {
  const term = document.getElementById("searchBar").value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term));
  displayFiltered(filtered);
}

function displayFiltered(filtered) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

loadProducts();
document.querySelector('.buy-now-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Simulate placing the order
  alert("Thank you for your purchase!");

  // Clear the cart after buying
  cart = [];
  updateCart(); // This should re-render the cart with 0 items
});

