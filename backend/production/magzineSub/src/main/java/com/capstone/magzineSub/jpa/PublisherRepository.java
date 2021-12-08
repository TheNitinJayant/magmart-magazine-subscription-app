package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.Publisher;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PublisherRepository extends JpaRepository<Publisher,Integer> {

//    Publisher findByFullname(String name);
}

