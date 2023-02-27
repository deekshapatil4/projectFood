package com.example.service;

import java.util.List;

import com.example.entity.Food;

public interface FoodService {
 
	//get all food
	public List<Food> getAllFoods();
	//get food by id
	public Food getFoodById( int id);
	//create new food
	public Food addFood(Food f);
	//update Food
	public Food updateFood(Food f);
	//delete food
	public void deleteFood(int id);
	
}
