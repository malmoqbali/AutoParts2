<?php

// delet /////////////////////////////////////////////////////

$conn = new mysqli('localhost', 'root', '', 'Auto-Parts-last');

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Retrieve record identifier from form
$auto_number = $_POST['auto_number'];

// Prepare SQL statement to delete record from database
$sql = "DELETE FROM services WHERE auto_number='$auto_number'";

// Delete record from database and display success message
if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}

// Close database connection
mysqli_close($conn);












?>



