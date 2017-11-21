function Whoareu($scope, SpeechService, Focus) {

	function whoareu() {
		$scope.whoareuimage = "http://blogfiles.naver.net/MjAxNzExMTZfMTk0/MDAxNTEwODM5NzA5ODU0.9RvVHl7IPoz0t6d0IVo7eR9ABC4ZPHOUvsVoWq6AGBUg.FcRpeiGvmom2Lz9rZ3HKHOhdJdoRPkNANRHqxUdLg-Qg.JPEG.sysic/who.jpg";
            if(responsiveVoice.voiceSupport()) {
                  responsiveVoice.speak("저는 재용님의 이쁜 애인  스마트  미러입니다.","Korean Female");

        }

		Focus.change("whoareu");
	}
     SpeechService.addCommand('whoare_u', function () {
                        whoareu()

                });


}

angular.module('SmartMirror')
    .controller('Whoareu', Whoareu);
