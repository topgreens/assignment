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

        var thegreetings = sayBye("Spanish:'adios' '<br/>' ", "English:'goodbye' '<br/>' ", "Arabic:'wadaeaan', '<br/>'");
        console.log(thegreetings);



        //Exercise III.

        function sayHi() {
            console.log('first function');
        }

        function sayBye() {
            console,log('second function');
        }

        function prev() {
            sayHi();
            sayBye();
        }
        prev();


        // Exercise IV.
        
       
function language(greetings) {
    const spanish = 'hola';
    const english = 'hi';
    const arabic = 'merhaba';

    if (greetings === 'spanish'){
        return spanish;
    }
    if (greetings === 'english') {
        return hi;
    }
    if (greetings === arabic) {
        return marhaaba;
    }
    else{
        alert('unsupported language')
    }
     
    
}
language('salut');
    }
}
new Main().execute();