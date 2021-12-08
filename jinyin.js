// 基于autojs

threads.start(function () {
    events.observeKey();
    events.onKeyDown("volume_up", function (event) {
        toastLog("停止脚本");
        engines.stopAll();
        exit();
    });
}); 

var allcount = 50;

for (var i = 0; i < allcount; i++) { 
 var randomtime = random(13000,15000);
 sleep(randomtime);  
    var item = className("android.view.View").text("阅读").findOne(1000);
 
    if(!item){ 
        this.back();
    }
}
