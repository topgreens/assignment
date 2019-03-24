class Main {
    execute() {

        // Code search
        var billPreTip = 10;
        var tipPercent = 0.15; // Can be changed

        var billTip = billPreTip * tipPercent;
        var receipt = 'Meal: ' + billPreTip + ' Tip: ' + billTip +
            ' Total: ' + (billPreTip + billTip);

        console.log(receipt);
        // Can be changed is the comment, billPreTip, tipPercent, billTip & receipt are the variables

        function parrotFacts() {
            console.log('Some parrot species can live for over 80 years');
            console.log('Kakapos are a critically endangered flightless parrot');
        }
        parrotFacts();

        //  Arguments

        function callKitten(kittenName) {
            console.log('Come here, ' + kittenName + '!');
        }

        callKitten('Fluffy'); // outputs 'Come here, Fluffy!'

        function addNumbers(a, b) {
            console.log(a + b);
        }

        addNumbers(5, 7); // outputs 12
        addNumbers(9, 12); // outputs 21



        function addOne(num) {
            var newNumber = num + 1;
            console.log('You now have ' + newNumber);
        }

        // Declare variables
        var numberOfKittens = 5;
        var numberOfPuppies = 4;

        // Use them in functions
        addOne(numberOfKittens);
        addOne(numberOfPuppies);


        /* Write a simple program to combine a firstname and a lastname inside a function. 
        Then update the function to accept a first and lastname as arguments.*/


        function myFunc(firstName, lastName) {

            return firstName + lastName;
        }
        console.log(myFunc('Mann', ' Easthope'));


        // Return values

        function square(num) {
            return num * num;
        }

        console.log(square(4)); // outputs '16'

        var squareOfFive = square(5); // squareOfFive equals '25'


        // Slide Exercise. Make a variable called "temperature". Write some code that tells you to put on a coat if it is below 50 degrees.

        let temperature = 50;

        if (temperature <= 45) {
            console.log("Wear a coat! ");
        } else if (temperature <= 30) {
            console.log("You need a rain jacket and a hat.");
        } else if (temperature <= 0) {
            console.log("stay inside.");
        } else {
            console.log("Wear what you have on.");
        }



        // Exercise II, Build an array, build a function that uses this array, return a result, and call it. 


        let donuts = [{
                id: 1,
                item: 'chocolate frosted',
                isAvailable: true

            },
            {
                id: 2,
                item: 'Boston cream',
                isAvailable: true

            },
            {
                id: 3,
                item: 'sprinkled',
                isAvailable: false

            },
            {
                id: 4,
                item: 'glazed',
                isAvailable: true

            },
            {
                id: 5,
                item: 'coconut',
                isAvailable: true

            },
            {
                id: 6,
                item: 'powdered',
                isAvailable: false

            },

        ];

        donuts.forEach(function (donut) {
            console.log(donut.item);
        });


        const donutAvailable = donuts.filter(function (donut) {
            return donut.isAvailable === true;
        });
        console.log(donutAvailable);


    }
}
new Main().execute();