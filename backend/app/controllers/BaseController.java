package controllers;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import entities.enums.ErrorCode;

import java.util.*;

import play.Logger;
import play.Play;
import play.data.validation.Validation;
import play.i18n.Messages;
import play.mvc.After;
import play.mvc.Before;
import play.mvc.Controller;
import utils.ResponseUtils;

/**
 * Class Base Controller
 *
 */
public class BaseController extends Controller {

	protected final ObjectMapper mapper;
	// protected User userLogin;

	public BaseController() {
		this.mapper = new ObjectMapper();
		this.mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	}

	/**
	 * Handle error response
	 *
	 * @param errorCode
	 * @param msg
	 */
	protected void responseError(int status, ErrorCode errorCode, String msg) {

		response.status = status;
		renderJSON(ResponseUtils.createError(errorCode, msg));
	}

    protected void responseError(ErrorCode errorCode, String msg) {

		renderJSON(ResponseUtils.createError(errorCode, msg));
	}

	/**
	 * Handle success response
	 *
	 * @param object
	 */
	protected void responseSuccess(Object object) {
		String json = mapper.valueToTree(object).toString();
		renderJSON(json);
	}
	

	// /**
	//  * ゲットマスター
	//  * @param settingName
	//  * @return
	//  */
	// protected SettingMaster getSettingMaster(String settingName) {
	// 	return SettingMaster.find("settingName", settingName).first();
	// }

}