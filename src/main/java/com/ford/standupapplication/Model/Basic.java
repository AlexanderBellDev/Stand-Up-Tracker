package com.ford.standupapplication.Model;

import lombok.Data;

@Data
public class Basic {

    private String message;

    public Basic(String message) {
        this.message = message;
    }
}
