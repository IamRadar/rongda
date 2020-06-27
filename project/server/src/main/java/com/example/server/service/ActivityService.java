package com.example.server.service;

import com.example.server.dao.ActivityRepository;
import com.example.server.entity.Activity;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("activityService")
public class ActivityService {
    @Resource
    private ActivityRepository activityRepository;

    public void insert(Activity activity){
        activityRepository.save(activity);
    }

    public void delete(String id){
        Activity activity=activityRepository.findById(id).get();
        if(activity!=null){
            activityRepository.delete(activity);
        }
    }

    public void update(Activity activity){
        activityRepository.save(activity);
    }

    public Optional<Activity> findById(String id){
        return activityRepository.findById(id);
    }

    public List<Activity> findAll(){
        return activityRepository.findAll();
    }

}
