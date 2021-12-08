package com.capstone.magzineSub.controllers;


import com.capstone.magzineSub.models.Publisher;
import com.capstone.magzineSub.service.PublisherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PublisherController {
    @Autowired
    private PublisherService pub_service;
    //post methods
    @PostMapping("/publisher")
    public  Publisher addPublisher(@RequestBody Publisher pubOb){
        return  pub_service.savePublisher(pubOb);
    }

    @PostMapping("/publishers")
    public List<Publisher> addPublishers(@RequestBody List<Publisher> publishers){
        return pub_service.savePublishers(publishers);
    }
  //get all publishers
  @GetMapping("/publisher")
    public List<Publisher> getPublishers(){
        return pub_service.showPublishers();
  }
   //get by id
     @GetMapping("/publisher/{id}")
        public Publisher showPublisher(@PathVariable int id){
            return pub_service.getPublisher(id);
    }

    //update
      @PutMapping("/publisher")
        public Publisher updatePublisher(@RequestBody Publisher pubObj){
            return pub_service.updatePublisher(pubObj);
    }
    //delete
    @DeleteMapping("publisher/{id}")
    public String deletePublisher(@PathVariable int id){
       pub_service.deletePublisher(id);
       return "Deleted Sucessfully";
}
}
