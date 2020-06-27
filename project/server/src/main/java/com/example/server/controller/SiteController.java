package com.example.server.controller;

import com.example.server.entity.Activity;
import com.example.server.entity.Site;
import com.example.server.service.ActivityService;
import com.example.server.service.SiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class SiteController {
    @Autowired
    private SiteService siteService;
    @Autowired
    private ActivityService activityService;

    @CrossOrigin
    @RequestMapping(value="/site/all",method = RequestMethod.GET)
    public List<Site> selectall(){
        return siteService.findAll();
    }

    @CrossOrigin
    @RequestMapping(value="/site/canuse",method = RequestMethod.GET)
    public List<Site> canuse(@RequestParam("aid") String aid, @RequestParam("date") String date){
        List<Site> sites=siteService.findAll();
        List<Activity> activities=activityService.findAll();
        List<Site> canuse=new ArrayList();
        for(Site site:sites){
            boolean can=true;
            if(site.getContent()>=activityService.findById(aid).get().getNeedp()){
                for(Activity act: activities){
                    String a=act.getBegintime().toString().substring(0,act.getBegintime().toString().indexOf('T'));
                    String b=date.substring(0,date.indexOf('T'));
                    //System.out.println("a is " +a+" b is "+b);
                    if((act.getSiteid()!=null&&act.getSiteid().equals(site.getSid()))&&a.equals(b)){
                        can=false;
                    }
                }
            }
            else can=false;
            if(can){
                canuse.add(site);
            }
        }
        return canuse;
    }

    @CrossOrigin
    @RequestMapping(value="/site/add",method = RequestMethod.POST,consumes = "application/json")
    public boolean insert(@RequestBody Site site){
        siteService.insert(site);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/site/delete/{id}",method = RequestMethod.DELETE)
    public boolean delete(@PathVariable("id") String id){
        siteService.delete(id);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/site/quantity",method = RequestMethod.GET)
    public int quantity(){
        return siteService.findAll().size();
    }

    @CrossOrigin
    @RequestMapping(value="/site/maxint",method = RequestMethod.GET)
    public int maxint(){
        List<Site> sites=siteService.findAll();
        int maxint=0;
        for(Site site:sites){
            if(Integer.parseInt(site.getSid())>maxint){
                maxint=Integer.parseInt(site.getSid());
            }
        }
        return maxint;
    }
}
