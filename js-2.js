// task 1

let arr = new Array(20), result = [];
for(let i = 0; i < 20; i++) result.push(`${arr[i] = i*5}`);
print(["Результат:", ...result]);

// task 2

scan("Введите String 1: ").then(str1 => {
	scan("Введите String 2: ").then(str2 => {
		print([`Результат: ${str1 === str2 ? "arrays are equal": str1 > str2 ? "the second array is earlier" : "the first array is earlier"}.`]);
	})
})

// task 3

print(["Введите массив, разделяя его элементы запятой с пробелом [, ] и/или запятой [,]."]);
scan("Введите массив: ").then(value => {
	let arr = replaceAll(value.trim().replace(/,/g, ", "), "  ", " ").replace(/ ,/g, ",").split(", ");
	let len = arr.length, repeatCounts = {}, startIndex = 0, result = [];
	while(startIndex < len) {
		let endIndex = startIndex;
		if(arr[endIndex+1]) while(arr[endIndex] === arr[endIndex+1]) endIndex++;
		repeatCounts[startIndex] = endIndex-startIndex+1;
		startIndex = endIndex+1;
	}
	let maxRepeatCount = 0, searchIndex = 0;
	Object.keys(repeatCounts).forEach(index => {
		if(repeatCounts[index] > maxRepeatCount) maxRepeatCount = repeatCounts[searchIndex = +index];
	})
	for(let i = searchIndex; i < searchIndex+repeatCounts[searchIndex]; i++) result.push(arr[i]);
	print(["Результат: {result.join(", ")}."]);
})

// task 4

print(["Введите массив, разделяя его элементы запятой с пробелом [, ] и/или запятой [,]."]);
scan("Введите массив: ").then(value => {
	let arr = replaceAll(value.trim().replace(/,/g, ", "), "  ", " ").replace(/ ,/g, ",").split(", ");
	let len = arr.length, repeatCounts = {}, startIndex = 0, result = [];
	while(startIndex < len) {
		let endIndex = startIndex;
		if(arr[endIndex+1]) while(arr[endIndex] < arr[endIndex+1]) endIndex++;
		repeatCounts[startIndex] = endIndex-startIndex+1;
		startIndex = endIndex+1;
	}
	let maxRepeatCount = 0, searchIndex = 0;
	Object.keys(repeatCounts).forEach(index => {
		if(repeatCounts[index] > maxRepeatCount) maxRepeatCount = repeatCounts[searchIndex = +index];
	})
	for(let i = searchIndex; i < searchIndex+repeatCounts[searchIndex]; i++) result.push(arr[i]);
	print(["Результат: {result.join(", ")}."]);
})

// task 5

print(["Введите массив, разделяя его элементы запятой с пробелом [, ] и/или запятой [,]."]);
scan("Введите массив: ").then(value => {
	let arr = replaceAll(value.trim().replace(/,/g, ", "), "  ", " ").replace(/ ,/g, ",").split(", ");
	let len = arr.length, result = [];
	function getMin() {
		let minIndex = 0;
		for(let i = 1; i < len; i++) if(+arr[i] <= +arr[minIndex]) minIndex = i;
		let item = arr[minIndex];
		arr.splice(minIndex, 1);
		return item;
	}
	for(let i = 0; i < len; i++) result.push(`${i+1}: ${getMin()}`);
	print(["Результат:", ...result]);
})

// task 6

print(["Введите массив, разделяя его элементы запятой с пробелом [, ] и/или запятой [,]."]);
scan("Введите массив: ").then(value => {
	let arr = replaceAll(value.trim().replace(/,/g, ", "), "  ", " ").replace(/ ,/g, ",").split(", ");
	let repeatsCount = {};
	arr.forEach(item => {
		if(!repeatsCount[item]) repeatsCount[item] = 0;
		repeatsCount[item]++;
	})
	let maxRepeatsCount = 0, max;
	Object.keys(repeatsCount).forEach(item => {
		if(repeatsCount[item] > maxRepeatsCount) maxRepeatsCount = repeatsCount[max = item];
	})
	print([`Результат:  ${max} (${repeatsCount[max]} times).`]);
})

// task 7

print(["Введите массив, разделяя его элементы запятой с пробелом [, ] и/или запятой [,]."]);
scan("Введите массив: ").then(value => {
	let a = replaceAll(value.trim().replace(/,/g, ", "), "  ", " ").replace(/ ,/g, ",").split(", ").map(item => +item);
	let arr = a.filter((item, pos) => a.indexOf(item) === pos).sort((x, y) => x - y);
	print([`Отсортированный массив: ${arr.join(", ")}.`]);
	scan("Укажите элемент, индекс которго нужно найти: ").then(element => {
		let item = +element.trim();
		function binarySearch() {
			let start = 0;
			let end = arr.length-1;
			while(start <= end) {
				let middle = Math.floor((start+end)/2);
				if(item === arr[middle]) {
					return middle;
				} else if(item > arr[middle]) {
					start = middle+1;
				} else {
					end = middle-1;
				}
			}
			return null;
		}
		let index = binarySearch();
		print([`Результат: ${index === null ? "item not found" : `the index of ${item} is ${index}`}.`]);
	})
})
