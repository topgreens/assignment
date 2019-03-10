class Main {
  execute(){
  for(let i = 0;i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz "+i);
    }
    else if(i % 3 === 0){
      console.log("Fizz "+i);
    }
    else if(i % 5 === 0){
      console.log("Buzz "+i);
    }else{
      // if(i % 3 !== 0 && i % 5 !== 0){
        console.log("ups "+i);
      // }
    }

    
  }

    
  /*
  let number = prompt("Give me a number");
  if(number %3 === 0 && number %5===0){
    console.log("FizzBuzz");
  } else{
    if(number %5 === 0){
      console.log("Buzz");
    }else{
      if(number %3 === 0){
      alert("Fizz");
    } 
    }
    if(number %3 === 0){
      console.log("Fizz");
    } 
  } 
  */


   function sum(arr){
            let s = 0;
            for(let i= 0; i<arr.length; i++){
            s = s + arr[i];
        }
         console.log(s);
      }
      
      sum([2,5,8,10,100,3,6,20]);


      var math = 0;
      while (math <=11) {
          var result = math * 2; 
          console.log('2 x' + math + '=' + result);
          
      }

      var result = 0;

      for (var i = 0; i < sum.length; i++) {
          result = result + sum[i];
      
          console.log(result)
      }


      let weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"]

      for (let d = 0; d < weekdays.length; d++) {
          console.log (d+0 + ' ' + weekdays[d]);
          
          
      }
      
  }
}
new Main().execute();
