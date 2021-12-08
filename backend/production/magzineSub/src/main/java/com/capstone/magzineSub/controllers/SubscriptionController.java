package com.capstone.magzineSub.controllers;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.jpa.SubscriptionResponseRepository;
import com.capstone.magzineSub.models.Subscription;
import com.capstone.magzineSub.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class SubscriptionController{
    @Autowired
    private SubscriptionService service;
    @Autowired
    private SubscriptionResponseRepository subscriptionResponseRepository;

    //post methods
    @PostMapping("/subscriptions")
    public Subscription addSubscription(@RequestBody Subscription subscriptionObj){
        return service.saveSubscription(subscriptionObj);
    }

//    @PostMapping("/subscriptions")
//    public List<Subscription> addSubscription(@RequestBody List<Subscription> subscriptionObjs){
//        return service.saveSubscriptions(subscriptionObjs);
//    }

    //get
    @GetMapping("/subscriptions")
    public List<Subscription> findSubscriptions(){
        return service.getSubscriptions();
    }

    @GetMapping("/subscriptions/{id}")
    public Subscription getSubscriptionById(@PathVariable int id){
        return service.getSubscription(id);
    }

    //put
    @PutMapping ("/subscriptions")
    public Subscription updateSubscription(@RequestBody Subscription subscriptionObj){
        return service.updateSubscription(subscriptionObj);
    }

    //deleteff
    @DeleteMapping("/subscriptions/{id}")
    public String deleteSubscription(@PathVariable int id){
        return service.deleteSubscription(id);
    }


    @GetMapping("/showsubscription")
    public List<Subscription> showsubscribed(){
        return subscriptionResponseRepository.showsubscription();
    }
}
