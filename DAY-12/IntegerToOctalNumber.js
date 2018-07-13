function OctalConvert(number)
{
	var num="";{
		while(number>0){
			num=number%8+num;
		number=Math.floor(number/8);
		}
		return num;
	
}
}
console.log(OctalConvert(8));