package com.capstone.magzineSub.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer sub_id;
    Integer mag_id;
    String sub_time;
    Integer price;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="mag_id", referencedColumnName = "mag_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("subscription")
    private Magazine magazine;

//    @OneToMany(targetEntity = Subscribed.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="sub_id",referencedColumnName = "sub_id")
//    @JsonIgnoreProperties("subscription")
//    private List<Subscribed> subscribed = new ArrayList<>();
//
//
//    @OneToMany(targetEntity = Cart.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="sub_id",referencedColumnName = "sub_id")
//    @JsonIgnoreProperties("subscription")
//    private List<Cart> carts = new ArrayList<>();
}
