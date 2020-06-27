package com.example.server.service;

import com.example.server.dao.TeacherRepository;
import com.example.server.entity.Teacher;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("teacherService")
public class TeacherService {

    @Resource
    private TeacherRepository teacherRepository;

    public void insert(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    public void update(Teacher teacher) {
        teacherRepository.save(teacher);
    }

    public void delete(String id) {
        Teacher teacher=teacherRepository.findById(id).get();
        if(teacher!=null){
            teacherRepository.delete(teacher);
        }
    }

    public Optional<Teacher> findById(String id) {
        return teacherRepository.findById(id);
    }


    public List<Teacher> findAll() {
        return  teacherRepository.findAll();
    }

}
