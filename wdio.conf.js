const{join} = require('path')
exports.config = {
    hostname:'localhost',
    port: 4723,
    path:'/wd/hub',
    specs:[
        '.test/specs/**/*.spec.js'
    ],
    framework:'mocha',
    capabilities:[
        {
            "platformName": "Android",
            "platformVersion": "11.0",
            "deviceName": "moto g(60)",
            "automationName": "UiAutomator2",
            "app": join(process.cwd(), './app/android/loja-ebac.apk'),
            "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        }
    ]
}