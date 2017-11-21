function Lightred($scope, SpeechService, Focus) {

	function lightred() {
		$scope.lightredimage = "http://blogfiles.naver.net/MjAxNzExMTRfMTUy/MDAxNTEwNjY0NjEwNTMz.riFXL1ax4LVEvCG_3B68lFgjGYdG2MvgBYLtwOh9FPQg.uc1O-1c-6OutcKM7NFfWLhLdlIcJ7EqkFEmFqJDkwN8g.JPEG.sysic/red1.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("섹시한 적색 조명을 켰습니다.","Korean Female");

        }
          var exec = require('child_process').exec;

exec('/home/pi/GATTTOOL/red.sh > /dev/null', function(error, stdout, stderr) {


    console.log('stdout: ', stdout);

    console.log('stderr: ', stderr);

    if (error !== null) {

        console.log('exec error: ', error);

    }

});

 

		Focus.change("lightred");
	}
     SpeechService.addCommand('light_red', function () {
                        lightred()

                });


}

angular.module('SmartMirror')
    .controller('Lightred', Lightred);
