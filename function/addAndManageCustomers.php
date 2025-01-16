<?php require_once("../config/db_con.php");?>
<?php

if(isset($_POST['customer__name'])){
    $customer__name = $_POST['customer__name'];
    $customer__email = $_POST['customer__email'];
    $customer__phone = $_POST['customer__phone'];
    $customer__address = $_POST['customer__address'];
    $customer__city = $_POST['customer__city'];
    $customer__country = $_POST['customer__country'];
    $customer__postal_code = $_POST['customer__postal_code'];
    $company__name = $_POST['company__name'];

    $sql = "INSERT INTO akwamens_customers (customerName, customerEmail, customerPhone, customerAddress, customerCity, customerCountry, customerPostalCode, companyName) VALUES ('$customer__name', '$customer__email', '$customer__phone', '$customer__address', '$customer__city', '$customer__country', '$customer__postal_code', '$company__name')";
    mysqli_query($con, $sql) or die(mysqli_error($conn));
    echo json_encode("Data added successfully"); 
}