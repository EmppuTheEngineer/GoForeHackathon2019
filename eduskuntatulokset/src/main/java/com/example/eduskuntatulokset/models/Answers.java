package com.example.eduskuntatulokset.models;

import java.util.List;

public class Answers {
    private String decision;
    private int score;

    public Answers(String decision, int score) {
        this.decision = decision;
        this.score = score;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getDecision() {
        return decision;
    }

    public void setDecision(String decision) {
        this.decision = decision;
    }
}