<?php

class ProductList
{
    public static function show()
    {
        return response(200, (new Product)->getAll());
    }

    public static function add(): void
    {
        $inputs = (array) json_decode(file_get_contents("php://input"), true);
        $validator = new Validator($inputs);
    }

    public static function delete()
    {
        $data = (array) json_decode(file_get_contents("php://input"), true);
        foreach ($data as $value) {
            (new Product)->delete("sku", $value);
        }

        return response(200, array("message" => "Deleted count of products: ".count($data)));
    }
};
