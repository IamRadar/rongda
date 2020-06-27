package com.example.server.service;

import com.example.server.dao.NoticeRepository;
import com.example.server.entity.Notice;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("noticeService")
public class NoticeService {

    @Resource
    private NoticeRepository noticeRepository;

    public void insert(Notice notice){
        noticeRepository.save(notice);
    }

    public void delete(String id){
        Notice notice=noticeRepository.findById(id).get();
        if(notice!=null){
            noticeRepository.delete(notice);
        }
    }

    public Optional<Notice> findById(String id){
        return noticeRepository.findById(id);
    }

    public List<Notice> findAll(){
        return noticeRepository.findAll();
    }
}
