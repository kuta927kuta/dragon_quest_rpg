// package controllers;

// import play.mvc.Before;
// import play.mvc.Controller;

// public class CorsFilter extends Controller {

//     @Before
//     static void setCorsHeaders() {
//         response.accessControlAllowOrigin("*");  // すべてのオリジンを許可
//         response.accessControlAllowMethods("GET, POST, PUT, DELETE, OPTIONS");
//         response.accessControlAllowHeaders("origin, content-type, accept, authorization");
//     }

//     public static void options(String path) {
//         renderText("");
//     }
// }

package controllers;

import play.mvc.Before;
import play.mvc.Controller;
import play.mvc.Http;

import java.util.ArrayList;

public class CorsFilter extends Controller {

    @Before
    static void setCorsHeaders() {
        // リクエストの Origin ヘッダーを取得
        System.out.println(request);
        String origin = request.headers.get("Origin").value();

        // CORS ヘッダーを設定
        response.setHeader("Access-Control-Allow-Origin", origin);
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }

    public static void options(String path) {
        // OPTIONS メソッドへのレスポンス
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        renderText("");
    }
}





