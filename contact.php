<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form fields
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Tumhara email jaha receive karna hai
    $to = "bagsubho41@gmail.com";   // <-- yaha apna email likho

    // Email ka subject aur body
    $subject = "New message from Portfolio Contact Form";
    $body = "You have received a new message.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";

    // Headers (sender ka email use karenge reply ke liye)
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<h2 style='color:green;'>Message sent successfully! ✅</h2>";
    } else {
        echo "<h2 style='color:red;'>Sorry, something went wrong. ❌</h2>";
    }
}
?>
