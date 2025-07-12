const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}


const form = document.getElementById("contactForm");

if (form) {
  const feedback = document.createElement("p");
  feedback.id = "formFeedback";
  feedback.style.marginTop = "10px";
  feedback.style.fontWeight = "bold";
  form.appendChild(feedback);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    
    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields before submitting.";
      feedback.style.color = "red";
      return;
    }

    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
      feedback.textContent = "Please enter a valid e-mail address.";
      feedback.style.color = "red";
      return;
    }


    feedback.textContent = "Message sent successfully! ✅";
    feedback.style.color = "green";
    form.reset();
  });
}
