package com.example.serviceImp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.User;
import com.example.repository.UserRepository;
import com.example.service.UserSerivce;

@Service
public class UserServiceImp implements UserSerivce {
 @Autowired
 UserRepository urepo;
	@Override
	public User saveUser(User user) {
	   return urepo.save(user);	
		
	}
	@Override
	public User fetchUserByemail(String email) {
	
		return urepo.findByemail(email);
	}
	@Override
	public User fetchUserByemailAndpassword(String email, String password) {
		
		return urepo.findByemailAndPassword(email,password);
	}

}
