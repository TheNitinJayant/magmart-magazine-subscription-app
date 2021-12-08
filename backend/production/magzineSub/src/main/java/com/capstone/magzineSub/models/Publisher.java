package com.capstone.magzineSub.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Publisher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer pub_id;
    String pub_name;

//    @OneToMany(targetEntity = Magazine.class,cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//    @JoinColumn(name="pub_id",referencedColumnName = "pub_id")
//    @JsonIgnoreProperties("publisher")
//    private List<Magazine> magazines = new ArrayList<>();
}
