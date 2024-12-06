console.log("JavaScript file loaded");

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Input values
    const name = document.querySelector('.c-name').value.trim();
    const email = document.querySelector('.c-email').value.trim();
    const message = document.querySelector('.c-message').value.trim();

    // Error message elements
    const messageName = document.querySelector('.f-name');
    const messageEmail = document.querySelector('.f-email');

    let isValid = true; // Assume the form is valid

    // Name Validation
    if (!name) {
        messageName.textContent = '*Please, enter your name';
        messageName.style.display = 'block';
        isValid = false;
    } else {
        messageName.style.display = 'none';
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageEmail.textContent = '*Please enter a valid email address';
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
