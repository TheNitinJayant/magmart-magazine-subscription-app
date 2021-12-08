package com.capstone.magzineSub.controllers;


import com.capstone.magzineSub.dto.SubscribedResponse;
import com.capstone.magzineSub.jpa.CartResponseRepository;
import com.capstone.magzineSub.models.Cart;
import com.capstone.magzineSub.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class CartController
{

    @Autowired
    private CartService service;
    @Autowired
    private CartResponseRepository cartResponseRepository;

    @PostMapping("/cart")
    public Cart addtoCart(@RequestBody Cart cartObj) {
        return service.addtoCart(cartObj);
    }


    @DeleteMapping("/cart/{cart_id}")
    public String deleteFromCart(@PathVariable int cart_id){
        service.deleteFromCart(cart_id);
        return "deleted sucessfully";
    }

    @GetMapping("/cart/{user_id}")
    public List<Cart> showCart(@PathVariable int user_id){
        return service.showCart(user_id);
    }



    @GetMapping("/showcart/{id}")
    public List<Cart> showcart(@PathVariable int id){
        return cartResponseRepository.showcart(id);
    }
}