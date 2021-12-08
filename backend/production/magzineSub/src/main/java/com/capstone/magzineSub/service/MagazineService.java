package com.capstone.magzineSub.service;

import com.capstone.magzineSub.jpa.MagazineRepository;
import com.capstone.magzineSub.models.Magazine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MagazineService {
    @Autowired
    private MagazineRepository repository;

    //post
    public Magazine saveMagazine(Magazine magObj){
        return repository.save(magObj);
    }
    public List<Magazine> saveMagazines(List<Magazine> magObjs){
        return repository.saveAll(magObjs);
    }

    //get fetch data from DB
    public List<Magazine> getMagazines(){
        return repository.findAll();
    }
    //get
    public Magazine getMagazine(int id){
        return repository.findById(id).orElse(null);
    }
    //get method made by us and defined in Repository interface


//    public Magazine getMagazineByname(String name){
//        return repository.findByMag_name(name);
//    }

    //delete
    public String deleteMagazine(int id){
        repository.deleteById(id);
        return "Magazine deleted " + id;
    }

    //update
    public Magazine updateMagazine(Magazine magObj){
        Magazine existingMagazine = repository.findById(magObj.getMag_id()).orElse(null);

        existingMagazine.setMag_name(magObj.getMag_name());
        existingMagazine.setPub_id(magObj.getPub_id());
        existingMagazine.setGenre(magObj.getGenre());
        existingMagazine.setImage(magObj.getImage());

        return repository.save(existingMagazine);

    }





}
