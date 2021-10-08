<?php

interface Validate
{
    public function validateEmpty();
    public function validateSKU();
    public function validatePrice();
    public function validateAttributes();
};
