
// ---- loop javascript array using simple for loop
for(var index=0; i<arry_list.length;index++){
console.log(index+'element is' + array_list[index]);
}

//-----------for each

array_list.forEach(function(elem, index){
    console.log(' element is ' + elem);
});

// ---- loop javascript array using forEach method with optional paramters

array_list.forEach(function(elem, index, arr){
    console.log(index + ' index element of ' + arr + ' is ' + elem);
});