function Lightgreen($scope, SpeechService, Focus) {

	function lightgreen() {
		$scope.lightgreenimage = "http://blogfiles.naver.net/MjAxNzExMTRfMjYz/MDAxNTEwNjY0NjEwMDQ0.XrONz--DgKzT2BMQ2j625o79oIFzO3pj75k30xH070Mg.xhrFr-FiD1ndNeWolBvIXKGaMgQXK6htNhnuhjV-sJkg.JPEG.sysic/green1.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("초록색 조명을  켰습니다.","Korean Female");

        }
          var exec = require('child_process').exec;

exec('/home/pi/GATTTOOL/green.sh > /dev/null', function(error, stdout, stderr) {


    console.log('stdout: ', stdout);

    console.log('stderr: ', stderr);

    if (error !== null) {

        console.log('exec error: ', error);

    }

});

 

		Focus.change("lightgreen");
	}
     SpeechService.addCommand('light_green', function () {
                        lightgreen()

                });


}

angular.module('SmartMirror')
    .controller('Lightgreen', Lightgreen);
