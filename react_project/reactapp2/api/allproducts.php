<?php
include('db_connection.php');

$sql = "SELECT * FROM products";
$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
    $products['id'] = $row['id'];
    $products['name'] = $row['name'];
    $products['details'] = $row['details'];
    $products['image'] = $row['image'];
    $products['price'] = $row['price'];

    $myproducts['pr'][] = $products;
}

echo json_encode(['success' => "Yes", 'datas' => $myproducts]);
