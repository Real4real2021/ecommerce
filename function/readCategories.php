<?php require_once("../config/db_con.php"); ?>
<?php

$associativeArray = array();
$sql = "SELECT * FROM akwamens_categories";
$result = mysqli_query($con, $sql) or die(json_encode(mysqli_error($con)));
while($row = mysqli_fetch_assoc($result)){
    $primaryId = $row['id'];
    $categoryName = $row['categoryName'];
    $categoryDescription = $row['categoryDescription'];
    $categoryAttributes = $row['categoryAttributes'];
    $associativeArray[] = array(
        'primaryId' => $primaryId,
        'category__name' => $categoryName,
        'category__description' => $categoryDescription,
        'category__attributes' => $categoryAttributes
    );
}
echo json_encode($associativeArray);