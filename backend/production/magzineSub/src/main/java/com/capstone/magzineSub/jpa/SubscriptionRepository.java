package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.models.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription,Integer> {
}
