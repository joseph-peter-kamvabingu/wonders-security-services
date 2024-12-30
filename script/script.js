if (isValid) {
    console.log("Validation passed. Sending form...");
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        console.log("Server response:", result);
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
