<?php
$fn = "emails.txt";
$file = fopen($fn, "a+");
$size = filesize($fn);

if($_POST['email']) fwrite($file, $_POST['email']);
if($_POST['email']) fwrite($file, " ");


$text = fread($file, $size);
fclose($file);


$file_path = 'assets/organizacja_mysli.pdf';
$filename = 'Organizacja myśli.pdf';
header("Content-Type: application/octet-stream");
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=\"".$filename."\""); 
echo readfile($file_path);

?>