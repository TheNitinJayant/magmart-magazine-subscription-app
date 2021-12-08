package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.Magazine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MagazineRepository extends JpaRepository<Magazine,Integer> {

//    Magazine findByMag_name(String name);
}

