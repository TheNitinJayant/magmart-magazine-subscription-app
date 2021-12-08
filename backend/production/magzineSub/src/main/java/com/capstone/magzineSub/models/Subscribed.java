package com.capstone.magzineSub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.*;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Subscribed {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer subed_id;
    Integer sub_id;
    Integer user_id;
    Date start_date;
    Date end_date;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("subscribed")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="sub_id", referencedColumnName = "sub_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("subscribed")
    private Subscription subscription;
}
