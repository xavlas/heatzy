package com.example.demo.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class aboutController {

    @GetMapping("/about")
    public boolean about() {
        return true;
    }
}
