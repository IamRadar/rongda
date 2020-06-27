package com.example.server.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "teacher")
public class Teacher implements Serializable{


    @Id
    private String tid;
    @Column(name ="card")
    private String card;
    @Column(name ="isreg")
    private boolean isreg;

    public Teacher() {

    }

    public Teacher(String tid, boolean isreg, String card) {
        this.tid = tid;
        this.isreg = isreg;
        this.card = card;
    }

    public String getCard() {

        return card;
    }

    public void setCard(String card) {
        this.card = card;
    }

    public boolean isIsreg() {
        return isreg;
    }

    public void setIsreg(boolean isreg) {
        this.isreg = isreg;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "tid='" + tid + '\'' +
                ", isreg=" + isreg +
                ", card='" + card + '\'' +
                '}';
    }

    public String getTid() {
        return tid;
    }

    public void setTid(String tid) {
        this.tid = tid;
    }
}
