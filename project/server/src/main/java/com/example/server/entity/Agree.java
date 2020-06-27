package com.example.server.entity;

public class Agree {
    private String aid;
    private String sid;

    public Agree() {

    }

    public Agree(String aid, String sid) {
        this.aid = aid;
        this.sid = sid;
    }

    @Override
    public String toString() {
        return "Agree{" +
                "aid='" + aid + '\'' +
                ", sid='" + sid + '\'' +
                '}';
    }

    public String getAid() {

        return aid;
    }

    public void setAid(String aid) {
        this.aid = aid;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }
}
