class Main {
	execute() {

		// Exercise 7
		let colors = []; {
			colors.push('Red', 'Green', 'Blue');
			console.log(colors);
		}


		let colors = ['Red', 'Green', 'Blue']; {
			colors.splice(1);
		}
		console.log(colors);



		// Exercise 8, The sum of all ages
		
		let ages = [18, 19, 20, 51, 5, 25, 14, 31, 40, 26, 99];
		let sum = 0;
		for (let i = 0; i < ages.length; i++) {
			sum += ages[i];
		}
		console.log(sum);

         // Printing the sum of the odd and the even from 0-99).
		let ages = [18, 19, 20, 51, 5, 25, 14, 31, 40, 26, 99];

		for(let i = 2; i <=99; i++){
		 if(i % 2==0){
		  console.log(i + ' is Even ages');
		 } else{
		  console.log(i + ' is Odd ages');
		 }
		}

		//  the sum of the odd ages 
          
               let ages = [18, 19, 20, 51, 5, 25, 14, 31, 40, 26, 99];{
		   let odd = [19, 51, 5, 25, 31, 99]
		   let total = 0;
		   for (let i = 0; i < odd.length; i++)
		       total = total + odd[i];
		       console.log(total)

		   }



		// Exercise 9
		
		let colors1 = ["blue", "white"];
		let colors2 = ["green", "red"];

		for (let i = 0; i < colors1.length; i++) {
			colors2.push(colors1[i]);
		}
		console.log(colors2);

		let colors1 = ["blue", "white"];
		let colors2 = ["green", "red"];

		for (let i = 0; i < colors2.length; i++) {
			colors1.push(colors2[i]);
		}
		console.log(colors1)
	}
}
new Main().execute();
