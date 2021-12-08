package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface UserRepository extends JpaRepository<User,Integer> {

    User findByFullname(String name);
    User findByEmail(String email);
}

