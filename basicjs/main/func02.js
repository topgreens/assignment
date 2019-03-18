class Main {
    execute() {
        // Exercise I.
        function sayHi(spanish, english, arabic) {

            languages = spanish + english + arabic;

            return languages;
        }

        var thegreetings = sayHi("Spanish:'Hola'<br/>", "English:'Hi'<br/>", "Arabic:'Marhabaan',<br/>");
        console.log(thegreetings);


        // Exercise II.

        function sayBye(spanish, english, arabic) {

            greetings = spanish + english + arabic;

            return greetings;
        }

        var thegreetings = sayBye("Spanish:'adios'<br/>", "English:'goodbye'<br/>", "Arabic:'wadaeaan',<br/>");
        console.log(thegreetings);



        //Exercise III.

        function sayHi() {
            alert('first function');
        }

        function sayBye() {
            alert('second function');
        }

        function prev() {
            sayHi();
            sayBye();
        }
        prev('result1' && 'result2');


        // Exercise IV.

      

    }
}
new Main().execute();