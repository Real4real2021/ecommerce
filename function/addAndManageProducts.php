<?php require_once("../config/db_con.php"); ?>
<?php

if(isset($_POST['product__name'])){
    $productName = mysqli_real_escape_string($con, $_POST['product__name']);
    $productCategory = mysqli_real_escape_string($con, $_POST['product__category']);
    $productPrice = mysqli_real_escape_string($con, $_POST['product__price']);
    $productDescription = mysqli_real_escape_string($con, $_POST['product__description']);   
    $companyName = mysqli_real_escape_string($con, $_POST['company__name']);
    
    $sql = "INSERT INTO akwamens_inventory (productName, productCategory, productPrice, productDescription, companyName) VALUES ('$productName', '$productCategory', '$productPrice', '$productDescription', '$companyName')";
    mysqli_query($con, $sql) or die(json_encode(mysqli_error($con)));
    echo json_encode("Data added successfully");
}