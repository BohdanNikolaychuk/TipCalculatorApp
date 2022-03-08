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

reset.addEventListener('click', resetAll);

buttons.forEach(function (btn) {
	btn.addEventListener('click', tips)

});

// Function

function customFocus() {
	buttons.forEach(btn => {
		btn.classList.remove('selectTipBtnC-active');
	});
}



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



function resetAll() {
	total.innerHTML = '$0.00';
	tip.innerHTML = '$0.00';
	bill.value = '';
	countPeoples.value = '';
	custom.value = '';
}


