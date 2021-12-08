package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.models.Subscribed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface SubscribedResponseRepository extends JpaRepository<Subscribed,Integer> {
    @Transactional
    @Modifying
    @Query("From Subscribed where user.user_id =:id")
    List<Subscribed> showsubscribed(int id);


}
