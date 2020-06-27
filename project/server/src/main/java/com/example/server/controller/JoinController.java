package com.example.server.controller;

import com.example.server.entity.Activity;
import com.example.server.entity.Join;
import com.example.server.entity.User;
import com.example.server.service.ActivityService;
import com.example.server.service.JoinService;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class JoinController {
    @Autowired
    private ActivityService activityService;
    @Autowired
    private UserService userService;
    @Autowired
    private JoinService joinService;

    @CrossOrigin
    @RequestMapping(value="/join/add",method = RequestMethod.POST)
    public boolean add(@RequestBody Join join){
        List<Join> all=joinService.findAll();
        Activity thisact=activityService.findById(join.getAid()).get();
        System.out.println("join uid is "+join.getUid());
        User user=userService.findById(join.getUid()).get();
        System.out.println("user is "+user.getName());
        if(thisact.getNumofp()+1>thisact.getNeedp()){
            return false;
        }
        else{
            joinService.insert(join);
            thisact.setNumofp(thisact.getNumofp()+1);
            activityService.update(thisact);
            user.setApplynum(user.getApplynum()+1);
            userService.update(user);
            return true;
        }
    }

    @CrossOrigin
    @RequestMapping(value="/join/delete",method = RequestMethod.DELETE)
    public boolean delete(HttpServletRequest request,@RequestParam("aid") String aid){
        String uid=request.getSession().getAttribute("uid").toString();
        List<Join> all=joinService.findAll();
        Join myjoin=new Join();
        for(Join join:all){
            if(join.getUid().equals(uid)&&join.getAid().equals(aid)){
                myjoin=join;
            }
        }
        joinService.delete(myjoin.getJid());
        Activity thisact=activityService.findById(aid).get();
        thisact.setNumofp(thisact.getNumofp()-1);
        activityService.update(thisact);
        User user=userService.findById(uid).get();
        user.setApplynum(user.getApplynum()-1);
        userService.update(user);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/join/all",method = RequestMethod.GET)
    public List<Join> selectall(){
        return joinService.findAll();
    }

    @CrossOrigin
    @RequestMapping(value="/join/byuid",method = RequestMethod.GET)
    public List<Activity> byuid(HttpServletRequest request){
        String uid= (String) request.getSession().getAttribute("uid");
        List<Join> all=joinService.findAll();
        List<Activity> select=new ArrayList<>();
        for(Join join:all){
            if(join.getUid().equals(uid)){
                select.add(activityService.findById(join.getAid()).get());
            }
        }
        return select;
    }

    @CrossOrigin
    @RequestMapping(value="/join/quanbyuid",method = RequestMethod.GET)
    public int quanbyuid(HttpServletRequest request){
        String uid= (String) request.getSession().getAttribute("uid");
        List<Join> all=joinService.findAll();
        int num=0;
        for(Join join:all){
            if(join.getUid().equals(uid)){
                num++;
            }
        }
        return num;
    }

    @CrossOrigin
    @RequestMapping(value="/join/useuid",method = RequestMethod.GET)
    public List<Activity> useuid(@RequestParam("uid") String uid){
        List<Join> all=joinService.findAll();
        List<Activity> select=new ArrayList<>();
        for(Join join:all){
            if(join.getUid().equals(uid)){
                select.add(activityService.findById(join.getAid()).get());
            }
        }
        return select;
    }

    @CrossOrigin
    @RequestMapping(value="/join/quanuseuid",method = RequestMethod.GET)
    public int quanuseuid(@RequestParam("uid") String uid){
        List<Join> all=joinService.findAll();
        int num=0;
        for(Join join:all){
            if(join.getUid().equals(uid)){
                num++;
            }
        }
        return num;
    }

    @CrossOrigin
    @RequestMapping(value="/join/byaid",method = RequestMethod.GET)
    public List<User> byaid(@RequestParam("aid") String aid){
        List<Join> all=joinService.findAll();
        List<User> select=new ArrayList<>();
        for(Join join:all){
            if(join.getAid().equals(aid)){
                select.add(userService.findById(join.getUid()).get());
            }
        }
        return select;
    }

    @CrossOrigin
    @RequestMapping(value="/join/quanbyaid",method = RequestMethod.GET)
    public int quanbyaid(@RequestParam("aid") String aid){
        List<Join> all=joinService.findAll();
        int num=0;
        for(Join join:all){
            if(join.getAid().equals(aid)){
                num++;
            }
        }
        return num;
    }

    @CrossOrigin
    @RequestMapping(value="/join/maxint",method = RequestMethod.GET)
    public int maxint(){
        List<Join> all=joinService.findAll();
        int maxint=0;
        for(Join join:all){
            if(Integer.parseInt(join.getJid())>maxint){
                maxint=Integer.parseInt(join.getJid());
            }
        }
        return maxint+1;
    }

    @CrossOrigin
    @RequestMapping(value="/join/getalready",method = RequestMethod.GET)
    public boolean getalready(@RequestParam("uid") String uid,@RequestParam("aid") String aid){
        boolean exist=false;
        for(Join join:joinService.findAll()){
            if(join.getUid().equals(uid)&&join.getAid().equals(aid)){
                exist=true;
                break;
            }
        }
        return exist;
    }

}
