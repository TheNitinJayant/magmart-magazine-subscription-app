package com.capstone.magzineSub.controllers;


import com.capstone.magzineSub.models.ResponseMessage;
import com.capstone.magzineSub.models.User;
import com.capstone.magzineSub.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;
import java.util.Date;

@CrossOrigin
@RestController
public class SignupController {
    @Autowired
    private UserService service;
    @CrossOrigin
    @PostMapping("/signup")
    public ResponseEntity<ResponseMessage> signup(@RequestBody User userObj){
        ResponseMessage rm = new ResponseMessage();
        boolean res = service.findByEmail(userObj.getEmail());
        if(res)
        {
            rm.setMessage("User Already Signed Up !");
            return new ResponseEntity<>(rm, HttpStatus.CONFLICT);
        }
        else{
            User us = service.saveUser(userObj);
            rm.setMessage("User Signed UP !");
            return new ResponseEntity<>(rm, HttpStatus.OK);
        }

    }
}
