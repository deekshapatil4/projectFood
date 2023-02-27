package com.example.service;

import com.example.entity.User;

public interface UserSerivce {
 public User saveUser(User user);
 public User fetchUserByemail(String email);
 public User fetchUserByemailAndpassword(String email,String password);
}
