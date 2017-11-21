function Lightblue($scope, SpeechService, Focus) {

	function lightblue() {
		$scope.lightblueimage = "http://blogfiles.naver.net/MjAxNzExMTRfMTQy/MDAxNTEwNjY0NjA5ODcx.L9ApU18aAgNZgr83xZjwMJvqRbg9y_5nJ1MoGSvrIXYg.tTYmgxpYmpKVQbZ7zlPLjv6jHT0-ZRiYLQxaZnnzbDwg.JPEG.sysic/blue1.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("하늘색 조명을 켰습니다.","Korean Female");

        }
          var exec = require('child_process').exec;

exec('/home/pi/GATTTOOL/blue.sh > /dev/null', function(error, stdout, stderr) {


    console.log('stdout: ', stdout);

    console.log('stderr: ', stderr);

    if (error !== null) {

        console.log('exec error: ', error);

    }

});

 

		Focus.change("lightblue");
	}
     SpeechService.addCommand('light_blue', function () {
                        lightblue()

                });


}

angular.module('SmartMirror')
    .controller('Lightblue', Lightblue);
