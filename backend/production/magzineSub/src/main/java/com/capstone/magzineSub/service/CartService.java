package com.capstone.magzineSub.service;


import com.capstone.magzineSub.jpa.CartRepository;
import com.capstone.magzineSub.models.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cart_repository;

    //post data to cart

    public Cart addtoCart(Cart cartObj) {
        return cart_repository.save(cartObj);
    }

    public  String deleteFromCart(int cart_id){

        cart_repository.deleteById(cart_id);
        return "Deleted one item from the cart";

    }

    public List<Cart>  showCart(int user_id){
        List<Cart> user_cart;
        user_cart = cart_repository.findByUser_id(user_id);
        return user_cart;
    }
}