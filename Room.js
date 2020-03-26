module.exports = class Room {
	
	//constructs room with width and length
	constructor(width, length){
		this.width = width;//holds width
		this.length = length;//hold length
		this.arr = new Array(this.width)//a 2D array will represent the room
			for(var i=0;i<this.width; i++){
				this.arr[i] = new Array(this.length);
			}
		
		for(var j=0;j<this.width;j++){//the 2D array will be initialized with all 0's to signify 'no dirt'
			for(var k=0;k<this.length; k++){
				this.arr[j][k] = 0;
			}
		}
	}

	//getter for width
	get xMax(){
		return this.width;
	}

	//getter for length
	get yMax(){
		return this.length;
	}

	//this will fill array at point (x,y) with '1', signifying a dirt pile
	addDirt(x,y){
		this.arr[x][y] = 1; 
	}

	//this will fill array at point (x,y) with '0' signifying no dirt pile
	cleanDirt(x,y){
		this.arr[x][y] = 0;
	}

	//returns 0 or 1 to signify dirty or clean
	checkStatus(x,y){
		return this.arr[x][y];
	}
	
}