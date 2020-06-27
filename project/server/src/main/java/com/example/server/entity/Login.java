package com.example.server.entity;

public class Login {
    @Override
    public String toString() {
        return "Login{" +
                "uid='" + uid + '\'' +
                ", pwd='" + pwd + '\'' +
                ", isteacher=" + isteacher +
                '}';
    }

    private String uid;
    private String pwd;

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

    public boolean isIsteacher() {
        return isteacher;
    }

    public void setIsteacher(boolean isteacher) {
        this.isteacher = isteacher;
    }

    private boolean isteacher;
}
