package com.capstone.magzineSub.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SubscriptionResponse {
   int sub_id, mag_id,price;
String name,image,genre,pub_name;

}
