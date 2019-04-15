<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$restaurants = array();
$restaurants["restaurants"] = array();

$pizza = array(
    "name" => "Pizza",
    "count" => 0
);

$falafel = array(
    "name" => "monday",
    "count" => 0
);

$hummus = array(
    "name" => "Hummus",
    "count" => 0
);

$shawarma = array(
    "name" => "Shawarma",
    "count" => 0
);

$coffee = array(
    "name" => "Coffee",
    "count" => 0
);

array_push($restaurants["restaurants"], $pizza, $falafel, $hummus, $shawarma, $coffee);

// set response code - 200 OK
http_response_code(200);

// show days data in json format
echo json_encode($restaurants);
