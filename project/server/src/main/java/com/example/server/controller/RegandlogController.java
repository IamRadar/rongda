package com.example.server.controller;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.server.entity.*;
import com.example.server.service.ManagerService;
import com.example.server.service.TeacherService;
import com.example.server.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class RegandlogController {

    @Autowired
    private TeacherService teacherService;
    @Autowired
    private UserService userService;
    @Autowired
    private ManagerService managerService;

    @CrossOrigin
    @RequestMapping(value="/reg",method = RequestMethod.POST,consumes = "application/json")
    public int register(@RequestBody Reg reg, HttpServletRequest request, HttpServletResponse response){
        if(!teacherService.findById(reg.getUid()).isPresent()){
            return 0;
        }
        else if(!teacherService.findById(reg.getUid()).get().getCard().equals(reg.getCard())){
            return 1;
        }
        else if(userService.findById(reg.getUid()).isPresent()){
            return 2;
        }
        else{
            User user=new User();
            user.setUid(reg.getUid());
            user.setCard(reg.getCard());
            user.setPwd(reg.getPwd());
            userService.insert(user);
            Teacher ateacher=teacherService.findById(reg.getUid()).get();
            ateacher.setIsreg(true);
            teacherService.update(ateacher);
            return 3;
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/login",method = RequestMethod.POST, consumes = "application/json")
    public Token login(@RequestBody Login login,HttpServletRequest request) throws ServletException{
        HttpSession session=request.getSession();
        Token token=new Token();
        if(login.isIsteacher()){
            boolean exist=false;
            for(User user:userService.findAll()){
                if(user.getUid().equals(login.getUid())){
                    exist=true;
                    break;
                }
            }
            if(!exist){
                token.setContent("0");
                token.setLength(1);
            }
            else if(exist&&!userService.findById(login.getUid()).get().getPwd().equals(login.getPwd())){
                token.setContent("1");
                token.setLength(1);
            }
            else{
                session.setAttribute("uid",login.getUid());
                session.setAttribute("isteacher",login.isIsteacher());
                String atoken= Jwts.builder().setSubject(login.getUid()).claim("roles", "user").setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24)).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
                token.setContent(atoken);
                token.setLength(atoken.length());
            }
        }
        else{
            boolean exist=false;
            for(Manager manager:managerService.findAll()){
                if(manager.getManagerid().equals(login.getUid())){
                    exist=true;
                    break;
                }
            }
            if(!exist){
                token.setContent("0");
                token.setLength(1);
            }
            else if(exist&&!managerService.findById(login.getUid()).get().getManagerpwd().equals(login.getPwd())){
                token.setContent("1");
                token.setLength(1);
            }
            else{
                session.setAttribute("uid",login.getUid());
                session.setAttribute("isteacher",login.isIsteacher());
                String atoken= Jwts.builder().setSubject(login.getUid()).claim("roles", "user").setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 121)).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
                token.setContent(atoken);
                token.setLength(atoken.length());
            }
        }
        return token;
    }

    @CrossOrigin
    @RequestMapping(value="/logout",method = RequestMethod.POST,consumes = "application/json")
    public boolean logout(HttpServletRequest request){
        HttpSession session=request.getSession();
        session.removeAttribute("uid");
        session.removeAttribute("isteacher");
        return true;
    }

}
