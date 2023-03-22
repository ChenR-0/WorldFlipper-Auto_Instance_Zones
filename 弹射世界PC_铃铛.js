//请求截图
if (!requestScreenCapture()) {
    log("error = 请求截图权限失败");
    exit();
}
else {
    log("success = 请求截图权限成功");
}
toast("开游戏");

if (!launchApp("世界弹射物语")) toastLog("未能正确启动程序");
sleep(5000);
var x = device.width;
var y = device.height;
var j = 0;
var isSettling;
//铃铛坐标46，34.5
var LD_x = x * 0.065; //35
var LD_y = y * 0.027; //26
//点击参加 1
var CJ_x1 = x * 0.518; //280
var CJ_y1 = y * 0.072; //70
//点击参加 2
var CJ_x2 = x * 0.518; //280
var CJ_y2 = y * 0.135; //130
//点击参加 3
var CJ_x3 = x * 0.518; //280
var CJ_y3 = y * 0.197; //190
//失败按钮点击
var FailCJ_x = x * 0.597; //
var FailCJ_y = y * 0.633; //
// 准备坐标
var ZB_x = x * 0.354; //255
var ZB_y = y * 0.718; //919
// 开打左上白色区域 
var KD_x = x * 0.016; //11.5
var KD_y = y * 0.058; //74.2
// 自动弹射坐标
var ZD_x = x * 0.016;
var ZDTS_y = y * 0.148;
var ZDJN_y = y * 0.211;
//日期改变提示（与fail相同）
var Date_x = x * 0.597; //322  (540)
var Date_y = y * 0.633; //607  (960)
//主界面判断_底部
var Login_x = x * 0.420; //227
var Login_y = y * 0.976; //937
//结算中
var Selltement_x = x * 0.416;
var Selltement_y = y * 0.937;
//升级
var LevelUp_x = x * 0.24; // 130 （540）
var LevelUp_y = y * 0.505; // 485 （960）
//新角色
var Character_x = x * 0.277; //150 （540）
var Character_y = y * 0.828; //750 （960）
//绿铃铛
var LD_Green_x = x * 0.0416; //30,30
var LD_Green_y = y * 0.0234;
//登录领取每日奖励
var activity_x = x * 0.375; //
var activity_y = y * 0.914; //


// 颜色
var white = "#ffffffff"; //白
var LD_gray = "#ffdcdcdc" //铃铛灰
var cj_green = "#ff29c2b5"; //参加绿
var zb_gray = "#ffe7e3e7"; // 准备灰
var js_green = "#ffdedbde" //结算绿
var js_blue = "#ff002c4a" //获得角色蓝
var sj_white = "#fff7f7f7" //升级白
var zy_color = "#ffded3ce" //登录界面判断色
var xs_orange = "#ffff9f1c" //新手橙

