<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$conn = new mysqli('localhost','root','','Auto-Parts-last');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into contactUs1(name,email,message) values(?, ?, ?)");
    $stmt->bind_param("sss",$name, $email, $message);
    $stmt->execute();
    echo "registration Successfully....";
    $stmt->close();
    $conn->close();
}
$conn = new mysqli('localhost','root','','Auto-Parts-last');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $sql = "SELECT * FROM contactUs1";
    $result = $conn->query($sql);

    if ($result-> num_rows > 0) {
        // table
        echo "<table border='1'>";
        echo "<tr><th>Name</th><th>Email</th><th>Message</th></tr>";

        // Loop through each row of the result set and display it in the table
        while($row = $result->fetch_assoc()) {
            echo  "</td><td>" . $row["name"] . "</td><td>" . $row["email"] . "</td><td>" . $row["message"] . "</td></tr>";
        }
        // Close the table
        echo "</table>";
    } else {
        echo "0 results";
    }
    $conn->close();
}
?>
