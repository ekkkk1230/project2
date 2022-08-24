/* jQuery 캘린더 확장에 대한 한국어 초기화입니다. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Genie 및 이명진 편집. */

$( function( factory ) { //팩토리 함수를 파라미터(객체)로 받음. 

	//typeof 연산자는 피연산자 앞에 위치. typeof는  변수값의 데이터가 어떤 종류의 자료형인지 알려줌.
	if ( typeof define === "function" && define.amd ) { //AMD 포맷에 따라 모듈을 선언하겠다는 정의

		// AMD(실행할 코드가 필요한 파일만 가져오므로 성능이 좋음). 익명 모듈로 등록하십시오. 자바스크립트 모듈 선언 포맷인 AMD.
		//AMD는define ()을 호출하여 factory 함수를 즉시 등록.모듈 이름의 배열로 전달.팩토리 함수에 대한 인수로 종속 모듈 전달
		 define( ["datepicker"],factory );  //콜백 함수(인자함수). 내가 쓰고자 하는 남의 코드들을 define의 첫 번째 인자 배열에 나열한 후, 두 번째 인자인 콜백 함수에서 매개변수로 받으면 됩니다. 

		//콜백함수:다른 함수의 인자로써 넘겨진 후 특정 이벤트에 의해 호출되는 함수. 다른함수의 인자로써 이용되는 함수.

		//'define'이 정의되지 않고 함수이고 'amd'(비동기 모듈 정의)도 정의된 경우 코드는 require.js가 실행 중이라고 가정합니다. 
		//★그렇다면 'factory'를 정의하고 jQuery를 종속성으로 전달.★ 그렇지 않으면 루트 개체에 연결하여 코드에 필요한 종속성을 설정합니다.

	} else {

		// Browser globals(브라우저 전역)
		factory( jQuery.datepicker ); //datepicker 날짜선택 위젯을 한글로 받음.

	}
}( function( datepicker ) {

datepicker.regional.ko = {
	closeText: "닫기",
	prevText: "이전달",
	nextText: "다음달",
	currentText: "오늘",
	monthNames: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
	monthNamesShort: [ "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월" ],
	dayNames: [ "일요일","월요일","화요일","수요일","목요일","금요일","토요일" ],
	dayNamesShort: [ "일","월","화","수","목","금","토" ],
	dayNamesMin: [ "일","월","화","수","목","금","토" ],
	weekHeader: "주",
	dateFormat: "yy.mm.dd",
	firstDay: 0,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "년" };
datepicker.setDefaults( datepicker.regional.ko ); //datepicker 한글화. datepicker-ko.js파일의 한글화 작업

return datepicker.regional.ko; //datepicker 한글화 실행 값을 함수 호출 지점으로 반환(else문 19번줄).

} ) );