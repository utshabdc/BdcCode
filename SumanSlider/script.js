document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".custom-carousel .item")
  
    items.forEach((item) => {
      item.addEventListener("click", () => {
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })
        item.classList.toggle("active")
      })
    })
  
    // Optional: Add touch swipe functionality for mobile devices
    let touchStartX = 0
    let touchEndX = 0
    const carousel = document.querySelector(".custom-carousel")
  
    carousel.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX
      },
      false,
    )
  
    carousel.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX
        handleSwipe()
      },
      false,
    )
  
    function handleSwipe() {
      if (touchEndX < touchStartX) {
        // Swipe left
        carousel.scrollBy({ left: 320, behavior: "smooth" })
      }
      if (touchEndX > touchStartX) {
        // Swipe right
        carousel.scrollBy({ left: -320, behavior: "smooth" })
      }
    }
  })
  
  