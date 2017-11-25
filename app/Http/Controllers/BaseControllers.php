<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public $ctr_code; // 请求主控制器的标识码
    public $ip; // 请求用户的IP
	public $uri; // 请求用户的uri
    public $uuid; // 用户的唯一标识
    
    /**
	 * 1.载入系统配置
	 * 3.对每个调用的ip做出入参数日志记录
	 * 4.检查系统级的签名
	 */
	function __construct() {
		$this->ip = __GetIp();
		$this->uri = $_SERVER['REQUEST_URI'];
		$this->uuid = $this->session->userdata('uuid');
		$this->__Log();
		$this->__CheckSign(($this->config->item('soco'))['token']);
	}

	/**
	 * 控制器注册
	 * @param  [string] $ctr  [控制器名称]
	 * @param  [integer] $auth [是否需要用户登录 1表示需要登录 2表示不需要登录]
	 * @return [type]       [description]
	 */
	public function __RegCtr($ctr, $auth) {
		$ctr_key = array_search(strtolower($ctr), ($this->config->item('soco_controllers'))['register']);
		if ($ctr_key === NULL) {
			die('没有查询到控制器注册信息');
		} else {
			if ($auth) {
				if (!$this->__CheckLogin()) {
					die('您没有登录，请登录');
				}
			}
			$this->code = ($ctr_key + 1) . '00';
		}
	}

	/**
	 * [统一响应请求的方法]
	 * 返回标准的接口数据（支持ajax），并且记录每次接口调用时的出参
	 * @param  [integer] $code [接口返回错误码]
	 * @param  [string] $msg  [接口返回信息]
	 * @param  array  $data [接口返回数据]
	 * @return [string]       [以json数据的形式响应数据]
	 */
	public function __Response($code, $msg, $data = array()) {
		if (!$this->code) {
			die('请在控制器初始化的时候使用$this->__RegCtr()方法进行注册');
		}
		$this->__Log(array('code' => $this->code, 'msg' => $msg, 'data' => $data));
		__Response($this->code . $code, $msg, $data);
	}

	/**
	 * [记录日志，用于记录每次请求和调用时的入参和出参]
	 * 如果传入数组，表示记录输出参数，如果不传入，自动记录$_POST数据
	 * @param  array  $data [需要记录的日志内容]
	 * @return [type]       [description]
	 */
	private function __Log($data = array()) {
		__Log($this->ip . '@请求了:' . $this->uri, ($data ? '输出' : '输入') . '参数为:' . json_encode(($data ? $data : $_POST), JSON_UNESCAPED_UNICODE));
	}

	/**
	 * 检查是否登录
	 * @return [type] [description]
	 */
	private function __CheckLogin() {
		return $this->uuid ? true : false;
	}

	/**
	 * [soco平台检验系统级参数签名的方法]
	 * 首先将所需要请求的post参数全部使用字典序排序，
	 * 并且使用&key=value的形式进行字符串拼接得到字符串tmp_string，
	 * 然后把soco平台接口调用token(开发者请联系管理员索取)和当前时间戳timestamp和tmp_string进行字符串拼接然后进行sha1加密得到签名sign
	 * @param  [string] $token [soco平台接口调用token(开发者请联系管理员索取)]
	 * @return [type]        [description]
	 */
	private function __CheckSign($token) {
		if (is_array($_GET)) {
			if (!isset($_GET['sign']) || !isset($_GET['timestamp'])) {
				die('缺少系统级参数');
			}
		} else {
			die('您无权访问');
		}
		if (time() - $_GET['timestamp'] > 30) {
			die('访问超时');
		}
		$param = $_POST;
		if (isset($param['file'])) {
			unset($param['file']);
		}
		ksort($param);
		$tmp_string = '';
		foreach ($param as $k => $val) {
			$tmp_string .= '&' . $k . '=' . $val;
		}
		// print_r($tmp_string);die;
		$sign = sha1($token . $_GET['timestamp'] . $tmp_string);
		// var_dump($sign);die;
		if ($sign !== $_GET['sign']) {
			die('签名错误');
		}
		return true;
	}
}