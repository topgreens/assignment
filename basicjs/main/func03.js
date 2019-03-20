class Main {
    execute() {

        //Exercise I Paris, Madrid, Barcelona, London and  Berlin.

        let cities = ['Paris',
            'Madrid',
            'Barcelona',
            'London',
            'Berlin'
        ];

        // Exercise II.
        const cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function getCity(num) {
            return [num];
            let i = 0;
            for (let i = 0; i < cities.length; i++) {
                const num = num[i];
            }
        }
        console.log(cities[4]);
        getCity();

        // Execise III.

        const cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function countLetters(total) {
            return total;
        }
        console.log(cities[3].length);
        countLetters();


        // Exercise IV Paris, Madrid, Barcelona, London and  Berlin.
        const cityName = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function getCityInfo(info) {
            return info;

        }
        console.log(cityName[2].length)
        getCityInfo('Barcelona');

    }
}
new Main().execute();