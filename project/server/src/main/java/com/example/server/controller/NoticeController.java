package com.example.server.controller;

import com.example.server.entity.Notice;
import com.example.server.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class NoticeController {

    @Autowired
    private NoticeService noticeService;

    @CrossOrigin
    @RequestMapping(value="/notice/all",method = RequestMethod.GET)
    public List<Notice> selectall(){
        return noticeService.findAll();
    }

    @CrossOrigin
    @RequestMapping(value="/notice/one",method = RequestMethod.GET)
    public Notice selectone(@RequestParam("nid") String nid){
        return noticeService.findById(nid).get();
    }

    @CrossOrigin
    @RequestMapping(value="/notice/add",method = RequestMethod.POST)
    public boolean add(@RequestBody Notice notice){
        noticeService.insert(notice);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/notice/delete",method = RequestMethod.DELETE)
    public boolean delete(@RequestParam("nid") String nid){
        noticeService.delete(nid);
        return true;
    }

    @CrossOrigin
    @RequestMapping(value="/notice/maxint",method = RequestMethod.GET)
    public int maxint(){
        List<Notice> notices=noticeService.findAll();
        int maxint=0;
        for(Notice notice:notices){
            if(Integer.parseInt(notice.getNid())>maxint){
                maxint=Integer.parseInt(notice.getNid());
            }
        }
        return maxint;
    }

    @CrossOrigin
    @RequestMapping(value="/notice/quantity",method = RequestMethod.GET)
    public int quantity(){
        return noticeService.findAll().size();
    }

}
