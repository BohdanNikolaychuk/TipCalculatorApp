// Selectors
let bill = document.querySelector('#bill'),
	buttons = document.querySelectorAll('.button'),
	custom = document.querySelector('.custom'),
	countPeoples = document.querySelector('#num__people'),
	tip = document.querySelector('.tip__amount'),
	total = document.querySelector('.total__price'),
	reset = document.querySelector('.reset'),
	countErrorMsg = document.querySelector('.countError-msg'),
	inputBillError = document.querySelector('.billError-msg');



// Event


/* bill event  */
bill.addEventListener('keyup', count);

/* Custom Event */
custom.addEventListener('focus', customFocus);
custom.addEventListener('keyup', () => {
	count();
	tipsCustom();
});


/* tips event */
buttons.forEach(function (btn) {
	btn.addEventListener('click', tips)

});

/* reset event */
reset.addEventListener('click', resetAll);

// Function


/* creat function for focus */
function customFocus() {
	buttons.forEach(btn => {
		btn.classList.remove('selectTipBtnC-active');
	});
}


/* take value when you click on button */
function tips(event) {
	buttons.forEach(function (btn) {

		btn.classList.remove('selectTipBtnC-active')
		custom.value = '';
		custom.classList.remove('selectTipCustomC-active');

		if (event.target.value == btn.value) {

			btn.classList.add('selectTipBtnC-active');
			tipValue = btn.value;

		}
	});
	count();
}

/* receive value from input */
function tipsCustom() {
	if (custom.value !== '') {
		tipValue = custom.value;
		custom.classList.add('selectTipCustomC-active');
	} else if (custom.value == '') {
		buttons.forEach(btn => {
			btn.classList.remove('selectTipBtnC-active');
			custom.value = '';
			custom.classList.remove('selectTipCustomC-active');
		})

	}
	count();

}

/* basic math and some check */

function count() {
	if (bill.value == 0 && bill.value !== "") {
		bill.classList.add('errorInput-active');
		inputBillError.classList.add('billError-msg-active');
	} else {
		bill.classList.remove('errorInput-active');
		inputBillError.classList.remove('billError-msg-active');
	}

	if (countPeoples.value == 0 && countPeoples.value !== "") {
		countPeoples.classList.add('errorInput-active');
		countErrorMsg.classList.add('countError-msg-active');
	} else {
		countPeoples.classList.remove('errorInput-active');
		countErrorMsg.classList.remove('countError-msg-active');
	}
	if (bill.value != 0 && bill.value !== '' && countPeoples.value != 0 && countPeoples.value !== '' && typeof tipValue !== "undefined") {

		var tipCount = (bill.value * (tipValue / 100)) / countPeoples.value;
		var totalCount = (bill.value * ((tipValue / 100) + 1)) / countPeoples.value;
		total.innerHTML = '$' + totalCount.toFixed(2);
		tip.innerHTML = '$' + tipCount.toFixed(2);
	} else {
		total.innerHTML = "$0.00";
		tip.innerHTML = "$0.00";
	}
}

/* reset all value */

function resetAll() {
	total.innerHTML = '$0.00';
	tip.innerHTML = '$0.00';
	bill.value = '';
	countPeoples.value = '';
	custom.value = '';
}


