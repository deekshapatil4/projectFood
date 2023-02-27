package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.Food;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {
  
	//search 
	public List<Food> findByfnameContaining(String fname);
}
