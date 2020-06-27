package com.example.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name="notice")
public class Notice {

    @Id
    private String nid;

    private String writer;
    private LocalDate date;
    private String title;
    private String content;

    public Notice() {
    }

    @Override
    public String toString() {
        return "Notice{" +
                "nid='" + nid + '\'' +
                ", writer='" + writer + '\'' +
                ", data=" + date +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    public Notice(String nid, String writer, LocalDate date, String title, String content) {
        this.nid = nid;
        this.writer = writer;
        this.date = date;
        this.title = title;
        this.content = content;
    }

    public String getNid() {
        return nid;
    }

    public void setNid(String nid) {
        this.nid = nid;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
