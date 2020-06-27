package com.example.server.controller;

import com.example.server.entity.Teacher;
import com.example.server.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @CrossOrigin
    @RequestMapping(value="/teacher/all" ,method = RequestMethod.GET)
    public List<Teacher> selectall(){
        System.out.println("teacherallallall");
        List<Teacher> teachers=teacherService.findAll();
        return teachers;
    }

    @CrossOrigin
    @RequestMapping(value = "/teacher/delete",method = RequestMethod.DELETE)
    public boolean delete(@RequestParam("tid") String tid) {
        try{
            teacherService.delete(tid);
            return true;
        } catch(Exception e){
            return false;
        }
    }

    @CrossOrigin
    @RequestMapping(value ="/teacher/add",method = RequestMethod.POST, consumes = "application/json")
    public void insert(@RequestBody Teacher teacher){
        teacherService.insert(teacher);
    }

    @CrossOrigin
    @RequestMapping(value="/teacher/quantity",method = RequestMethod.GET)
    public int quantity(){
        return this.teacherService.findAll().size();
    }
}
