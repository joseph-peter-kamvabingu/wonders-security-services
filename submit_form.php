<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST['full-name'];
    $dob = $_POST['dob'];
    $idNumber = $_POST['id-number'];
    $address = $_POST['address'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $to = "josephpeterkamvabingu@gmail.com";  // Your email address
    $subject = "Job Application - " . $fullName;

    $message = "
    <html>
    <head>
    <title>Job Application</title>
    </head>
    <body>
    <h2>Job Application Form Submission</h2>
    <p><strong>Full Name:</strong> $fullName</p>
    <p><strong>Date of Birth:</strong> $dob</p>
    <p><strong>ID Number:</strong> $idNumber</p>
    <p><strong>Address:</strong> $address</p>
    <p><strong>Email Address:</strong> $email</p>
    <p><strong>Phone Number:</strong> $phone</p>
    </body>
    </html>
    ";

    // Set content-type header for sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Additional headers
    $headers .= "From: $email" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your application. We will get in touch with you soon.";
    } else {
        echo "Sorry, there was an error sending your application.";
    }
}
?>
