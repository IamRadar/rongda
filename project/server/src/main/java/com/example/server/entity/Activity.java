package com.example.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="activity")
public class Activity {
    @Id
    private String aid;
    private String name;
    @Column(name="begintime")
    private LocalDateTime begintime;
    private double length;
    private int needp;
    private int numofp;
    private String siteid;
    private String sponsor;
    private String hostid;
    private String introduce;
    private int money;
    private int state;
    private String sitename;

    public Activity() {
    }

    public Activity(String aid, String name, LocalDateTime begintime, double length, int needp, int numofp, String siteid, String sponsor, String hostid, String introduce, int money, int state, String sitename) {
        this.aid = aid;
        this.name = name;
        this.begintime = begintime;
        this.length = length;
        this.needp = needp;
        this.numofp = numofp;
        this.siteid = siteid;
        this.sponsor = sponsor;
        this.hostid = hostid;
        this.introduce = introduce;
        this.money = money;
        this.state = state;
        this.sitename = sitename;
    }

    @Override
    public String toString() {
        return "Activity{" +
                "aid='" + aid + '\'' +
                ", name='" + name + '\'' +
                ", begintime=" + begintime +
                ", length=" + length +
                ", needp=" + needp +
                ", numofp=" + numofp +
                ", siteid='" + siteid + '\'' +
                ", sponsor='" + sponsor + '\'' +
                ", hostid='" + hostid + '\'' +
                ", introduce='" + introduce + '\'' +
                ", money=" + money +
                ", state=" + state +
                ", sitename='" + sitename + '\'' +
                '}';
    }

    public String getSitename() {
        return sitename;
    }

    public void setSitename(String sitename) {
        this.sitename = sitename;
    }

    public String getAid() {
        return aid;
    }

    public void setAid(String aid) {
        this.aid = aid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDateTime getBegintime() {
        //System.out.println("begin date is "+begintime);
        return begintime;
    }

    public void setBegintime(LocalDateTime begintime) {
        this.begintime = begintime;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public int getNeedp() {
        return needp;
    }

    public void setNeedp(int needp) {
        this.needp = needp;
    }

    public int getNumofp() {
        return numofp;
    }

    public void setNumofp(int numofp) {
        this.numofp = numofp;
    }

    public String getSiteid() {
        return siteid;
    }

    public void setSiteid(String siteid) {
        this.siteid = siteid;
    }

    public String getSponsor() {
        return sponsor;
    }

    public void setSponsor(String sponsor) {
        this.sponsor = sponsor;
    }

    public String getHostid() {
        return hostid;
    }

    public void setHostid(String hostid) {
        this.hostid = hostid;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
