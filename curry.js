var primaryCurrying = function (fn,...args) {
	return function (...args2) {
		var newArgs = args.concat(args2);
		return fn.apply(this, newArgs);
	}
}

function curry(fn, length) {
	length = length || fn.length;

    return function (...args2) {
	    if (args2.length < length) {
		    var combinedArgs = [fn].concat(args2);
		    return curry(primaryCurrying.apply(this, combinedArgs), length - args2.length);
	    }
	    else {
		    return fn.apply(this, args2);
	    }
    };
}

const fn = curry(function (a, b, c) {
	return [a, b, c];
});

console.log(fn("a", "b")("c")); //>> ["a", "b", "c"]


/* 实现一个add方法，使计算结果能够满足如下预期：
	add(1)(2)(3) = 6;
	add(1, 2, 3)(4) = 10;
	add(1)(2)(3)(4)(5) = 15;
*/

function add() {
	let _args = Array.prototype.slice.call(arguments);

	function __adder() {
			_args.push(...arguments);
			return __adder;
	}

	__adder.toString = function () {
		return _args.reduce((acc, cur) => {
			return acc + cur;
		}, 0)
	}

	return __adder;
}