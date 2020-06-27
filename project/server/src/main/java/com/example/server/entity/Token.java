package com.example.server.entity;

public class Token {
    private String content;
    private int length;

    public Token() {
    }

    public Token(String content, int length) {
        this.content = content;
        this.length = length;
    }

    @Override
    public String toString() {
        return "Token{" +
                "content='" + content + '\'' +
                ", length=" + length +
                '}';
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }
}
