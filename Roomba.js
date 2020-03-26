module.exports = class Roomba {
	
	//constructs roomba with initial starting position
	constructor(startX, startY) {
		
		this.curX = startX; // will track current horizontal location as it moves
		this.curY = startY;// will track current vertical location as it moves
		this.dirtCount = 0;// counts number of dirt piles that are picked up starting at zero
	}

	//getter for x
	get x() {
		return this.curX;
		} 

	//getter for y
	get y(){
		return this.curY;
	}
	
	//getter for count
	get totalCount(){
		return this.dirtCount;
	}

	//adds to dirt count
	pickUpDirt() {
		this.dirtCount++;
	}

	//changes x or y coordinate based on direction given and room constrictions
	move(direction, roomMaxX, roomMaxY){

	
		switch (direction){

			case 'E':
					if (this.curX+1<roomMaxX){
						this.curX++;
					}

			break;

			case 'W':
					if(this.curX-1>0){
						this.curX--;
					}
			break;

			case 'N':
					if(this.curY+1<roomMaxY){
						this.curY++;
					}
				
			break;

			case 'S':
					if(this.curY-1>0){
						this.curY--;
					}
			break;

		}
	}

	
}