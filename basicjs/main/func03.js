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

        function getCity(idx) {
            return cities [idx];
        }
        console.log(cities[4]);
        getCity();

        // Execise III.

        const cities = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function countLetters(numb) {
            return numb;
        }
        console.log(cities[3].length);
        countLetters(3);
        /*
        function countLetter(pos){
            let city = cities[pos];
            return city.length;
        } 
        countLetter(3);
        */ 


        // Exercise IV Paris, Madrid, Barcelona, London and  Berlin.
        const cityName = ['Paris', 'Madrid', 'Barcelona', 'London', 'Berlin'];

        function getCityInfo(info) {
            return info;

        }
        console.log(cityName[2].length)
        getCityInfo('Barcelona');

        /*
        function getCityInfo(info){
          let numb = cityName[info];
          console.log('cityName' + pos + number of letter + )  
        }
        getCityInfo();
        */

    }
}
new Main().execute();