<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

include_once('./connection.php');

//Read JSON data from the body request
$jsonData = file_get_contents("php://input");

if($jsonData === ''){
    echo 'Waiting request... :(';
}else{
// Decoding JSON to array PHP
$formData = json_decode($jsonData);

// Verify if the decodification was success
    if (json_last_error() === JSON_ERROR_NONE) {
        // Encode again for the result
        echo json_encode($formData);
    } else {
        // Encode the error
        echo json_encode(['error' => 'Invalid JSON']);
    }
}
?>