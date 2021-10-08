<?php
include "src/autoload.php";
include "config.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = explode("/", $uri);
// $requestMethod = $_SERVER["REQUEST_METHOD"];

// Everything else except endpoints starting with `/products` results in a 404 Not Found
if ($uri[2] !== "products") {
    header("HTTP/1.1 404 Not Found");
    exit();
}
//TODO: Add more checks

$router = new Router();
$router->processRequest($uri[3]);
