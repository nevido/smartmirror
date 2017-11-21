function Bubal($scope, SpeechService, Focus) {

	function bubal() {
		$scope.bubalimage = "http://postfiles2.naver.net/MjAxNzA0MTlfMTgx/MDAxNDkyNTY5MDY0OTI3.AUJp8Hh1r-gruSuNDTrVwg31JxVutYniXi5xJNcGfPUg.1V9Pw5bR3ptWCvlE1cASsa7VZF-Z2YOqNtFhCdbFR1Ig.PNG.jinny55555/%EB%B6%80%EB%B0%9C.png?type=w1";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("부발역 시간표입니다. 너무 믿진 마세요.","Korean Female");

        }

 

		Focus.change("bubal");
	}
     SpeechService.addCommand('bubal_on', function () {
                        bubal()

                });


}

angular.module('SmartMirror')
    .controller('Bubal', Bubal);
