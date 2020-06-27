package com.example.server.service;

import com.example.server.dao.SiteRepository;
import com.example.server.entity.Site;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service("siteService")
public class SiteService {

    @Resource
    private SiteRepository siteRepository;

    public void insert(Site site){
        siteRepository.save(site);
    }

    public void delete(String id){
        Site site=siteRepository.findById(id).get();
        if(site!=null){
            siteRepository.delete(site);
        }
    }

    public void update(Site site){
        siteRepository.save(site);
    }

    public Optional<Site> findById(String id) {
        return siteRepository.findById(id);
    }


    public List<Site> findAll() {
        return  siteRepository.findAll();
    }
}
