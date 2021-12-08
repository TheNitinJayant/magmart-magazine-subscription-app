package com.capstone.magzineSub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CartResponse {
    String image;
    String mag_name;
    String pub_name;
    String genre;
}
