function Lighton($scope, SpeechService, Focus) {

	function lighton() {
		$scope.lightonimage = "http://blogfiles.naver.net/MjAxNzExMTRfMjAy/MDAxNTEwNjY0NjEwMzYz.8AhoAYL9x_jthdERk0qWKQ7Pg7RIMVLKnEU5mT6rKF4g.9Ftl0tQ25rDkTfF9d1c4P7PW0HlQcjMncMpDSRmoxSQg.JPEG.sysic/on1.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("조명을 켰습니다.","Korean Female");

        }
          var exec = require('child_process').exec;

exec('/home/pi/GATTTOOL/white.sh > /dev/null', function(error, stdout, stderr) {


    console.log('stdout: ', stdout);

    console.log('stderr: ', stderr);

    if (error !== null) {

        console.log('exec error: ', error);

    }

});

 

		Focus.change("lighton");
	}
     SpeechService.addCommand('light_on', function () {
                        lighton()

                });


}

angular.module('SmartMirror')
    .controller('Lighton', Lighton);
