package com.capstone.magzineSub.controllers;

import com.capstone.magzineSub.models.User;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DefaultController {
    @GetMapping("/")
    public String root() {
        return "Capstone Project";
    }

    @GetMapping("/index")
    public String index() {
        return "Hello World!";
    }
//    @GetMapping("/user")
//    public User user() {
//        return new User();
//    }

}
