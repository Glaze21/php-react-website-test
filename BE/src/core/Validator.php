<?php

class Validator
{
    private $inputs;
    private $message = null;

    public function __construct(array $inputs)
    {
        $this->inputs = $inputs;

        switch ($this->inputs["type"]) {
            case "DVD":
                $this->validate(new  DVD($this->inputs));
                break;
            case "Book":
                $this->validate(new  Book($this->inputs));
                break;
            case "Furniture":
                $this->validate(new  Furniture($this->inputs));
                break;
            default:
            return response(400, array("error" => "Invalid type provided: ",$this->inputs["type"]));
                break;
        }
    }

    public function validate(Validate $validate)
    {
        if (!$validate->validateSKU()) {
            $this->message .= "Invalid SKU or already exists";
        }
        if ($validate->validatePrice()) {
            $this->message .= "Please, provide the data of indicated type";
        }
        if (!$validate->validateAttributes()) {
            $this->message .= "Please, provide the data of indicated type";
        }
        if (!$validate->validateEmpty()) {
            $this->message .= "Please, submit required data";
        }

        if ($this->message == null) {
            $validate->save();
            return response(200, array("message" => "Product added to the database"));
        }

        return response(400, array("message" => $this->message));
    }
};
