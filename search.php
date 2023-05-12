<?php

// search /////////////////////////////////////////////////////

$conn = new mysqli('localhost', 'root', '', 'Auto-Parts-last');

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$manufacturing_year = $_POST['manufacturing_year'];

// Prepare SQL statement to search database
$sql = "SELECT * FROM services WHERE manufacturing_year='$manufacturing_year' ";
$result = mysqli_query($conn, $sql);

// Display search results in a table
if (mysqli_num_rows($result) > 0) {
    echo "<table border='1'>";
    echo "<tr><th>Car Type</th><th>Auto Name</th><th>Auto Number</th><th>Manufacturing Year</th></tr>";
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row["car_type"] . "</td>";
        echo "<td>" . $row["auto_name"] . "</td>";
        echo "<td>" . $row["auto_number"] . "</td>";
        echo "<td>" . $row["manufacturing_year"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
// Close database connection
mysqli_close($conn);

?>
