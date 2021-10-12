<?php

class Validator
{
    private $inputs;
    private $message = null;

    public function __construct(array $inputs)
    {
        $this->inputs = $inputs;
        $this->validate(new $this->inputs["type"]($this->inputs));
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
