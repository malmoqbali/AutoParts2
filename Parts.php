<?php

class AutoParts {
    private $conn;
  
    function __construct() {
      $this->conn = new mysqli('localhost', 'root', '', 'Auto-Parts-last');
      if ($this->conn->connect_error) {
        die('Connection Failed : ' . $this->conn->connect_error);
      }
    }
  
    function __destruct() {
      $this->conn->close();
    }
  
    function validate_input($input) {
      $input = trim($input);
      $input = htmlspecialchars($input, ENT_QUOTES);
      return $input;
    }
  

    
    function insert_data($name, $email, $phone, $part_name, $part_number, $quantity) {
      $stmt = $this->conn->prepare("INSERT INTO Parts(name, email, phone, part_name, part_number, quantity) VALUES (?, ?, ?, ?, ?, ?)");
  
      // Specify data types
      $stmt->bind_param("sssssi", $name, $email, $phone, $part_name, $part_number, $quantity);
  
      $stmt->execute();
      echo "Registration successful";
  
      $stmt->close();
    }
  






    function process_data($name, $email, $phone, $part_name, $part_number, $quantity) {
      // Validate input
      $name = $this->validate_input($name);
      $email = $this->validate_input($email);
      $phone = $this->validate_input($phone);
      $part_name = $this->validate_input($part_name);
      $part_number = $this->validate_input($part_number);
      $quantity = intval($quantity); // Convert quantity to integer
  
      // Insert data into database
      $this->insert_data($name, $email, $phone, $part_name, $part_number, $quantity);
    }
  }
  
  // Create an instance of AutoParts class
  $autoParts = new AutoParts();
  
  // Retrieve data from form
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $part_name = $_POST['part_name'];
  $part_number = $_POST['part_number'];
  $quantity = $_POST['quantity'];
  
  // Process data
  $autoParts->process_data($name, $email, $phone, $part_name, $part_number, $quantity);
  

?>
