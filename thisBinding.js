Function.prototype.myCall = function myCall(thisArgs, ...arg) {
    let fn = this;
    let obj = thisArgs;
    if (obj === null || obj === undefined) {
    	obj = window;
    } else {
    	obj = Object(obj);
    }
    obj['fun'] = fn;
		return obj['fun'](...arg);
}

Function.prototype.myBind = function myBind(thisArgs, ...args) {
	let obj = thisArgs;
	let thisFn = this;
	if (obj === null || obj === undefined) {
		obj = window;
	} else {
		obj = Object(obj);
	}

	function fn(...secondary) {
		let isNew = this instanceof fn;
		obj = isNew ? this : Object(obj);
		return thisFn.myCall(obj, ...args, ...secondary);
	}

	fn.prototype = Object.create(thisFn.prototype);
	return fn;
}

function f(hah, ...args) {
	console.log(this.name + hah + args.toString());
}

let obj = { name: 'sfs' };
let fn = f.myBind(obj, 'haha', 666);
fn(' heiehi');


