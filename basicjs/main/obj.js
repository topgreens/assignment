function Main() {
	this.execute = function (){ 
		//Exercise I
		//The object album will have a title, an author, the label company name, the release year and an array of Songs.

		let musicAlbums = {

			author: 'Tuface idibia',
			title: 'Grass to Grace',
			labelName: 'hypertek',
			releasedYear: 2006,
			songs: ['our money', 'true love', 'gaga shufle', 'african queen', 'amaka', 'holy holy']
			
		};
	    /*	for(let fav in musicAlbums){
			console.log(musicAlbum[fav]);
	    }*/
		// Exercise II.. Create an object with the content of your favorite Album

		const favrAlbum = {
			artist : 'Kenny Rogers',
			favoriteAlbum : 'Ticket to nowhere',
			contents : [
				          'sleep comes easy', 
									'ruben james', 
									'tell it all brother', 
									'new design', 
									'love woman', 
									'trying just as hard', 
									'something burning'
								],
      release : {
				 date : 14,
				 month : 'june',
				 year : 2014,	
			},
			artistName : function() {
				return 'Kenny Rogers greatest hits of all time';
			}
	};

	console.log(favrAlbum);
	

		/*Exercise III.. Creates a function named "showInfo" that will get an album as parameter and will print in console 
		something like the album name and all the songs
		*/
    
	   function showInfo(favrAlbum) {
			 
			let favrAlbum = ' ';
			return this.favoriteAlbum + " " + this.contents;
		 }
  console.log(showInfo(favrAlbum));
	}
}
new Main().execute();