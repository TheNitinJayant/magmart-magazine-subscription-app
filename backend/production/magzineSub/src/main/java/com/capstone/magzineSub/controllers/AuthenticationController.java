package com.capstone.magzineSub.controllers;

import com.capstone.magzineSub.jpa.UserRepository;
import com.capstone.magzineSub.models.AuthenticationRequest;
import com.capstone.magzineSub.models.AuthenticationResponse;
import com.capstone.magzineSub.models.ResponseMessage;
import com.capstone.magzineSub.models.User;
import com.capstone.magzineSub.service.LogInUserDetailsService;
import com.capstone.magzineSub.service.UserService;
import com.capstone.magzineSub.util.JwtUtil;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Calendar;
import java.util.Date;

@RestController
@RequestMapping()
@CrossOrigin
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
//    private UserDetailsService userDetailsService;
    //changed service to make use of findByEmail
    private LogInUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserService userService;

    @GetMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticateGet(@RequestParam String username, @RequestParam String password){

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
        }
        catch (BadCredentialsException e){
            System.out.println(e);
        }

        UserDetails userDetails = userDetailsService.loadUserByUsername(username);

        String jwt = jwtUtil.generateToken(userDetails);

        authenticationResponse.setJwt(jwt);
        authenticationResponse.setUser(new User());
        authenticationResponse.setMessage("Success");

        return ResponseEntity.ok(authenticationResponse);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticatePost(@RequestBody AuthenticationRequest authenticationRequest){

        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();

        AuthenticationResponse authenticationResponse = new AuthenticationResponse();

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(email, password)
            );
        }
        catch (BadCredentialsException e){
            System.out.println(e);
        }
        // change loadUserByEmail
        UserDetails userDetails = userDetailsService.loadUserByUsername(email);

        User user = repository.findByEmail(email);

        String jwt = jwtUtil.generateToken(userDetails);

        authenticationResponse.setJwt(jwt);
        authenticationResponse.setUser(user);
        authenticationResponse.setMessage("Success");

        return ResponseEntity.ok(authenticationResponse);
    }

    @CrossOrigin
    @PostMapping("/signin")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authenticationRequest){
        String email = authenticationRequest.getEmail();
        String password = authenticationRequest.getPassword();

        ResponseMessage rm = new ResponseMessage();
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        Integer res = userService.findByEmailAndPassword(email,password);
        System.out.println(res);
        if(res==0){
            //email wrong
            authenticationResponse.setMessage("Email not Signed Up");
            return new ResponseEntity<AuthenticationResponse>(authenticationResponse, HttpStatus.FORBIDDEN);
        }
        if(res==1){
            //email correct password wrong
            authenticationResponse.setMessage("Password Incorrect");
            return new ResponseEntity<AuthenticationResponse>(authenticationResponse, HttpStatus.FORBIDDEN);
        }
        if(res==2){
//            Correct Credentials
            try {
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(email, password)
                );
            }
            catch (BadCredentialsException e){
                System.out.println(e);
            }
            // change loadUserByEmail
            UserDetails userDetails = userDetailsService.loadUserByUsername(email);

            User user = repository.findByEmail(email);

            String jwt = jwtUtil.generateToken(userDetails);

            authenticationResponse.setJwt(jwt);
            authenticationResponse.setUser(user);
            authenticationResponse.setMessage("Success");

            return ResponseEntity.ok(authenticationResponse);

        }

        authenticationResponse.setMessage("Error");
        return new ResponseEntity<>(authenticationResponse,HttpStatus.FORBIDDEN);
    }

    @GetMapping("/check")
    public ResponseEntity<String> check(){
        return ResponseEntity.ok("Authentication working");
    }
}
