class Main {
    execute() {

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