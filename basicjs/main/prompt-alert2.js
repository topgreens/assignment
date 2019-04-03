class Main {
    execute() {
        //this is one comment
        let number = prompt("Enter a Number");
        if (number % 3 === 0 && number % 5 === 0) {
            alert("Fizzbuzz!.");

        }else{
           if (number %5 ===0){
               console.log('Buzz');
           }
        }




//............................................
        let character = 'actor';
        let answer = 'Jack Sparrow'

        if (character === 'actor') {
            prompt("What is the name of the character played by Johnny Depp in the Pirates of the Caribbean film series?");
        }
        console.log('answer')
        alert('Jack Sparrow..');

        let ques = 'How many books has the Harry Potter saga';
        let ans = 7;
        prompt('ques');

        console.log("Hello world");
        alert('ans');
    }
}
new Main().execute();
