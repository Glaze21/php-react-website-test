<?php

function response($code, $response)
{
    header("Content-Type: application/json");
    http_response_code($code);
    echo json_encode($response);
}
