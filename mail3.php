<?php



$userName = $_POST['name'];
$userLesson = $_POST['dropdown'];
$userEmail = $_POST['email'];
$userMobileNo = $_POST['mobileNo'];

$to = "Info@rbrmuzik.com";

$subject = "mail From website";

$body .= "From: ".$userName. "\r\n"; 
$body .="Lesson: ".$userLesson. "\r\n";
$body .= "Email: ".$userEmail. "\r\n"; 
$body .= "MobileNo: ".$userMobileNo. "\r\n";



 //if($email!=NULL){
    mail($to,$subject,$body);

 //}


//redirect page
 header("Location:thankyou.html");






?>

