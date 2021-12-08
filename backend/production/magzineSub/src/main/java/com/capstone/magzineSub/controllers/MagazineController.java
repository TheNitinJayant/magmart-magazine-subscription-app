package com.capstone.magzineSub.controllers;


import com.capstone.magzineSub.models.Magazine;
import com.capstone.magzineSub.service.MagazineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class MagazineController {

    @Autowired
    private MagazineService service;

    //post methods
    @PostMapping("/magazines")
    public Magazine addMagazine(@RequestBody Magazine magObj){
        return service.saveMagazine(magObj);
    }


//    @PostMapping("/magazines")
//    public List<Magazine> addMagazines(@RequestBody List<Magazine> magObjs){
//        return service.saveMagazines(magObjs);
//    }

    //get
    @GetMapping("/magazines")
    public List<Magazine> findMagazines(){
        return service.getMagazines();
    }

//    @GetMapping("/magByName/{name}")
//    public Magazine getMagazineByname(@PathVariable String name){
//        return service.getMagazineByname(name);
//    }

    @GetMapping("/magazines/{id}")
    public Magazine getMagazineById(@PathVariable int id){
        return service.getMagazine(id);
    }

    //put
    @PutMapping ("/magazines")
    public Magazine updateMagazine(@RequestBody Magazine magObj){
        return service.updateMagazine(magObj);
    }

    //delete
    @DeleteMapping("/magazines/{id}")
    public String deleteMagazine(@PathVariable int id){
        return service.deleteMagazine(id);
    }

}
