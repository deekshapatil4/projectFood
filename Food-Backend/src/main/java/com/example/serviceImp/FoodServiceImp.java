package com.example.serviceImp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Food;

import com.example.repository.FoodRepository;
import com.example.service.FoodService;

@Service
public class FoodServiceImp implements FoodService {
 @Autowired
 FoodRepository frepo;
	@Override
	public List<Food> getAllFoods() {
		return  this.frepo.findAll();
	}

	@Override
	public Food getFoodById(int id) {
		 Optional<Food>f=frepo.findById(id);
			if(f.isPresent()) {
				return f.get();
			}
			throw new RuntimeException("food not found");
	}
	

	@Override
	public Food addFood(Food f) {
		return this.frepo.save(f);
		
	}

	@Override
	public Food updateFood(Food f) {
		return this.frepo.save(f);
	}

	@Override
	public void deleteFood(int id) {
		  this.frepo.deleteById(id);
		
	}

	

}
