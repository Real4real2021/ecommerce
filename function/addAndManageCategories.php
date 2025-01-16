<?php require_once("../config/db_con.php"); ?>
<?php

if(isset($_POST['category__name'])){
    $categoryName = mysqli_real_escape_string($con, $_POST['category__name']);
    $categoryDescription = mysqli_real_escape_string($con, $_POST['category__description']);
    $categoryAttributes = mysqli_real_escape_string($con, $_POST['category__attributes']);
    
    $sql = "INSERT INTO akwamens_categories (categoryName, categoryDescription, categoryAttributes) VALUES ('$categoryName', '$categoryDescription', '$categoryAttributes')";
    mysqli_query($con, $sql) or die(json_encode(mysqli_error($con)));
    echo json_encode("Data added successfully");
}