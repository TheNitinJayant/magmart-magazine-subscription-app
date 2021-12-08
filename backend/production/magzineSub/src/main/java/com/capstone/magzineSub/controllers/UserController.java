package com.capstone.magzineSub.controllers;


import com.capstone.magzineSub.models.User;
import com.capstone.magzineSub.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserService service;

    //post methods
    @PostMapping("/users")
    public User addUser(@RequestBody User userObj){

        System.out.println("Request hit the add user controller");
        return service.saveUser(userObj);
    }

//    @PostMapping("/users")
//    public List<User> addUser(@RequestBody List<User> userObjs){
//        return service.saveUsers(userObjs);
//    }

    //get
    @GetMapping("/users")
    @CrossOrigin
    public List<User> findUsers(){
        return service.getUsers();
    }
//    @GetMapping("/user/{name}")
//    public User getUserByFullname(@PathVariable String name){
//        return service.getUserByFullname(name);
//    }
    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable int id){
        return service.getUser(id);
    }

    //put
    @PutMapping ("/users")
    public User updateUser(@RequestBody User userObj){
        return service.updateUser(userObj);
    }

    //delete
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable int id){
        return service.deleteUser(id);
    }

}
