package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
public User findByemail(String email);

public User findByemailAndPassword(String email,String password);
}
