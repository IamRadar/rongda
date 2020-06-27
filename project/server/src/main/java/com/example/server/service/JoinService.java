package com.example.server.service;

import com.example.server.dao.JoinRepository;
import com.example.server.entity.Join;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("joinService")
public class JoinService {

    @Resource
    private JoinRepository joinRepository;

    public void insert(Join join){
        joinRepository.save(join);
    }

    public void delete(String id){
        Join join=joinRepository.findById(id).get();
        if(join!=null){
            joinRepository.delete(join);
        }
    }

    public Optional<Join> findById(String id){
        return joinRepository.findById(id);
    }

    public List<Join> findAll(){
        return joinRepository.findAll();
    }
}
