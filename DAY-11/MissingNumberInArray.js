function missingNum(nums){
    const numberArray = nums.sort((num1, num2)=>{
		
      return num1 - num2;
   });
   
   for (let i=0; i < numberArray.length; i++){
      if(i !== numberArray[i]){
        return i;
      }
   }
 }
 console.log(missingNum([0,3,5,8,4,6,1,9,7]))