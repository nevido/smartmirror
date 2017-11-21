function AutoSleep($http, $q, SpeechService,AutoSleepService) {


    // Hide everything and "sleep"
	SpeechService.addCommand('sleep', function () {
		console.debug("Ok, going to sleep...");
   if(responsiveVoice.voiceSupport()) {
          responsiveVoice.speak("자러 갈게요. 다음에 봐요!","Korean Female");
        }

		AutoSleepService.sleep();
	});

}

angular.module('SmartMirror')
    .controller('AutoSleep', AutoSleep);
