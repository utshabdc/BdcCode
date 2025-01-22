document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".custom-carousel .item")
    const carousel = document.querySelector(".custom-carousel")
    const prevArrow = document.querySelector(".prev-arrow")
    const nextArrow = document.querySelector(".next-arrow")
  
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
  
    // Arrow button functionality
    prevArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: -320, behavior: "smooth" })
    })
  
    nextArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: 320, behavior: "smooth" })
    })
  
    // Touch swipe functionality
    let touchStartX = 0
    let touchEndX = 0
  
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
  
  