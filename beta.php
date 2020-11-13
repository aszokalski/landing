<?php
$servername = "localhost";
$username = "rohlldln_beta";
$password = "Dupa1234";
$dbname = "rohlldln_beta";
echo "dupa";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

$email = $_POST["emali"];
$job = $_POST["job"];
$phone = $_POST["phone"];
$q1 = $_POST["q1"];
$q2 = $_POST["q2"];
$q3 = $_POST["q3"];
$tn = $_POST["inlineRadioOptions"];

echo $q3;
echo $tn;


$sql = "INSERT INTO Users (Emai, Zawod, Tel, Odp1, Odp2, Odp3, Odp4)
VALUES ($email, $job, $phone, $tn, $q1, $q2, $q3)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>