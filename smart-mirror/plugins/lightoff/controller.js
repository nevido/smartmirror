function Lightoff($scope, SpeechService, Focus) {

	function lightoff() {
		$scope.lightoffimage = "http://blogfiles.naver.net/MjAxNzExMTRfMTA0/MDAxNTEwNjY0NjEwMTkw.EqznZCcZmlZkrk9asd7Q9DOUOVn0iFaQkVekEUujjrQg.qjW4tdjEIBXgb6olgblmug65QZXl0mERRbHcuXv5rbcg.JPEG.sysic/off1.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("조명을 끕니다.","Korean Female");

        }
          var exec = require('child_process').exec;

exec('/home/pi/GATTTOOL/off.sh > /dev/null', function(error, stdout, stderr) {


    console.log('stdout: ', stdout);

    console.log('stderr: ', stderr);

    if (error !== null) {

        console.log('exec error: ', error);

    }

});

 

		Focus.change("lightoff");
	}
     SpeechService.addCommand('light_off', function () {
                        lightoff()

                });


}

angular.module('SmartMirror')
    .controller('Lightoff', Lightoff);
