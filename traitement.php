  <?php
  
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['text'];
  
  $email_from = 'karine.jamet203@gmail.com';
  $email_subject = "New mail from portfolio";
 
  $email_body = "Nouveau message de $name.\n".":\n $message";
  
  
   $to = "karine.jamet203@gmail.com";
 
  $headers = "From: $email_from \r\n";
 
  $headers .= "Reply-To: $visitor_email \r\n";
 
  mail($to,$email_subject,$email_body,$headers); 
  
  
 

?>