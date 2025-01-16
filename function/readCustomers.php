<?php require_once("../config/db_con.php");?>
<?php

$associative = array();
$sql = "SELECT * FROM akwamens_customers";
$result = mysqli_query($con, $sql);
while($row = mysqli_fetch_assoc($result)){
    $customerName = $row['customerName'];
    $customerEmail = $row['customerEmail'];
    $customerPhone = $row['customerPhone'];
    $customerAddress = $row['customerAddress'];
    $customerCity = $row['customerCity'];
    $customerCountry = $row['customerCountry'];
    $customerPostalCode = $row['customerPostalCode'];
    $companyName = $row['companyName'];
    $associative[] = array(
        "customer__name" => $customerName,
        "customer__email" => $customerEmail,
        "customer__phone" => $customerPhone,
        "customer__address" => $customerAddress,
        "customer__city" => $customerCity,
        "customer__country" => $customerCountry,
        "customer__postal_code" => $customerPostalCode,
        "company__name" => $companyName
    );
}
echo json_encode($associative);