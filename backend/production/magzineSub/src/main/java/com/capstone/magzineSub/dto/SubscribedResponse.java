package com.capstone.magzineSub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Value;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SubscribedResponse {
    String image;
    String mag_name;
    String pub_name;
    String genre;

}
