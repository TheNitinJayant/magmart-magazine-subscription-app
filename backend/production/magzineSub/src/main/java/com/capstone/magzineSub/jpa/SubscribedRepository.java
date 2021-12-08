package com.capstone.magzineSub.jpa;

import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.models.Subscribed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface SubscribedRepository extends JpaRepository<Subscribed,Integer> {

//    @Transactional
//    @Modifying
//    @Query("SELECT image,mag_name,pub_name,genre from Subscribed s JOIN Subscription s2 on s.sub_id = s2.sub_id JOIN Magazine m on m.mag_id = s2.mag_id JOIN Publisher p on p.pub_id = m.pub_id where user_id = :id")
//    List<Subscribed> showsubscribed(int id);

//    @Transactional
//    @Modifying
//    @Query("From Subscribed where user.user_id =:id")
//    List<SubscribedResponse> showsubscribed(int id);
}
