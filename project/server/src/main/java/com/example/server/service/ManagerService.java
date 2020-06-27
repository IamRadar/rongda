package com.example.server.service;

import com.example.server.dao.ManagerRepository;
import com.example.server.entity.Manager;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("managerService")
public class ManagerService {

    @Resource
    private ManagerRepository managerRepository;

    public void insert(Manager manager) {
        managerRepository.save(manager);
    }

    public void update(Manager manager) {
        managerRepository.save(manager);
    }

    public void delete(String id) {
        Manager manager=managerRepository.findById(id).get();
        if(manager!=null){
            managerRepository.delete(manager);
        }
    }

    public Optional<Manager> findById(String id) {
        return  managerRepository.findById(id);
    }


    public List<Manager> findAll() {
        return  managerRepository.findAll();
    }
}
