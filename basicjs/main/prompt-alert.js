 class Main {
     execute() {
         //this is one comment
        const number = prompt('Enter a number') // User provides 15
        // Check if number is divisible by 3, 5 or both
        if (number % 3 === 0) {
            alert('Fizz!')
        } else {
            alert('error, try again!');
        }

        const num = prompt('Enter a figure')

        if (num % 5 === 0) {
            alert('buzz');
        } else {
            alert('Your guess wrong!');
        }


        let number = prompt("Enter a Number");
        if (number % 3 === 0 && number % 5 === 0) {
            alert("Fizzbuzz!.");
//................................................



         let Question = prompt('What is your name?');
         alert('I am a Commandant!');


         let temperature = < 0;
         if (temperature === '< 0') {
             prompt('you need blanket!');
         } else {
             alert('You are fine...');
         }


         let age = 57;

         if (age === 57) {
             prompt('you are of legal age');

         } else {
             alert('you are not of legal age');
         }



         var numb1 = 1 + 1;
         var numb2 = 5 * 10;

         if (numb1 > numb2) {
             prompt('Sorry, your answer is incorrect. You can try again.');
         } else {
             alert('Congratulations, you answered correctly the first question');
         }


         let condition = correct;
         let structure = incorrect;

         if (condition == structure) {
             document.write('You are correct!')
         } else {
             document.write('Sorry you are incorrect!!');
         }

     }
 }
 new Main().execute();
