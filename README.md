# gamejs

Tutorial with p5js library

# For add intellisense reference of p5js library

1. download p5js library
2. download p5.d.ts library
   https://github.com/processing/p5.js/files/1869124/p5.d.zip
3. put them in your project directory somewhere and add a reference to them in your sketch .js file, eg:
   `/// <reference path="./p5.global-mode.d.ts" />`

# tutorial Learn p5.js for Creative Coding – 5 Beginner Projects

https://www.youtube.com/watch?v=o5t7PxRJSXk

# The system coordinates is in the letf top corner of the canvas

(0,0)

# Matter js building blocks

1. Engine: powers the physics simulation
2. World: is the enviroment containing all objects, bodies, and contraints
3. Body: is an individual physical object in the simulation
4. Bodies: is a namespace to create specific types of bodies with present properties
5. Composite: is a collection of bodies and constraints managed as a single unit
6. Render: visualize the physics simulation
7. Runner: update the engine at fixed intervals
