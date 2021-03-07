// arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

Array.prototype.myForEach = function (cb, thisArgs) {
	const _this = this;
	const len = _this.length;
	for (let i = 0; i < len; i++) {
		if (thisArgs) {
			cb.call(thisArgs, _this[i], i, _this);
		} else {
			cb.call(window, _this[i], i, _this);
		}
	}
}
Array.prototype.myMap = function (cb, thisArgs) {
	const _this = this;
	const len = _this.length;
	const arr = [];
	for (let i = 0; i < len; i++) {
		let result;
		if (thisArgs) {
			result = cb.call(thisArgs, _this[i], i, _this);
		}	else {
			result = cb.call(window, _this[i], i, _this);
		}
		arr.push(result);
	}
	return arr;
}
Array.prototype.myReduce = function (cb, initial) {
	const _this = this;
	const len = _this.length;
	let result;
	let start = 0;
	if (initial === null || initial === undefined) {
		result = _this[0];
		start = 1;
	} else {
		result = initial;
	}
	for (let i = start; i < len; i++) {
		result = cb(result, _this[i], i, this);
	}

	return result;
}

const obj = { name: 'haha' };
const arr = [1, 3, 34, 4];
// arr.myForEach(function cb (el, index, arr) {
// 	console.log(this.name + ' ' + el)
// });
// const map = arr.myMap(function(el, index, arr) {
// 	return this.name + ' ' + el;
// }, obj);
const reduce = arr.myReduce(function cb(acc, cur, index, arr) {
	// acc[cur] = cur;
	console.log(index)
	return acc + cur;
})
console.log(reduce)
