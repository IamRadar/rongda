package com.example.server.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "user")
public class User implements Serializable{

    @Id
    private String uid;
    private String name;
    private String pwd;
    private String phone;
    private String card;
    private boolean gender;
    private int hostnum;
    private int applynum;


    public User() {
    }

    public User(String uid, String name, String pwd, String phone, String card, boolean gender, int hostnum, int applynum) {
        this.uid = uid;
        this.name = name;
        this.pwd = pwd;
        this.phone = phone;
        this.card = card;
        this.gender = gender;
        this.hostnum = hostnum;
        this.applynum = applynum;
    }

    @Override
    public String toString() {
        return "User{" +
                "uid='" + uid + '\'' +
                ", name='" + name + '\'' +
                ", pwd='" + pwd + '\'' +
                ", phone='" + phone + '\'' +
                ", card='" + card + '\'' +
                ", gender=" + gender +
                ", hostnum=" + hostnum +
                ", applynum=" + applynum +
                '}';
    }

    public int getHostnum() {
        return hostnum;
    }

    public void setHostnum(int hostnum) {
        this.hostnum = hostnum;
    }

    public int getApplynum() {
        return applynum;
    }

    public void setApplynum(int applynum) {
        this.applynum = applynum;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

}
