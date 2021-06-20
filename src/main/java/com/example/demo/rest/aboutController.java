package com.example.demo.rest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class aboutController {

    @GetMapping("/about")
    @CrossOrigin(exposedHeaders="Access-Control-Allow-Origin")
    public boolean about() {
        return true;
    }
}
