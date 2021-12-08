package com.capstone.magzineSub.service;

import com.capstone.magzineSub.jpa.SubscriptionRepository;
import com.capstone.magzineSub.models.Subscription;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {
    @Autowired
    private SubscriptionRepository repository;

    //post
    public Subscription saveSubscription(Subscription subscriptionObj){
        return repository.save(subscriptionObj);
    }
    public List<Subscription> saveSubscriptions(List<Subscription> subscriptionObjs){
        return repository.saveAll(subscriptionObjs);
    }

    //get fetch data from DB
    public List<Subscription> getSubscriptions(){
        return repository.findAll();
    }
    //get
    public Subscription getSubscription(int id){
        return repository.findById(id).orElse(null);
    }
    //get method made by us and defined in Repository interface


    //delete
    public String deleteSubscription(int id){
        repository.deleteById(id);
        return "Subscription deleted" + id;
    }

    //update
    public Subscription updateSubscription(Subscription SubscriptionObj){
        Subscription existingSubscription = repository.findById(SubscriptionObj.getSub_id()).orElse(null);

        existingSubscription.setMag_id(SubscriptionObj.getMag_id());
        existingSubscription.setSub_time(SubscriptionObj.getSub_time());
        existingSubscription.setPrice(SubscriptionObj.getPrice());

        return repository.save(existingSubscription);

    }

}
