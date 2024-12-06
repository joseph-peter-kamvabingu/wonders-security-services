document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        if (result === 'success') {
            alert('Thank you! Your message has been sent.');
        } else {
            alert('Sorry, there was an issue sending your message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An unexpected error occurred.');
    });
});

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
  
    const phone = contactPhone.value.trim();
  
    if (!isPhoneNumber(phone)) {
      messagePhone.style.display = 'block'; // Show the error message
      messagePhone.textContent = '*Please enter a valid phone number (e.g., 0999999999)';
    } else {
      messagePhone.style.display = 'none'; // Hide the error message
    }
  
    // Perform other validations for name, email, and message here...
  });
  
