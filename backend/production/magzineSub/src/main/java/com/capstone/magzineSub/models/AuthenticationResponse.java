package com.capstone.magzineSub.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {

    private String jwt;
    private User user;
    private String message;
//    private Cart cart;

}

