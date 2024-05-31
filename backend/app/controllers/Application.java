package controllers;

import play.*;
import play.mvc.*;

import java.util.*;

import models.*;

public class Application extends Controller {

    public static void index() {
        render();
    }

    /**
     * Config CORS
     */
    public static void options() {
        response.headers.put("Access-Control-Allow-Origin", new Http.Header("Access-Control-Allow-Origin", "*"));
        response.headers.put("Access-Control-Allow-Credentials", new Http.Header("Access-Control-Allow-Credentials",
                "true"));
        response.headers.put("Access-Control-Allow-Methods",
                new Http.Header("Access-Control-Allow-Methods", "*"));
        response.headers.put("Access-Control-Allow-Headers", new Http.Header("Access-Control-Allow-Headers",
                "x-token,Content-Type"));
    }

}