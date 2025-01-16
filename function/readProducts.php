<?php require_once("../config/db_con.php"); ?>
<?php

$associativeArray = array();
$sql = "SELECT * FROM akwamens_inventory";
$result = mysqli_query($con, $sql) or die(json_encode(mysqli_error($con)));
while($row = mysqli_fetch_assoc($result)){
    $primaryId = $row['id'];
    $productName = $row['productName'];
    $productCategory = $row['productCategory'];
    $productPrice = $row['productPrice'];
    $productDescription = $row['productDescription'];
    $companyName = $row['companyName'];
    $associativeArray[] = array(
        'primaryId' => $primaryId,
        'product__name' => $productName,
        'product__category' => $productCategory,
        'product__price' => $productPrice,
        'product__description' => $productDescription,
        'company__name' => $companyName
    );
}
echo json_encode($associativeArray);