package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.models.Cart;
import com.capstone.magzineSub.models.Subscribed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface CartResponseRepository extends JpaRepository<Cart,Integer> {
    @Transactional
    @Modifying
    @Query("From Cart where user.user_id =:id")
    List<Cart> showcart(int id);
}
