let passwordEle = document.getElementById('password');
let btnEle = document.getElementById('btn');
let iconEle = document.getElementById('icon');

btnEle.addEventListener('click',createPassword);
iconEle.addEventListener('click',copyPassword);

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbols='@#$%^&*()_+~{}[]|/-=';
const len = 12;
const allChars = uppercase+lowercase+number+symbols;

function createPassword(){
	let password = "";
	password = password+uppercase[Math.floor(Math.random()*uppercase.length)];
	password = password+lowercase[Math.floor(Math.random()*lowercase.length)];
	password = password+number[Math.floor(Math.random()*number.length)];
	password = password+symbols[Math.floor(Math.random()*symbols.length)];
	while(len>password.length){
		password = password+allChars[Math.floor(Math.random()*allChars.length)];
	}
	passwordEle.value=password;
	// console.log(password);
}

function copyPassword(){
	passwordEle.select();
	document.execCommand('copy');
	alert('password copied');
}
