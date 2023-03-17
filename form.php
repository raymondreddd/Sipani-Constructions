<?php

$name = $_POST['name'];
$v_email = $_POST['email'];
$org = $_POST['org'];
$phone = $_POST['phone'];

$name = test_input($_POST["name"]);
// check name only contains letters and whitespace
if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
    $nameError = "Only letters and white space allowed";
}

if (empty($_POST["email"])) {
    $emailError = "Email is required";
} else {
    $email = test_input($_POST["email"]);
    // check if e-mail address syntax is valid or not
    if (!preg_match("/([w-]+@[w-]+.[w-]+)/", $email)) {
        $emailError = "Invalid email format";
    }
}

$email_from = 'raymondreddington40@gmail.com';
$email_subject = 'New Visitor';

$email_body = "Visitor Name: $name. \n" .
    "Visitor Email: $v_email . \n" .
    "Organisation: $org . \n" .
    "Phone: $phone .";

$to = 'bishtmukund01@gmail.com';

$headers = "From: $email_from \r \n";
$headers .= "Reply-To: $v_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("Location: contact_us.html");

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
