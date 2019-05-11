<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bootcamp";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$name=$_POST['name'];

$sql = "INSERT INTO `skill` (`name`) VALUES ('$name')";

if (mysqli_query($conn, $sql)) {
    echo header ("location:index.php");
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>