package global

/*
func SysEnvInt() {
	isAppEnvFile := mPath.Exists(config.File.LocalSysEnv)
	isHomeEnvFile := mPath.Exists(config.File.SysEnv)

	if isHomeEnvFile || isAppEnvFile {
		//
	} else {
		errStr := errors.New("没找到 sys_env.yaml 配置文件")
		LogErr(errStr)
		panic(errStr)
	}

	if isAppEnvFile {
		config.LoadSysEnv(config.File.LocalSysEnv)
	} else {
		config.LoadSysEnv(config.File.SysEnv)
	}

	Log.Println("加载 SysEnv : ", mJson.JsonFormat(mJson.ToJson(config.SysEnv)))
}

func AppEnvInt() {
	// 检查配置文件在不在
	isUserEnvPath := mPath.Exists(config.File.AppEnv)
	if !isUserEnvPath {
		errStr := errors.New("没找到 app_env.yaml 配置文件")
		panic(errStr)
	}

	config.LoadAppEnv()

	Log.Println("加载 AppEnv : ", mJson.JsonFormat(mJson.ToJson(config.AppEnv)))
}
*/
