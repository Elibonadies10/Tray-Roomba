# Tray-Roomba
This program that navigates a imaginary Roomba through an equally imaginary room, while removing piles of dirt in specific locations

The room will be of a particular length and width, and the roomba position will be represented as x,y coordinates, as well as the piles of dirts.

When the roomba 'drives' over a pile of dirt, the dirt will be vacuumed up.

The roomba will be instructed to move about the room following driving instructions as cardinal directions.  For example, E will move it right.

The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:
* The final hoover position (X, Y)
* The number of patches of dirt the robot cleaned up

To run this program you must feed it a .txt in the following format.  
    -The first line will be the  room dimensions (first the width coordinate, then the length coordinate).  
    -The second line will be the robots starting position, in cartesian coordinates (x-y).  
    -The following lines will be the positions of the dirt piles in (x,y) coordinates. 
    -The last line will be the path of the robot represented as a string of characters (in cardinal directions)

In order to run this code you must have node js downloaded on your terminal and as well as have the following files in the same directory, ‘Roomba.js’, ‘Room.js’ ‘main.js’ ‘input.txt’.

In your terminal, once you are on the correct directory, you will run the program by inputting "node main.js".
