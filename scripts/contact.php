<?php
if(isset($_POST['submit'])) {
    echo "what up";

    $to_address="nizesystems@gmail.com";
    $subject="Nize.education Contact Us";
    $name=$_POST['name'];
    $email="nizesystems@gmail.com";
    $content=$_POST['content'];
    $message="Name: " . $firstname ." " . $lastname."\n";
    $message .="Email: " . $_POST['email'] . "\n";
    $message .="Subject: " . $_POST['subject'] . "\n";
    $message .="Content: " . $content . "\n";

    //$headers=" From : ". $email ."\r\n";
    //$headers.= 'MIME-Version: 1.0' . "\r\n";
    //$headers.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    echo $message;
    $success = mail($to_address, $subject, $message);
    echo $success;
} else {
    echo "testing";
}
?>