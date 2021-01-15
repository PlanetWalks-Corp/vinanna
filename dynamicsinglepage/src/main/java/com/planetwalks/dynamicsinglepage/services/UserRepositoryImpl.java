package com.planetwalks.dynamicsinglepage.services;

import com.planetwalks.dynamicsinglepage.models.User;
import com.planetwalks.dynamicsinglepage.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserRepositoryImpl {

	@Autowired
	private UserRepository userRepository;


	public User create(User user) {
		return userRepository.save(user);
	}

	public List<User> getAllUsers() {
		return (List<User>) userRepository.findAll();
	}

	public Optional<User> findById(Long userId) {
		return userRepository.findById(userId);
	}
}