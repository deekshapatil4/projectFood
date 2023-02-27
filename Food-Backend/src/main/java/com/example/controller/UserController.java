package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.serviceImp.UserServiceImp;

@RestController
@CrossOrigin("*")
public class UserController {
  
	@Autowired
	UserServiceImp uservice;
	
	@PostMapping("/registeruser")
	public User registerUser(@RequestBody User user)throws Exception {
		String tempemail  = user. getEmail();
		if(tempemail!=null&&!"".equals(tempemail)) {
		User userobj =	uservice.fetchUserByemail(tempemail);
		if(userobj!=null) {
			throw new Exception("user with "+tempemail+"is already exits");
		}
		}
		User userobj=null;
		userobj=uservice.saveUser(user);
		return userobj;
	}
	@PostMapping("/login")
	public User loginUser(@RequestBody User user) throws Exception {
	String tempemail=user.getEmail();
	String tempPass=user.getPassword();	
	User userobj=null;
	if(tempemail!=null&&tempPass!=null) {
	userobj=uservice.fetchUserByemailAndpassword(tempemail, tempPass);
	}
	if(userobj==null) {
		throw new Exception("Bad credentials");
	}
	return userobj;
	}
}
