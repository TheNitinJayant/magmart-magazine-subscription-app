package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart,Integer> {

    @Transactional
    @Modifying
    @Query("from Cart c where c.user_id=:user_id")
    List<Cart> findByUser_id(@Param("user_id")int  user_id);


}