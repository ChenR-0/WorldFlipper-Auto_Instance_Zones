//请求截图
if (!requestScreenCapture()) {
    log("error = 请求截图权限失败");
    exit();
}
else {
    log("success = 请求截图权限成功");
}
toast("开游戏");
sleep(5000);

var x = device.width;
var y = device.height;
var j = 0;
var isSettling = 0;

var useFirst = 1; //使用（小）体力药
var useSecond = 0; //使用（中）体力药
var useThird = 0; //使用（大）体力药



while (1) {
    //铃铛坐标
    var LD_x = x * 0.065;
    var LD_y = y * 0.027;
    // 挑战坐标250 1080 0.347 0.844
    var ZB_x = x * 0.347;
    var ZB_y = y * 0.844;
    // 开打左上白色区域       
    var KD_x = x * 0.05; //27
    var KD_y = y * 0.0625; //60
    // 判断是否需要嗑药的“取消”坐标
    var Cancel_x = x * 0.370; //200
    var Cancel_y = y * 0.864; //830
    //判断是否开打
    var Ready;
    var WaitingImg;
    var WaitingFight;
    var Cancel;
    while (1) {
        WaitingImg = captureScreen();
        WaitingFight = images.pixel(WaitingImg, KD_x, KD_y);
        Ready = images.pixel(WaitingImg, ZB_x, ZB_y);
        ReadCancely = images.pixel(WaitingImg, Cancel_x, Cancel_y);
        if (colors.isSimilar(Ready, colors.parseColor("#ffff9f1c"), 8)) {
            click(ZB_x, ZB_y);
            toast("挑战");
            sleep(5000);
        }
        sleep(2000);
        if (colors.isSimilar(WaitingFight, colors.parseColor("#ff424542"), 8)) {
            toast("开打");
            break;
        }
        if (colors.isSimilar(ReadCancely, colors.parseColor("#ffea3553"), 8)) {
            toast("嗑药");
            //体力药（小）
            var first_StaminaPills_x = x * 0.537;//290
            var first_StaminaPills_y = y * 0.375;//360
            //体力药（中）
            var second_StaminaPills_x = x * 0.537;//290
            var second_StaminaPills_y = y * 0.489;//470
            //体力药（大）
            var third_StaminaPills_x = x * 0.537;//290
            var third_StaminaPills_y = y * 0.557;//535
            //截图
            var StaminaPillsPic = captureScreen();
            if (colors.isSimilar(images.pixel(StaminaPillsPic, first_StaminaPills_x, first_StaminaPills_y), colors.parseColor("#ffffffff"), 8) && useFirst == 1) {
                click(first_StaminaPills_x, first_StaminaPills_y);
                sleep(1000);
                //滑动
                var start_x = x * 0.287;//155
                var start_y = y * 0.484;//465
                if (colors.isSimilar(images.pixel(captureScreen(), start_x, start_y), colors.parseColor("#ff29c7b5"), 8)) {
                    var end_x = x * 0.685;//370
                    var end_y = y * 0.484;//465
                    swipe(start_x, start_y, end_x, end_y, 500);
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.729;//700
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                } else {
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.666;//640
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                }
            }else if (colors.isSimilar(images.pixel(StaminaPillsPic, second_StaminaPills_x, second_StaminaPills_y), colors.parseColor("#ffffffff"), 8) && useSecond == 1) {
                click(second_StaminaPills_x, second_StaminaPills_y);
                sleep(1000);
                //滑动
                var start_x = x * 0.287;//155
                var start_y = y * 0.484;//465
                if (colors.isSimilar(images.pixel(captureScreen(), start_x, start_y), colors.parseColor("#ff29c7b5"), 8)) {
                    var end_x = x * 0.685;//370
                    var end_y = y * 0.484;//465
                    swipe(start_x, start_y, end_x, end_y, 500);
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.729;//700
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                } else {
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.666;//640
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                }
            }else if (colors.isSimilar(images.pixel(StaminaPillsPic, third_StaminaPills_x, third_StaminaPills_y), colors.parseColor("#ffffffff"), 8) && useThird == 1) {
                click(third_StaminaPills_x, third_StaminaPills_y);
                sleep(1000);
                //滑动
                var start_x = x * 0.287;//155
                var start_y = y * 0.484;//465
                if (colors.isSimilar(images.pixel(captureScreen(), start_x, start_y), colors.parseColor("#ff29c7b5"), 8)) {
                    var end_x = x * 0.685;//370
                    var end_y = y * 0.484;//465
                    swipe(start_x, start_y, end_x, end_y, 500);
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.729;//700
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                } else {
                    //点击使用
                    var OK_x = x * 0.611;//330
                    var OK_y = y * 0.666;//640
                    click(OK_x, OK_y);
                    sleep(1500);
                    //点击OK
                    OK_x = x * 0.5;//270
                    OK_y = y * 0.708;//680
                    click(OK_x, OK_y);
                }
            }else{
                toastLog("指定体力药以用尽，脚本结束");
                exit();
            }
        }
        toast("等待开打" + colors.toString(Ready));
        sleep(2000);
    }


    //结束战斗 #ff29c2b5
    //继续 400 1200 0.5555 0.9375
    var Selltememt_x = x * 0.5555;
    var Selltememt_y = y * 0.9375;
    var LevelUp_x = x * 0.33;
    var LevelUp_y = y * 0.51;
    var Character_x = x * 0.277;
    var Character_y = y * 0.828;
    var LD_Green_x = x * 0.0416; //30,30
    var LD_Green_y = y * 0.0234;
    while (1) {
        var image = images.captureScreen();
        var Selltement = images.pixel(image, Selltememt_x, Selltememt_y);
        var LevelUp = images.pixel(image, LevelUp_x, LevelUp_y);
        var Finish = images.pixel(image, LD_x, LD_y);
        var Finish_Green = images.pixel(image, LD_Green_x, LD_Green_y);
        var Character = images.pixel(image, Character_x, Character_y);
        if (colors.isSimilar(Finish, colors.parseColor("#ffdedbde")) || (colors.isSimilar(Finish, colors.parseColor("#ffffffff")) && colors.isSimilar(Finish_Green, colors.parseColor("#ff29c2b5")))) {
            toast("结算结束");
            isSettling = 0;
            break;
        }
        else if (colors.isSimilar(Selltement, colors.parseColor("#ff29c2b5"))) {
            //结算中
            click(Selltememt_x, Selltememt_y);
            isSettling = 1;
            sleep(1000);
            continue;
        }
        else if (colors.isSimilar(LevelUp, colors.parseColor("#fff7f7f7"), 7)) {//升级了
            click(Selltememt_x, Selltememt_y);
            toast("Level up");
            sleep(2000);
            continue;
        }
        else if (isSettling == 0) {
            toast("等待结算");
            sleep(5000);
        }
        else {
            click(Selltememt_x, Selltememt_y);
            sleep(1000);
        }

    }
}


//绿色：#ff29c2b5  灰：#ffc5c6c5  370 1600  准备灰: #ffdedfde   #ffe7e3e7
// sleep(2000);
// toast(colors.toString(images.pixel(captureScreen() , 71, 168)));
