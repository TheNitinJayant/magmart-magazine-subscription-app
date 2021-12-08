package com.capstone.magzineSub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int cart_id;
    int user_id;
    int sub_id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("cart")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="sub_id", referencedColumnName = "sub_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("cart")
    private Subscription subscription;
}