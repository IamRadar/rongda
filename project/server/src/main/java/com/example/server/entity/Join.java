package com.example.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="joinact")
public class Join{
    @Id
   private String jid;
   private String uid;
   private String aid;

    public Join() {
    }

    public Join(String jid, String uid, String aid) {
        this.jid = jid;
        this.uid = uid;
        this.aid = aid;
    }

    public String getJid() {
        return jid;
    }

    public void setJid(String jid) {
        this.jid = jid;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getAid() {
        return aid;
    }

    public void setAid(String aid) {
        this.aid = aid;
    }

    @Override
    public String toString() {
        return "Join{" +
                "jid='" + jid + '\'' +
                ", uid='" + uid + '\'' +
                ", aid='" + aid + '\'' +
                '}';
    }
}
