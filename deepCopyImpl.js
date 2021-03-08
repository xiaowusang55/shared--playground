function recursiveDeepCopy(obj) {
	let result;
	let keys = Object.keys(obj);
	let key = null;
	let temp = null;

	for (let i = 0; i < keys.length; i++) {
		key = keys[i];
		temp = obj[key];

		if (temp && typeof temp === 'object') {
			result[key] = recursiveDeepCopy(temp);
		} else {
			result[key] = temp;
		}
	}

	return result;
}