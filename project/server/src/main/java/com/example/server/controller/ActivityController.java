package com.example.server.controller;


import com.example.server.entity.*;
import com.example.server.service.ActivityService;
import com.example.server.service.JoinService;
import com.example.server.service.SiteService;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class ActivityController {

    @Autowired
    private ActivityService activityService;
    @Autowired
    private JoinService joinService;
    @Autowired
    private SiteService siteService;
    @Autowired
    private UserService userService;

    @CrossOrigin
    @RequestMapping(value="/activity/all",method = RequestMethod.GET)
    public List<Activity> selectall(){
        List<Activity> activities=activityService.findAll();
        List<Activity> res=new ArrayList<>();
        for(Activity act:activities){
            if(act.getState()==1||act.getState()==0){
                res.add(act);
            }
        }
        return res;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/one",method = RequestMethod.GET)
    public Activity selectone(@RequestParam("aid") String aid){
        return activityService.findById(aid).get();
    }

    @CrossOrigin
    @RequestMapping(value="/activity/after",method = RequestMethod.GET)
    public List<Activity> allafter(){
        List<Activity> activities=activityService.findAll();
        List<Activity> after=new ArrayList();
        for(Activity act:activities){
            if(act.getState()==1){
                after.add(act);
            }
        }
        return after;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/before",method = RequestMethod.GET)
    public List<Activity> allbefore(){
        List<Activity> activities=activityService.findAll();
        List<Activity> before=new ArrayList();
        for(Activity act:activities){
            if(act.getState()==0){
                before.add(act);
            }
        }
        return before;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/actofp")
    public List<Activity> actofp(HttpServletRequest request){
        List<Activity> activities=activityService.findAll();
        List<Activity> mine=new ArrayList();
        for(Activity act: activities){
            if(act.getHostid().equals(request.getSession().getAttribute("uid"))){
                mine.add(act);
            }
        }
        return mine;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/quantity",method = RequestMethod.GET)
    public int quantity(){
        return activityService.findAll().size();
    }

    @CrossOrigin
    @RequestMapping(value="/activity/quanafter",method = RequestMethod.GET)
    public int quanafter(){
        List<Activity> activities=activityService.findAll();
        List<Activity> after=new ArrayList();
        for(Activity act:activities){
            if(act.getState()==1){
                after.add(act);
            }
        }
        return after.size();
    }

    @CrossOrigin
    @RequestMapping(value="/activity/quanbefore",method = RequestMethod.GET)
    public int quanbefore(){
        List<Activity> activities=activityService.findAll();
        List<Activity> before=new ArrayList();
        for(Activity act:activities){
            if(act.getState()==0){
                before.add(act);
            }
        }
        return before.size();
    }

    @CrossOrigin
    @RequestMapping(value="/activity/add",method = RequestMethod.POST)
    public boolean create(HttpServletRequest request,@RequestBody Activity activity){
        String id= (String) request.getSession().getAttribute("uid");
        //System.out.println("spring boot begintime is "+activity.getBegintime());
        activity.setHostid(id);
        User user=userService.findById(id).get();
        user.setHostnum(user.getHostnum()+1);
        userService.update(user);
        activityService.insert(activity);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/delete/{aid}",method = RequestMethod.DELETE)
    public boolean delete(@PathVariable("aid") String aid){
        List<Join> all=joinService.findAll();
        for(Join join:all){
            if(join.getAid().equals(aid)){
                joinService.delete(join.getJid());
                User user=userService.findById(join.getUid()).get();
                user.setApplynum(user.getApplynum()-1);
                userService.update(user);
            }
        }
        User user=userService.findById(activityService.findById(aid).get().getHostid()).get();
        user.setHostnum(user.getHostnum()-1);
        userService.update(user);
        activityService.delete(aid);
        Site site=siteService.findById(activityService.findById(aid).get().getSiteid()).get();
        site.setUsed(false);
        siteService.update(site);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/maxint",method = RequestMethod.GET)
    public int maxint(){
        List<Activity> activities=activityService.findAll();
        int maxint=0;
        for(Activity act:activities){
            if(Integer.parseInt(act.getAid())>maxint){
                maxint=Integer.parseInt(act.getAid());
            }
        }
        return maxint;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/agree",method = RequestMethod.POST)
    public boolean agree(@RequestBody Agree agree){
        //System.out.println("spring boot agree begin time is "+activityService.findById(agree.getAid()).get().getBegintime());
        Activity activity=activityService.findById(agree.getAid()).get();
        activity.setSiteid(agree.getSid());
        activity.setSitename(siteService.findById(agree.getSid()).get().getName());
        activity.setState(1);
        activityService.update(activity);
        Site site=siteService.findById(agree.getSid()).get();
        site.setUsed(true);
        siteService.update(site);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/disagree",method = RequestMethod.POST)
    public boolean disagree(@RequestBody String aid){
        Activity activity=activityService.findById(aid).get();
        activity.setState(2);
        activityService.update(activity);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/byuid", method = RequestMethod.GET)
    public List<Activity> byuid(@RequestParam("uid") String uid){
        List<Activity> activities=activityService.findAll();
        List<Activity> res=new ArrayList<>();
        for(Activity activity:activities){
            if(activity.getHostid().equals(uid)){
                res.add(activity);
            }
        }
        return res;
    }

    @CrossOrigin
    @RequestMapping(value="/activity/quanbyuid",method = RequestMethod.GET)
    public int quanbyuid(@RequestParam("uid") String uid){
        List<Activity> activities=activityService.findAll();
        int num=0;
        for(Activity activity:activities){
            if(activity.getHostid().equals(uid)){
                num++;
            }
        }
        return num;
    }
}
