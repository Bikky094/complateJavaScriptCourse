function scrollLeft() {
  document.getElementById("scrollable").scrollBy({
    left: -100, // Adjust scroll speed
    behavior: "smooth"
  });
}

function scrollRight() {
  document.getElementById("scrollable").scrollBy({
    left: 100, // Adjust scroll speed
    behavior: "smooth"
  });
}





















// const scrollContainer = document.getElementById("dragScroll");

// let isDown = false;
// let startX;
// let scrollLeft;

// scrollContainer.addEventListener("mousedown", (e) => {
//   isDown = true;
//   scrollContainer.classList.add("active");
//   startX = e.pageX - scrollContainer.offsetLeft;
//   scrollLeft = scrollContainer.scrollLeft;
// });

// scrollContainer.addEventListener("mouseleave", () => {
//   isDown = false;
// });

// scrollContainer.addEventListener("mouseup", () => {
//   isDown = false;
// });

// scrollContainer.addEventListener("mousemove", (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - scrollContainer.offsetLeft;
//   const walk = (x - startX) * 2; // Adjust speed
//   scrollContainer.scrollLeft = scrollLeft - walk;
// });
