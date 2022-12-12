<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//  header application json file
// gson theke data ante hole{ php://input }theke sandte hobe
include("db_connection.php");
$data = file_get_contents("php://input");
$data = json_decode($data);

if(($data->fname)&& ($data->fname != "")){
   $fname = $data->fname;
   $lname = $data->lname;
   $email = $data->email;
   $password = $data->password;
 $result_query = mysqli_query($db_conn,"SELECT * FROM  registration WHERE email = '$email'");
 if(mysqli_num_rows($result_query)>0){
    echo json_decode("Try with different email address");
 }
 else{
    mysqli_connect($db_conn,"INSERT INTO registration (fname,lname,email,password) VALUES ('$fname','$lname','$email','$password')");
 }
}
else{
    echo json_decode("All data must be filed");
}
// echo $data;
?>