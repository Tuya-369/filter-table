const tableBody = document.getElementById("table-body");

const createProductElement = (product) => {
  const productElement = `
    <tr>
      <td>${product.productId}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.stock}</td>
      <td>${product.releaseDate}</td>
    </tr>
  `;
  return productElement;
};


let products = [
  { productId: 1, name: "Wireless Mouse", category: "Electronics", price: 25.99, stock: 150, releaseDate: "2025-01-15" },
  { productId: 2, name: "Gaming Laptop", category: "Electronics", price: 1299.99, stock: 50, releaseDate: "2025-02-10" },
  { productId: 3, name: "Office Chair", category: "Furniture", price: 149.99, stock: 200, releaseDate: "2025-03-05" },
  { productId: 4, name: "Bluetooth Speaker", category: "Electronics", price: 49.99, stock: 300, releaseDate: "2025-04-01" },
  { productId: 5, name: "Smartphone", category: "Electronics", price: 699.99, stock: 75, releaseDate: "2025-05-10" },
  { productId: 6, name: "LED TV", category: "Electronics", price: 499.99, stock: 40, releaseDate: "2025-06-22" },
  { productId: 7, name: "Ergonomic Desk", category: "Furniture", price: 299.99, stock: 120, releaseDate: "2025-07-08" },
  { productId: 8, name: "Digital Camera", category: "Electronics", price: 899.99, stock: 30, releaseDate: "2025-08-15" },
  { productId: 9, name: "Portable Charger", category: "Electronics", price: 29.99, stock: 500, releaseDate: "2025-09-01" },
  { productId: 10, name: "Coffee Maker", category: "Home Appliances", price: 79.99, stock: 250, releaseDate: "2025-10-20" },
  { productId: 11, name: "Microwave Oven", category: "Home Appliances", price: 129.99, stock: 180, releaseDate: "2025-11-10" },
  { productId: 12, name: "Electric Kettle", category: "Home Appliances", price: 39.99, stock: 350, releaseDate: "2025-12-01" },
  { productId: 13, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 90, releaseDate: "2025-01-22" },
  { productId: 14, name: "Air Conditioner", category: "Home Appliances", price: 399.99, stock: 60, releaseDate: "2025-02-18" },
  { productId: 15, name: "Gaming Headset", category: "Electronics", price: 89.99, stock: 120, releaseDate: "2025-03-12" },
  { productId: 16, name: "Recliner Chair", category: "Furniture", price: 499.99, stock: 75, releaseDate: "2025-04-18" },
  { productId: 17, name: "Washing Machine", category: "Home Appliances", price: 349.99, stock: 150, releaseDate: "2025-05-25" },
  { productId: 18, name: "Electric Grill", category: "Home Appliances", price: 59.99, stock: 200, releaseDate: "2025-06-05" },
  { productId: 19, name: "Smart Thermostat", category: "Electronics", price: 129.99, stock: 80, releaseDate: "2025-07-17" },
  { productId: 20, name: "Standing Desk", category: "Furniture", price: 199.99, stock: 110, releaseDate: "2025-08-01" },
  { productId: 21, name: "Electric Toothbrush", category: "Health & Personal Care", price: 29.99, stock: 300, releaseDate: "2025-09-25" },
  { productId: 22, name: "Blender", category: "Home Appliances", price: 49.99, stock: 500, releaseDate: "2025-10-15" },
  { productId: 23, name: "Robot Vacuum", category: "Home Appliances", price: 199.99, stock: 120, releaseDate: "2025-11-22" },
  { productId: 24, name: "Portable Air Purifier", category: "Home Appliances", price: 89.99, stock: 150, releaseDate: "2025-12-10" },
];

const render = () => {
  let finalHTML = "";

  products.map((product) => {
    const element = createProductElement(product);
    finalHTML += element;
  });
  tableBody.innerHTML = finalHTML;
};

render();

const inputElement = document.getElementById("myInput")
const buttonElement = document.getElementById("search")

const search = () => {

  const filterItems = products.filter(
    (product) =>

      product.category == inputElement.value ||
      product.name == inputElement.value ||
      product.price == inputElement.value ||
      product.releaseDate == inputElement.value
  );

  products = filterItems;

  render();
};
