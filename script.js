const list = document.getElementById("list");
let itemCount = 0;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = "Item " + itemCount;
    list.appendChild(li);
  }
}

// Add first 10 items
addItems(10);

// Detect scroll event
window.addEventListener("scroll", () => {
  // Check if user scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addItems(2); // add 2 more
  }
});
