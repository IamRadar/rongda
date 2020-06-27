package com.example.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="site")
public class Site {
    @Id
    private String sid;
    private String name;
    private int content;
    private boolean used;

    @Override
    public String toString() {
        return "Site{" +
                "sid='" + sid + '\'' +
                ", name='" + name + '\'' +
                ", content=" + content +
                ", used=" + used +
                '}';
    }

    public Site(String sid, String name, int content, boolean used) {
        this.sid = sid;
        this.name = name;
        this.content = content;
        this.used = used;
    }

    public Site() {

    }

    public String getSid() {

        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getContent() {
        return content;
    }

    public void setContent(int content) {
        this.content = content;
    }

    public boolean isUsed() {
        return used;
    }

    public void setUsed(boolean used) {
        this.used = used;
    }
}
