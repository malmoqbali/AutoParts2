<?php

// Insert /////////////////////////////////////////////////////

$car_type = $_POST['car_type'];
$auto_name = $_POST['auto_name'];
$auto_number = $_POST['auto_number'];
$manufacturing_year = $_POST['manufacturing_year'];

$conn = new mysqli('localhost', 'root', '', 'Auto-Parts-last');
if ($conn->connect_error) {
    die('Connection Failed : '.$conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into services(car_type, auto_name, auto_number, manufacturing_year) values(?, ?, ?, ?)");
    $stmt->bind_param("sssi", $car_type, $auto_name, $auto_number, $manufacturing_year);
    $stmt->execute();
    echo "Insert Successful!";
    $stmt->close();
    $conn->close();
}




?>



