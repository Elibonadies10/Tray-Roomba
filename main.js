const fs = require('fs');//for reading .txt file
var Room = require('./Room.js');//Room class
var Roomba = require('./Roomba.js');//Roomba class


// declare variables for room dimensions, roomba location, dirt location & path
var roomWidth;
var roomHeight;
var roombaX;
var roombaY;
var path;
var fileAsArray = [];
var roomSize = [];
var roombaLocation = [];
var dirtArray = [];
var dirtLocation = [];


//read the file into roomba_file
fs.readFile('./input.txt', 'utf8', function (err,roombaFile) {
  if (err) {
    return console.log(err);
  }

  fileAsArray = roombaFile.split('\n');  //split whole file at line breaks;put in array

  for (var i = 0; i < fileAsArray.length; i++) {  
    if (i == 0){                            //first line in file is room size
        roomSize = fileAsArray[0].split(' ');
        roomWidth = Number(roomSize[0]);      //need to change string to number
        roomHeight = Number(roomSize[1]);
    }
    if (i == 1){                            //second line in file is roomba location
        roombaLocation = fileAsArray[1].split(' ');
        roombaX = Number(roombaLocation[0]);
        roombaY = Number(roombaLocation[1]);
    }
    // Get all dirt locations and store in a dirt_array
    if ((i > 1) && (i < fileAsArray.length - 1)){ 
        dirtArray.push(fileAsArray[i]);

    }
     //Last line in file is Roomba path
    if (i == fileAsArray.length - 1){ 
        path = fileAsArray[i];
    }
  } 

//tell user they input invalid coordinates if roomba is outside room
if(roombaX > roomWidth || roombaX < 0 || roombaY > roomHeight || roombaY < 0){
  console.log('Roomba is outside room, please enter valid coordinates')
}

// Create a room
var room1 = new Room(roomWidth,roomHeight);

  //add dirt piles to room as x,y coordinates
for(var i=0; i<dirtArray.length; i++){
  dirtLocation = dirtArray[i].split(' ');
  dirtX = Number(dirtLocation[0]);
  dirtY = Number(dirtLocation[1]);
  if(dirtX > roomWidth || dirtX < 0 || dirtY > roomHeight || dirtY < 0){//tell user if dirt is outside room
  console.log('Dirt is outside room, please enter valid coordinates')
}
  room1.addDirt(dirtX, dirtY);
}

//create roomba
var roomba1 = new Roomba(roombaX, roombaY);


for(i=0; i<path.length-1; i++) {

    if (room1.checkStatus(roomba1.x, roomba1.y) == 1){//checks to see if there is dirt on current location
      roomba1.pickUpDirt();//if there is dirt we will add it to our count
      room1.cleanDirt(roomba1.x,roomba1.y);//we will 'clean' this dirt, so it is not double counted if we return
    }
    
    roomba1.move(path[i], roomWidth, roomHeight);//move to next spot

  }

console.log(roomba1.x, ',', roomba1.y); //output roomba position
console.log(roomba1.totalCount);//output amount of dirt piles picked up
});
