# Z-ball

### Background and Overview

Z-ball is an arcade game where the player survives by zig-zagging through the path without falling into the water. The player's score will be determined based on the time they stay on the path.

### Functionality & MVP

- [ ] Use the spacebar to zig-zag
- [ ] Use the left mouse click to zig-zag
- [ ] A popup modal describing the rules of the game
- [ ] A production README

### Architecture and Technologies

The project will be implemented with the following technologies:

- `Javascript` for game logic

- `HTML5 Canvas` for game rendering

- `Webpack` to bundle js files

The following are the main scripts that will be implemented:

- `board.js`: this script will handle the logic for rendering the path and the water

- `ball.js `: this script will handle the logic for rendering the ball as it remains on the path

- `points.js`: this script will handle the logic for points - 100ms = 1 point

### Implementation Timeline

**Day 1**: 
- [ ] Setup all the files needed for Webpack (webpack.config.js, package.json)
- [ ] Write a basic entry file
- [ ] Complete path and background design

**Day 2**: 
- [ ] Complete ball rendering - falling off the edge
- [ ] Complete mouse-click/spacebar actions for zig-zagging

**Day 3**: 
- [ ] Complete points script (100ms is equivalent to 1 point)
- [ ] Complete any unfinished MVPs

**Weekend**:
- [ ] Complete any unfinished MVPs
- [ ] Do bonus features

### Bonus features
- [ ] Add options for ball types and colors
- [ ] Add items on the path in order to increase points
- [ ] Connect to a backend database to store player's high scores
- [ ] WebAudioAPI for sound generation, processing and control