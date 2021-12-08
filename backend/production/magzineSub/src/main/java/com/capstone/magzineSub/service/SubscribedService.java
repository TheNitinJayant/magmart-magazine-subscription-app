package com.capstone.magzineSub.service;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.jpa.SubscribedRepository;
import com.capstone.magzineSub.jpa.SubscribedResponseRepository;
import com.capstone.magzineSub.models.Subscribed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscribedService {
    @Autowired
    private SubscribedRepository repository;

    public Subscribed saveSubscribed(Subscribed subscribedObj){
        return repository.save(subscribedObj);
    }
    public List<Subscribed> saveSubscribeds(List<Subscribed> subscribedObjs){
        return repository.saveAll(subscribedObjs);
    }

    //get fetch data from DB
    public List<Subscribed> getSubscribeds(){
        return repository.findAll();
    }
    //get
    public Subscribed getSubscribed(int id){
        return repository.findById(id).orElse(null);
    }
    //get method made by us and defined in Repository interface
    // public Subscribed getSubscribedByFullname(String name){
    //     return repository.findByFullname(name);
    // }

    //delete
    public String deleteSubscribed(int id){
        repository.deleteById(id);
        return "Subscribed deleted" + id;
    }

    //update
    public Subscribed updateSubscribed(Subscribed SubscribedObj){
        Subscribed existingSubscribed = repository.findById(SubscribedObj.getSubed_id()).orElse(null);

        existingSubscribed.setSub_id(SubscribedObj.getSub_id());
        existingSubscribed.setUser_id(SubscribedObj.getUser_id());
        existingSubscribed.setStart_date(SubscribedObj.getStart_date());
        existingSubscribed.setEnd_date(SubscribedObj.getEnd_date());

        return repository.save(existingSubscribed);
    }
}