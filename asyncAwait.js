let url = 'http://easy-eng.ru';
let username = 'admin';
let password = 'O12345678';

let headers = new Headers();

//headers.append('Content-Type', 'text/json');
//headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));


async function f() {

	let res = await fetch(url, {
		method: 'GET',
		headers: headers,
	});
	
	if (res.ok)
	{
		console.log(await res.json());
	}
	else
		console.log('Error');
}

console.log('Data 1');
f();
console.log('Data 4');