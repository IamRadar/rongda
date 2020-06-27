package com.example.server.controller;

import com.example.server.entity.Activity;
import com.example.server.entity.Join;
import com.example.server.entity.Site;
import com.example.server.entity.User;
import com.example.server.service.ActivityService;
import com.example.server.service.JoinService;
import com.example.server.service.SiteService;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.html.HTMLDocument;
import java.io.Console;
import java.util.Iterator;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private ActivityService activityService;
    @Autowired
    private JoinService joinService;
    @Autowired
    private SiteService siteService;

    @CrossOrigin
    @RequestMapping(value="/user/all" ,method = RequestMethod.GET)
    public List<User> selectall(){
        System.out.println("userallallall");
        List<User> users=userService.findAll();
        return users;
    }

    @CrossOrigin
    @RequestMapping(value="/user/one",method = RequestMethod.GET)
    public User selectone(@RequestParam("uid") String uid){
        return userService.findById(uid).get();
    }

    @CrossOrigin
    @RequestMapping(value ="/user/delete/{id}" ,method = RequestMethod.DELETE, produces = "application/json;charset=UTF-8")
    public boolean delete(@PathVariable("id") String id){
        System.out.println("delete is "+id);
            List<Join> joins=joinService.findAll();
            for(Join join:joins){
                if(join.getUid().equals(id)){
                    Activity activity=activityService.findById(join.getAid()).get();
                    activity.setNumofp(activity.getNumofp()-1);
                    activityService.update(activity);
                    joinService.delete(join.getJid());
                }
            }
            List<Activity> activities=activityService.findAll();
            for(Activity activity:activities){
                if(activity.getHostid().equals(id)){
                    List<Join> joins2=joinService.findAll();
                    for(Join join:joins2){
                        if(join.getAid().equals(activity.getAid())){
                            User user=userService.findById(join.getUid()).get();
                            user.setApplynum(user.getApplynum()-1);
                            userService.update(user);
                            joinService.delete(join.getJid());
                        }
                    }
                    activityService.delete(activity.getAid());
                }
            }
            userService.delete(id);
            return true;
    }

    @CrossOrigin
    @RequestMapping(value="/user/update",method=RequestMethod.GET)
    public boolean update(HttpServletRequest request, @RequestParam("name") String name,@RequestParam("phone") String phone,@RequestParam("gender") boolean gender){
        User user=userService.findById((String) request.getSession().getAttribute("uid")).get();
        user.setName(name);
        user.setPhone(phone);
        user.setGender(gender);
        userService.update(user);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/user/quantity",method = RequestMethod.GET)
    public int quantity(){
        return this.userService.findAll().size();
    }

    @CrossOrigin
    @RequestMapping(value="/user/modify",method = RequestMethod.GET)
    public int modify(HttpServletRequest request,@RequestParam("old") String old, @RequestParam("new1") String new1, @RequestParam("new2") String new2){
        String uid=request.getSession().getAttribute("uid").toString();
        if(!userService.findById(uid).get().getPwd().equals(old)){
            return 1;
        }
        else if(!new1.equals(new2)){
            return 2;
        }
        else{
            User user=userService.findById(uid).get();
            user.setPwd(new1);
            userService.update(user);
            return 0;
        }
    }

}
