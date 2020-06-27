package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Reg {
    private String uid;
    private String pwd;

    @Override
    public String toString() {
        return "Reg{" +
                "uid='" + uid + '\'' +
                ", pwd='" + pwd + '\'' +
                ", card='" + card + '\'' +
                '}';
    }

    public Reg() {
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getCard() {
        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public Reg(String uid, String pwd, String card) {
        this.uid = uid;
        this.pwd = pwd;

        this.card = card;
    }

    private String card;
}
