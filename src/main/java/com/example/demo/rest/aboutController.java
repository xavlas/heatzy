package com.example.demo.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class aboutController {

    @CrossOrigin(origins = "http://localhost:8091")
    @GetMapping("/about")
    public boolean about() {
        return true;
    }
}
