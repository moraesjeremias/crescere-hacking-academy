console.time("bad_code");
var i;
var arr = new Array(1000000);
for (i = 0; i < arr.length; i++) {

}

console.timeEnd("bad_code");


console.time("smart_code");
var arrocha = new Array(1000000);
var l =arrocha.length;
for (i = 0; i < l; i++) {

}

console.timeEnd("smart_code");
console.log(l);
