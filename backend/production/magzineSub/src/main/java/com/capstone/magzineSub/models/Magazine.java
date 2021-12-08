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
public class Magazine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int mag_id;
    String mag_name;
    int pub_id;
    String genre;
    String image;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="pub_id", referencedColumnName = "pub_id", insertable = false, updatable = false)
    @JsonIgnoreProperties("magazine")
    private Publisher publisher;

//    @OneToMany(targetEntity = Subscription.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="mag_id",referencedColumnName = "mag_id")
//    @JsonIgnoreProperties("magazine")
//    private List<Subscription> subscriptions = new ArrayList<>();

}
