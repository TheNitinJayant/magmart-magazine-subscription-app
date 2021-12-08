package com.capstone.magzineSub.service;

import com.capstone.magzineSub.jpa.UserRepository;
import com.capstone.magzineSub.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository repository;

    //post
    public User saveUser(User userObj){
        return repository.save(userObj);
    }
    public List<User> saveUsers(List<User> userObjs){
        return repository.saveAll(userObjs);
    }

    //get fetch data from DB
    public List<User> getUsers(){
        return repository.findAll();
    }
    //get
    public User getUser(int id){
        return repository.findById(id).orElse(null);
    }
    //get method made by us and defined in Repository interface
    public User getUserByFullname(String name){
        return repository.findByFullname(name);
    }

    //delete
    public String deleteUser(int id){
        repository.deleteById(id);
        return "User deleted" + id;
    }

    //update
    public User updateUser(User userObj){
        User existingUser = repository.findById(userObj.getUser_id()).orElse(null);

        existingUser.setEmail(userObj.getEmail());
        existingUser.setFullname(userObj.getFullname());
        existingUser.setPassword(userObj.getPassword());
        existingUser.setUser_role(userObj.getUser_role());

        return repository.save(existingUser);

    }

    public boolean findByEmail(String email){
        User us = repository.findByEmail(email);
        if(us!=null){
            return true;
        }
        return false;
    }

    //no need to define in repository because we can use findByEmail to make this
    public Integer findByEmailAndPassword(String email,String password){
        User us = repository.findByEmail(email);
        if(us==null){
            return 0;
        }
        else if(!us.getPassword().equals(password)){
            return 1;
        }
        else{
            return 2;
        }
    }

}
