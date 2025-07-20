// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target)
      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      }
    })
  }

  // Contact Form Validation and Submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Clear previous error messages
      clearErrorMessages()

      // Get form data
      const formData = new FormData(contactForm)
      const name = formData.get("name").trim()
      const email = formData.get("email").trim()
      const message = formData.get("message").trim()

      let isValid = true

      // Validate name
      if (!name) {
        showError("name-error", "Please enter your full name.")
        isValid = false
      } else if (name.length < 2) {
        showError("name-error", "Name must be at least 2 characters long.")
        isValid = false
      }

      // Validate email
      if (!email) {
        showError("email-error", "Please enter your email address.")
        isValid = false
      } else if (!isValidEmail(email)) {
        showError("email-error", "Please enter a valid email address.")
        isValid = false
      }

      // Validate message
      if (!message) {
        showError("message-error", "Please enter your message.")
        isValid = false
      } else if (message.length < 10) {
        showError("message-error", "Message must be at least 10 characters long.")
        isValid = false
      }

      // If form is valid, simulate submission
      if (isValid) {
        // Show loading state
        const submitBtn = contactForm.querySelector(".submit-btn")
        const originalText = submitBtn.textContent
        submitBtn.textContent = "Sending..."
        submitBtn.disabled = true

        // Simulate API call delay
        setTimeout(() => {
          // Reset button
          submitBtn.textContent = originalText
          submitBtn.disabled = false

          // Show success message
          alert("Thank you for your message! We will get back to you soon.")

          // Reset form
          contactForm.reset()
        }, 1500)
      }
    })
  }

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll effect to navbar
  let lastScrollTop = 0
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add fade-in animation for elements when they come into view
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".event-card, .service-card, .leader-card")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Helper Functions
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  if (errorElement) {
    errorElement.textContent = message
    errorElement.style.display = "block"
  }
}

function clearErrorMessages() {
  const errorElements = document.querySelectorAll(".error-message")
  errorElements.forEach((element) => {
    element.textContent = ""
    element.style.display = "none"
  })
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Set initial opacity for smooth loading
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"

    // If image is already loaded (cached)
    if (img.complete) {
      img.style.opacity = "1"
    }
  })
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape") {
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById("nav-toggle")

    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  }
})

// Add focus management for accessibility
document.addEventListener("DOMContentLoaded", () => {
  const focusableElements = document.querySelectorAll(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
  )

  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #3498db"
      this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = ""
      this.style.outlineOffset = ""
    })
  })
})

// History timeline 
    $(function(){
      $().timelinr({
        orientation:  'vertical',
        issuesSpeed:  300,
        datesSpeed:   100,
        arrowKeys:    'true',
        startAt:    3
      })
    });
