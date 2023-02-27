package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Food;
import com.example.repository.FoodRepository;
import com.example.serviceImp.FoodServiceImp;

@RestController
@RequestMapping("/food")
@CrossOrigin("*")
public class FoodController {
 @Autowired
FoodServiceImp foodservice;
 @Autowired
 FoodRepository frepo;
 //get all foods
   @GetMapping("/all")
   public List<Food> getAllFoods() {
   return this.foodservice.getAllFoods();
   }

   //get food by id
   @GetMapping("/{id}")
   public ResponseEntity<Food> getMovieById(@PathVariable int id) {
	   return ResponseEntity.ok(this.foodservice.getFoodById(id));
   }
   //get food by search
   @GetMapping("/search/{query}")
   public ResponseEntity<?>search(@PathVariable("query") String query){
	 List<Food> foods=this.frepo.findByfnameContaining(query);
	 return ResponseEntity.ok(foods);
   }
   @PostMapping("/")
   public ResponseEntity<Food> addFoods(@RequestBody Food f) {
	   return ResponseEntity.ok(this.foodservice.addFood(f));
   }
   @PutMapping("/{id}")
   public ResponseEntity<Food> updateFoodById(@PathVariable int id,@RequestBody Food f) {
	   f.setId(id);
	   return ResponseEntity.ok(this.foodservice.updateFood(f));
   }
   @DeleteMapping("/{id}")
   public void deleteFoodById(@PathVariable int id) {
	  this.foodservice.deleteFood(id);
   }
   
   }
