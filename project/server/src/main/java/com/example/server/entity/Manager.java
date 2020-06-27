package com.example.server.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="manager")
public class Manager {
    @Id
    private String managerid;
    private String managerpwd;

    public Manager() {
    }

    public Manager(String managerid, String managerpwd) {
        this.managerid = managerid;
        this.managerpwd = managerpwd;
    }

    public String getManagerid() {
        return managerid;
    }

    public void setManagerid(String managerid) {
        this.managerid = managerid;
    }

    public String getManagerpwd() {
        return managerpwd;
    }

    public void setManagerpwd(String managerpwd) {
        this.managerpwd = managerpwd;
    }

    @Override
    public String toString() {
        return "Manager{" +
                "managerid='" + managerid + '\'' +
                ", managerpwd='" + managerpwd + '\'' +
                '}';
    }
}
