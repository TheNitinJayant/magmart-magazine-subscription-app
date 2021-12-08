package com.capstone.magzineSub.controllers;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.jpa.SubscribedResponseRepository;
import com.capstone.magzineSub.models.Subscribed;
import com.capstone.magzineSub.service.SubscribedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

public class SubscribedController {
    @Autowired
    private SubscribedService service;
    @Autowired
    private SubscribedResponseRepository subscribedResponseRepository;

    //post methods
    @PostMapping("/subscribed")
    public Subscribed addSubscribed(@RequestBody Subscribed subscribedObj){
        return service.saveSubscribed(subscribedObj);
    }
    @PostMapping("/subscribeds")
    public List<Subscribed> addSubscribeds(@RequestBody List<Subscribed> subscribedObjs){
        return service.saveSubscribeds(subscribedObjs);
    }

    //get
    @GetMapping("/subscribed")
    public List<Subscribed> findSubscribeds(){
        return service.getSubscribeds();
    }

    @GetMapping("/subscribed/{id}")
    public Subscribed getSubscribedById(@PathVariable int id){
        return service.getSubscribed(id);
    }

    //put
    @PutMapping ("/subscribed")
    public Subscribed updateSubscribed(@RequestBody Subscribed subscribedObj){
        return service.updateSubscribed(subscribedObj);
    }

    //delete
    @DeleteMapping("/subscribed/{id}")
    public String deleteSubscribed(@PathVariable int id){
        return service.deleteSubscribed(id);
    }

    //showSubscribed
    @GetMapping("/showsubscribed/{id}")
    public List<Subscribed> showsubscribed(@PathVariable int id){
        return subscribedResponseRepository.showsubscribed(id);
    }

}