while (1) {
    var img = captureScreen();
    var color = images.pixel(img, LD_x, LD_y);
    if (colors.isSimilar(color, colors.parseColor(white))) {//有铃铛
        //点击小铃铛
        click(LD_x, LD_y);
        toast("参加救援");
        sleep(1000);

        //点击参加
        if (colors.isSimilar(images.pixel(captureScreen(), CJ_x1, CJ_y1), colors.parseColor(cj_green)) || colors.isSimilar(images.pixel(captureScreen(), CJ_x1, CJ_y1), colors.parseColor(xs_orange))) {
            click(CJ_x1, CJ_y1);
            toast("点击参加");
            sleep(1000);
        }
        else if(colors.isSimilar(images.pixel(captureScreen(), CJ_x2, CJ_y2), colors.parseColor(cj_green)) || colors.isSimilar(images.pixel(captureScreen(), CJ_x2, CJ_y2), colors.parseColor(xs_orange))){
            click(CJ_x2, CJ_y2);
            toast("点击参加");
            sleep(1000);
        }
        else if(colors.isSimilar(images.pixel(captureScreen(), CJ_x3, CJ_y3), colors.parseColor(cj_green)) || colors.isSimilar(images.pixel(captureScreen(), CJ_x3, CJ_y3), colors.parseColor(xs_orange))){
            click(CJ_x3, CJ_y3);
            toast("点击参加");
            sleep(1000);
        }
        else {
            continue;
        }

        //人满失败
        if (colors.isSimilar(images.pixel(captureScreen(), FailCJ_x, FailCJ_y), colors.parseColor(cj_green))) {
            click(FailCJ_x, FailCJ_y);
            toast("参加失败，人满");
            sleep(3000);
            continue;
        }
        sleep(5000);

        //判断是否开打  20 320
        var Ready;
        var WaitingImg;
        var WaitingFight;
        var isDissolution;
        while (1) {
            WaitingImg = captureScreen();
            WaitingFight = images.pixel(WaitingImg, KD_x, KD_y);
            isDissolution = images.pixel(WaitingImg, FailCJ_x, FailCJ_y);
            Ready = images.pixel(WaitingImg, ZB_x, ZB_y);

            if (colors.isSimilar(WaitingFight, colors.parseColor(white), 8)) {
                toast("开打");
                break;
            }
            if (colors.isSimilar(Ready, colors.parseColor(zb_gray), 8)) {
                click(ZB_x, ZB_y);
                toast("准备");
            }
            if (colors.isSimilar(isDissolution, colors.parseColor(cj_green))) {
                click(FailCJ_x, FailCJ_y);
                toast("队伍人满/解散");
                break;
            }
            toast("等待开打");
            sleep(5000);
        }
        //失败，继续等待铃铛
        if (colors.isSimilar(isDissolution, colors.parseColor(cj_green))) {
            continue;
        }

        var image;
        var Selltement;
        var LevelUp;
        var TooLong;
        var Finish;
        var Finish_Green;
        var Character;
        while (1) {
            image = images.captureScreen();
            Selltement = images.pixel(image, Selltement_x, Selltement_y);
            LevelUp = images.pixel(image, LevelUp_x, LevelUp_y);
            TooLong = images.pixel(image, FailCJ_x, FailCJ_y);
            Finish = images.pixel(image, LD_x, LD_y);
            Finish_Green = images.pixel(image, LD_Green_x, LD_Green_y);
            Character = images.pixel(image, Character_x, Character_y);
            if (colors.isSimilar(Finish, colors.parseColor(js_green), 8) || (colors.isSimilar(Finish, colors.parseColor(white)) && colors.isSimilar(Finish_Green, colors.parseColor(cj_green)))) {
                toast("结算结束");
                isSettling = 0;
                break;
            }
            else if (colors.isSimilar(Selltement, colors.parseColor(cj_green))) {
                //结算中
                click(Selltement_x, Selltement_y);
                isSettling = 1;
                sleep(1000);
                continue;
            }
            else if (isSettling == 0) {
                toast("等待结算");
                sleep(3000);
            }
            else if (colors.isSimilar(Character, colors.parseColor(js_blue)) || colors.isSimilar(Character, colors.parseColor(white), 8)) {
                click(Selltement_x, Selltement_y);
                toast("获得角色");
                sleep(3000);
                continue;
            }
            else if (colors.isSimilar(TooLong, colors.parseColor(cj_green))) {
                click(FailCJ_x, FailCJ_y);
                toast("太久了,结算结束 || 日期改变");
                sleep(3000);
                break;
            }
            else if (colors.isSimilar(LevelUp, colors.parseColor(sj_white), 7)) {//升级了
                click(Selltement_x, Selltement_y);
                toast("Level up");
                sleep(1000);
                continue;
            }
        }
    }
    else if (colors.isSimilar(images.pixel(img, Date_x, Date_y), colors.parseColor(cj_green))) {//日期改变
        click(Date_x, Date_y);
        toast("日期改变");
        sleep(10000);
    }
    else if (colors.isSimilar(images.pixel(img, Login_x, Login_y), colors.parseColor(zy_color), 8)) {//检测是否到登录界面
        click(activity_x, activity_y);
        toast("点击开始进入游戏");
        sleep(20000);
        //不继续上把副本
        var Continue_x = x * 0.370;//200
        var Continue_y = y * 0.633;//
        var Continue;
        while (1) {//循环检测登录后点击不继续之前的铃铛
            img = captureScreen();
            color = images.pixel(img, LD_x, LD_y);
            Continue = images.pixel(img, Continue_x, Continue_y);
            if (colors.isSimilar(Continue, colors.parseColor("#ffea3553"))) {//需要不继续
                sleep(1000);//进入游戏大概率卡顿，导致画面出来，却无法点击，等待1秒以确保点上按钮
                click(Continue_x, Continue_y);
            }
            else if (colors.isSimilar(color, colors.parseColor(LD_gray), 4) || colors.isSimilar(color, colors.parseColor(white), 4)) {//不需要领取登录奖励 / 领取完登录奖励
                // 有公告e0e0e0
                break;
            }
            else {
                //关闭公告
                click(activity_x, activity_y);
                toast("点击关闭公告" + colors.toString(color));
            }
            sleep(3000);
        }

    }
    else {
        toast("等待救援" + colors.toString(color));
        sleep(3000);
    }
    isSettling = 0;
}

//绿色：#ff29c2b5  灰：#ffc5c6c5  370 1600  准备灰: #ffdedfde   #ffe7e3e7
// sleep(2000);
// toast(colors.toString(images.pixel(captureScreen() , 71, 168)));
