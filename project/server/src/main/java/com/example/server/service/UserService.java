package com.example.server.service;

import com.example.server.dao.UserRepository;
import com.example.server.entity.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserService {

    @Resource
    private UserRepository userRepository;

    public void insert(User user) {
        userRepository.save(user);
    }

    public void update(User user) {
        userRepository.save(user);
    }

    public void delete(String id) {
        User user=userRepository.findById(id).get();
        if(user!=null){
            userRepository.delete(user);
        }
    }

    public Optional<User> findById(String id) {
            return  userRepository.findById(id);
    }


    public List<User> findAll() {
        return  userRepository.findAll();
    }
}
