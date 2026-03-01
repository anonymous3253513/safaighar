// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const cleaning = contactForm.querySelector('#cleaningType').value;
  
  alert(`Thank you, ${name}!\nYou selected: ${cleaning}.\nWe will contact you soon.`);
  
  contactForm.reset();
});
document.addEventListener("DOMContentLoaded", function() {
  const reviews = [
    { text: "Amazing service! My house looks brand new.", name: "— Saroj" },
    { text: "Very professional cleaners and great price.", name: "— Kami" },
    { text: "Booked for office cleaning and loved it!", name: "— Bibek" },
    { text: "My move-out cleaning was perfect. Highly recommend!", name: "— Dholi" },
    { text: "Fast, friendly, and thorough cleaning service!", name: "— Bablu" },
    { text: "They made my home sparkle like never before!", name: "— Saroj" }
  ];

  let reviewIndex = 0;

  setInterval(() => {
    const reviewTextEl = document.getElementById("reviewText");
    const reviewNameEl = document.getElementById("reviewName");

    if (reviewTextEl && reviewNameEl) {
      reviewIndex = (reviewIndex + 1) % reviews.length;
      reviewTextEl.textContent = reviews[reviewIndex].text;
      reviewNameEl.textContent = reviews[reviewIndex].name;
    }
  }, 4000); // 4 seconds
});
