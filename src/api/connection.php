<?php
function connectBD (){
    $HOST = "localhost";
    $USER = "root";
    $PASS = "";
    $NAMEBD = "react_test";
    $conn = new mysqli($HOST,$USER,$PASS,$NAMEBD);

    if ($conn->connect_error) {
        die (json_encode(["result" => "CONNECTION ERROR: ".$conn->connect_error]));
    } else {
        $conn->set_charset("utf8");
    }
    return $conn;
}
?>