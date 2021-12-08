package com.capstone.magzineSub.service;

import com.capstone.magzineSub.jpa.PublisherRepository;

import com.capstone.magzineSub.models.Publisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PublisherService {
    @Autowired
    private PublisherRepository pub_repository;

    //post
    public Publisher savePublisher(Publisher pubObj){
        return pub_repository.save(pubObj);
    }

    public List<Publisher> savePublishers(List<Publisher> publishers){
        return pub_repository.saveAll(publishers);
    }


    //fetch data from db
    public List<Publisher> showPublishers(){
        return  pub_repository.findAll();
    }
    public Publisher getPublisher(int id){
        return pub_repository.findById(id).orElse(null);
    }


    //delete
    public String deletePublisher(int id){
       pub_repository.deleteById(id);
       return "Publisher Deleted" + id;
    }

    //update
    public Publisher updatePublisher(Publisher pubObj){
        Publisher existingPublisher = pub_repository.findById(pubObj.getPub_id()).orElse(null);

        existingPublisher.setPub_name(pubObj.getPub_name());


        return pub_repository.save(existingPublisher);

    }


}
