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
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer user_id;
    @Column(columnDefinition = "integer default '0'")
    Integer user_role=0;
    String fullname, email, password;

//    @OneToMany(targetEntity = Subscribed.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="user_id",referencedColumnName = "user_id")
//    @JsonIgnoreProperties("user")
//    private List<Subscribed> subscribed = new ArrayList<>();
//
//    @OneToMany(targetEntity = Cart.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="user_id",referencedColumnName = "user_id")
//    @JsonIgnoreProperties("user")
//    private List<Cart> carts = new ArrayList<>();
}
