document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Input values
    const name = document.querySelector('.c-name').value.trim();
    const phone = document.querySelector('.c-phone').value.trim();
    const email = document.querySelector('.c-email').value.trim();
    const message = document.querySelector('.c-message').value.trim();

    // Error message elements
    const messageName = document.querySelector('.f-name');
    const messagePhone = document.querySelector('.f-phone');
    const messageEmail = document.querySelector('.f-email');

    // Validation Functions
    const isEmail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); // Basic email format
    const isName = (name) => /^[a-zA-Z\s]+$/.test(name); // Matches letters and spaces

    let isValid = true;

    // Name Validation
    if (!isName(name)) {
        messageName.style.display = 'block';
        isValid = false;
    } else {
        messageName.style.display = 'none';
    }

    // Phone Validation (No restrictions)
    if (!phone) { // Only check if the phone field is empty
        messagePhone.style.display = 'block';
        isValid = false;
    } else {
        messagePhone.style.display = 'none';
    }

    // Email Validation
    if (!isEmail(email)) {
        messageEmail.style.display = 'block';
        isValid = false;
    } else {
        messageEmail.style.display = 'none';
    }

    // If all fields are valid, send the form
    if (isValid) {
        const formData = new FormData(this);

        fetch('process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            if (result === 'success') {
                alert('Thank you! Your message has been sent.');
                this.reset(); // Clear the form
            } else {
                alert('Sorry, there was an issue sending your message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred.');
        });
    }
});
