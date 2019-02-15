# Zig Zag

### Background and Overview

[Zig Zag](https://miketu926.github.io/Z-Ball/ "Zig Zag") is an arcade game where the player survives by zig-zagging on the path without hitting the walls. The player's score will be determined based on the number of turns they make.

![alt text](https://s3.amazonaws.com/getstarted-dev/Screen+Shot+2019-02-15+at+5.51.19+PM.png "Zig Zag")

### Functionality & MVP

- [x] Use the spacebar to zig-zag
- [x] Use the left mouse click to zig-zag
- [x] Firebase DB for high scores with user name input
- [x] A production README

### Architecture and Technologies

The project will be implemented with the following technologies:

- `Javascript` for game logic

- `HTML5 Canvas` for game rendering

- `Webpack` to bundle js files

- `Firebase DB` to display high scores

The following main scripts will be implemented:

- `index.js` and `game.js`: these scripts will handle the logic for rendering the path and the water

- `left_zig.js`, `right_zig.js` and `start_lane.js` these scripts will handle generating the path

- `player.js `: this script will handle the logic for rendering the ball as it remains on the path

- `util.js`: this script will handle the AJAX calls to Firebase DB

### Implementation Timeline

**Day 1**: 
- [x] Setup all the files needed for Webpack (webpack.config.js, package.json)
- [x] Write a basic entry file
- [x] Complete path and background design

**Day 2**: 
- [x] Complete ball rendering - falling off the edge
- [x] Complete mouse-click/spacebar actions for zig-zagging

**Day 3**: 
- [x] Complete points - each player action is equal to one point
- [x] Complete any unfinished MVPs

**Weekend**:
- [x] Complete any unfinished MVPs
- [ ] Do bonus features

### Bonus features
- [ ] Add options for ball types and colors
- [ ] Add items on the path in order to increase points
- [x] Connect to a backend database to store player's high scores
- [ ] WebAudioAPI for sound generation, processing and control