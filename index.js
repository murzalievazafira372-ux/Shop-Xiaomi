const products = [
  
const products = [
  {
    name: "Xiaomi 14 Pro",
    description: "Bright AMOLED display, powerful processor, and excellent camera quality.",
    price: "сом 69,990"
  },
  {
    name: "Redmi 15 Pro",
    description: "Clear wireless sound, comfortable design, and long battery life.",
    price: "сом 59,990"
  },
  {
    name: "Xiaomi 14 Ultra",
    description: "Track workouts and monitor health with smart features.",
    price: "сом 69,990"
  },
  {
    name: "Xiaomi 17 Pro Max",
    description: "Powerful performance and advanced features for everyday use.",
    price: "сом 69,990"
  },
  {
    name: "Redmi 14Pro+ 5G",
    description: "Smart cleaning with efficient performance and easy control.",
    price: "сом 70,900"
  }
  {
    name: "Redmi Note 13",
    description: "Smart cleaning with efficient performance and easy control.",
    price: "сом 69,990"
  }
  {
    name: "Redmi Note 13 Pro+",
    description: "Smart cleaning with efficient performance and easy control.",
    price: "сом 69,990"
  }
];

// Render products using map()
const productList = document.getElementById("productList");

if (productList) {
  productList.innerHTML = products.map((product, index) => `
    <div class="col-md-6 col-lg-3">
      <div class="product-card-item">
        <div class="product-image" aria-hidden="true"></div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-footer">
            <span class="product-price">${product.price}</span>
            <button
              class="btn btn-primary btn-sm buy-btn"
              type="button"
              data-index="${index}">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Load saved cart
  let cart = JSON.parse(localStorage.getItem("xiaomiCart") || "[]");

  // Add products to cart
  productList.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products[Number(button.dataset.index)];

      if (!product) return;

      cart.push(product);
      localStorage.setItem("xiaomiCart", JSON.stringify(cart));

      button.textContent = "Added ✓";
      button.disabled = true;
    });
  });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "error";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "error";
      return;
    }

    const userData = { name, email, phone, message };

    localStorage.setItem("contactFormData", JSON.stringify(userData));

    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.className = "success";

    contactForm.reset();

    setTimeout(() => {
      formMessage.textContent = "";
      formMessage.className = "";
    }, 3000);
  });
}

];

const productList = document.getElementById("productList");

if (productList) {
  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-3";

    col.innerHTML = `
      <div class="product-card-item">
        <div class="product-image"></div>
        <div class="product-body">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-footer">
            <span class="product-price">${product.price}</span>
            <button class="btn btn-primary btn-sm">Buy</button>
          </div>
        </div>
      </div>
    `;

    productList.appendChild(col);
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.className = "error";
      return;
    }

    if (!email.includes("@")) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "error";
      return;
    }

    const userData = {
      name,
      email,
      phone,
      message
    };

    localStorage.setItem("contactFormData", JSON.stringify(userData));

    formMessage.textContent = "Your message has been sent successfully!";
    formMessage.className = "success";

    contactForm.reset();

    setTimeout(() => {
      formMessage.textContent = "";
      formMessage.className = "";
    }, 3000);
  });
}