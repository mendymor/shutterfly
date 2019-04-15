<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$days = array();
$days["days"] = array();

$sunday = array(
    "name" => "sunday"
);

$monday = array(
    "name" => "monday"
);

$tuesday = array(
    "name" => "tuesday"
);

$wednesday = array(
    "name" => "wednesday"
);

$thusday = array(
    "name" => "thusday"
);

array_push($days["days"], $sunday, $monday, $tuesday, $wednesday, $thusday);

// set response code - 200 OK
http_response_code(200);

// show days data in json format
echo json_encode($days);
