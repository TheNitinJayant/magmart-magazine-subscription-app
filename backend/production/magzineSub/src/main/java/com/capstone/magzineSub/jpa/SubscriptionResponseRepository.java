package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface SubscriptionResponseRepository extends JpaRepository<Subscription,Integer> {
    @Transactional
    @Modifying
    @Query("From Subscription")
    List<Subscription> showsubscription();
}
