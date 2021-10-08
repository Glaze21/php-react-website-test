<?php

class Router
{
    public function processRequest(string $requestMethod)
    {
        switch ($requestMethod) {
            case "get":
                return call_user_func("ProductList::show");
                break;
            case "add":
                return call_user_func("ProductList::add");
                break;
            case "delete":
                return call_user_func("ProductList::delete");
                break;
        }
    }
};
