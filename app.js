/////////////////////////////////////////
    /////////////
    // get all elements

    var buttons = document.querySelectorAll('.btn-container button')
    var eachShape = document.getElementsByClassName('shape')
    
    /////////////

    /////////////
    // get each buttons
    
    buttons.forEach(function (item, index) {
        item.addEventListener('click', (event) => {

            // get all buttons to remove the active 
            for (i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active')
            }

            // get clicked button and add the active class
            item.classList.add('active')

            // get all departments to remove the active class
            // set one to show and the other not to show
            for (i = 0; i < eachShape.length; i++) {
                var textNotShow = eachShape[i]
                var textToShow = eachShape[index]
                textNotShow.classList.remove('active')
            }
            textToShow.classList.add('active')
    })
    })
    
    /////////////

    
    /////////////////////////////////////////



    
    /////////////////////////////////////////
    // the main 

    

    // random shapes generator 

    function randomShapes() {

        // circle generator

    const circle = (() => {

        // create the svg element
        const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        var r = cx = cy = Math.floor((Math.random() * 100) + 1);

        // set width and height
        svg1.setAttribute("width", r + cx);
        svg1.setAttribute("height", r + cy);

        // create a circle
        const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        cir1.setAttribute("cx", cx);
        cir1.setAttribute("cy", cy);
        cir1.setAttribute("r", r);
        cir1.setAttribute("fill", "white");

        // attach it to the container
        svg1.appendChild(cir1);

        // attach container to contentR
        document.getElementById("contentR").appendChild(svg1);

    })


    // rectangle generator

    const rect = (() => {

        // create the svg element
        const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        var height =  Math.floor((Math.random() * 100) + 1);
        var width =  Math.floor((Math.random() * 100) + 1);

        // set width and height
        svg2.setAttribute("width", width + 10);
        svg2.setAttribute("height", height + 10);

        // create a rectangle
        const rect1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect1.setAttribute("width", width);
        rect1.setAttribute("height", height);
        rect1.setAttribute("fill", "white");

        // attach it to the container
        svg2.appendChild(rect1);

        // attach container to contentR
        document.getElementById("contentR").appendChild(svg2);

        });

        
        // ellipse generator

        const ellipse = (() => {

            // create the svg element
            const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
            var rx = cx = Math.floor((Math.random() * 100) + 1);
            var ry = cy = Math.floor((Math.random() * 100) + 1);
    
            // set width and height
            svg3.setAttribute("width", rx + cx);
            svg3.setAttribute("height", ry + cy);
    
            // create an ellipse 
            const ellipse1 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            ellipse1.setAttribute("rx", rx);
            ellipse1.setAttribute("ry", ry);
            ellipse1.setAttribute("cx", cx);
            ellipse1.setAttribute("cy", cy);
            ellipse1.setAttribute("fill", "blue");
    
            // attach it to the container
            svg3.appendChild(ellipse1);
    
            // attach container to contentR
            document.getElementById("contentR").appendChild(svg3);
    
            });


            // square generator

                const square = (() => {

            // create the svg element
            const svg4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
            var height = width = Math.floor((Math.random() * 100) + 1);
    
            // set width and height
            svg4.setAttribute("width", width + 10);
            svg4.setAttribute("height", height + 10);
    
            // create a square
            const square1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            square1.setAttribute("width", width);
            square1.setAttribute("height", height);
            square1.setAttribute("fill", "yellow");
    
            // attach it to the container
            svg4.appendChild(square1);
    
            // attach container to contentR
            document.getElementById("contentR").appendChild(svg4);
    
            });


            // triangle generator

            const triangle = (() => {

                // create the svg element
                const svg5 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                
                var points = ''
                for (i = 0; i < 3; i++) {
                  var x = Math.floor((Math.random() * 150) + 1);
                  var y = Math.floor((Math.random() * 150) + 1);
                  var point = `${x},${y}`
                  points = points + ' ' + point
                }
        
                // set width and height
                svg5.setAttribute("width", '150');
                svg5.setAttribute("height", '150');
                svg5.setAttribute("color", 'white');
        
                // create a triangle
                const triangle1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                triangle1.setAttribute("points", points);
        
                // attach it to the container
                svg5.appendChild(triangle1);
        
                // attach container to contentR
                document.getElementById("contentR").appendChild(svg5);
        
                });

        // get the addBew button
        const addNewR = document.getElementById('addNewR')

        // event listener for the functionality of the addNew button
        addNewR.addEventListener('click', () => {

            // get the input value 
          var shapeName = document.getElementById('random-input')

          if (shapeName.value === 'circle') {
              circle()
          }
          else if (shapeName.value === 'rectangle') {
              rect()
          }
          else if (shapeName.value === 'ellipse') {
              ellipse()
          }
          else if (shapeName.value === 'square') {
              square()
          }
          else if (shapeName.value === 'triangle') {
              triangle()
          }
        })

    }
    randomShapes()

    

        // perfect shapes generator

        
        function perfectShapes() {

            // rectangle

        const rect = (() => {

            // create the svg element
            const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
            var height =  Math.floor((Math.random() * (100 - 50 + 1)) + 50);
            var width = 2 * height
        
            // set width and height
            svg1.setAttribute("width", width + 10);
            svg1.setAttribute("height", height + 10);
        
            // create a rectangle
            const rect2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect2.setAttribute("width", width);
            rect2.setAttribute("height", height);
            rect2.setAttribute("fill", "blue");
        
            // attach it to the container
            svg1.appendChild(rect2);
        
            // attach container to contentP
            document.getElementById("contentP").appendChild(svg1);
        
            });


            
    const circle = (() => {

        // create the svg element
        const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        var r = cx = cy = Math.floor((Math.random() * (100 - 50 + 1)) + 50);

        // set width and height
        svg2.setAttribute("width", r + cx);
        svg2.setAttribute("height", r + cy);

        // create a circle
        const cir2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        cir2.setAttribute("cx", cx);
        cir2.setAttribute("cy", cy);
        cir2.setAttribute("r", r);
        cir2.setAttribute("fill", "white");

        // attach it to the container
        svg2.appendChild(cir2);

        // attach container to contentP
        document.getElementById("contentP").appendChild(svg2);

        })


        
            // square generator

            const square = (() => {

                // create the svg element
                const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
                var height = width = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
        
                // set width and height
                svg3.setAttribute("width", width + 10);
                svg3.setAttribute("height", height + 10);
        
                // create a square
                const square2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                square2.setAttribute("width", width);
                square2.setAttribute("height", height);
                square2.setAttribute("fill", "yellow");
        
                // attach it to the container
                svg3.appendChild(square2);
        
                // attach container to contentP
                document.getElementById("contentP").appendChild(svg3);
        
                });


                const ellipse = (() => {

                    // create the svg element
                    const svg4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              
                    var rx = cx = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                    var ry = cy = rx / 2
              
                    // set width and height
                    svg4.setAttribute("width", rx + cx);
                    svg4.setAttribute("height", ry + cy);
              
                    // create an ellipse
                    const ellipse2 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                    ellipse2.setAttribute("rx", rx);
                    ellipse2.setAttribute("ry", ry);
                    ellipse2.setAttribute("cx", cx);
                    ellipse2.setAttribute("cy", cy);
                    ellipse2.setAttribute("fill", "blue");
              
                    // attach it to the container
                    svg4.appendChild(ellipse2);
              
                    // attach container to contentP
                    document.getElementById("contentP").appendChild(svg4);
              
                    });


                    const triangle = (() => {

                        // create the svg element
                        const svg5 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    
                          var x1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                          var y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                          var point1 = `${x1},${y1}`
                    
                          var x2 = x1 - x1
                          var y2 = y1 * 2
                          var point2 = `${x2},${y2}`
                          
                          var x3 = x1 * 2
                          var y3 = y2
                          var point3 = `${x3},${y3}`

                          points = `${point1} ${point2} ${point3}`
                    
                        // set width and height
                        svg5.setAttribute("width", x3);
                        svg5.setAttribute("height", y2);
                    
                        // create a triangle
                        const triangle2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                        triangle2.setAttribute("points", points);
                    
                        // attach it to the container
                        svg5.appendChild(triangle2);
                    
                        // attach container to contentP
                        document.getElementById("contentP").appendChild(svg5);
                    
                        });


                        const pentagon = (() => {

                            // create the svg element
                            const svg6 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            
                              var x1 = y1 = Math.floor((Math.random() * (80 - 40 + 1)) + 40);
                              var point1 = `${x1},${y1}`
                            
                              var x2 = x1 - x1
                              var y2 = y1 * 2
                              var point2 = `${x2},${y2}`
                              
                              var x3 = x2
                              var y3 = y1 * 3
                              var point3 = `${x3},${y3}`
                            
                              var x4 = x1 * 2
                              var y4 = y3
                              var point4 = `${x4},${y4}`
                            
                              var x5 = x4
                              var y5 = y2
                              var point5 = `${x5},${y5}`
                            
                              points = `${point1} ${point2} ${point3} ${point4} ${point5}`
                            
                            // set width and height
                            svg6.setAttribute("width", x4);
                            svg6.setAttribute("height", y4);
                            svg6.setAttribute("fill", 'lime');
                            
                            // create a pentagon
                            const pentagon1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                            pentagon1.setAttribute("points", points);
                            
                            // attach it to the container
                            svg6.appendChild(pentagon1);
                            
                            // attach container to contentP
                            document.getElementById("contentP").appendChild(svg6);
                            
                            });


                            const hexagon = (() => {

                                // create the svg element
                                const svg7 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                
                                  var x1 = y1 = Math.floor((Math.random() * (50 - 30 + 1)) + 30);
                                  var point1 = `${x1},${y1}`
                                
                                  var x2 = x1 - x1
                                  var y2 = y1 + y1
                                  var point2 = `${x2},${y2}`
                                  
                                  var x3 = x2
                                  var y3 = y2 + y1
                                  var point3 = `${x3},${y3}`
                                
                                  var x4 = x3 + x1
                                  var y4 = y3 + y1
                                  var point4 = `${x4},${y4}`
                                
                                  var x5 = x4 + x1
                                  var y5 = y3
                                  var point5 = `${x5},${y5}`
                                
                                  var x6 = x5
                                  var y6 = y2
                                  var point6 = `${x6},${y6}`
                                
                                  points = `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`
                                
                                // set width and height
                                svg7.setAttribute("width", x5);
                                svg7.setAttribute("height", y4);
                                svg7.setAttribute("fill", 'lime');
                                
                                // create a  hexagon
                                const hexagon1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                hexagon1.setAttribute("points", points);
                                
                                // attach it to the container
                                svg7.appendChild(hexagon1);
                                
                                // attach container to contentP
                                document.getElementById("contentP").appendChild(svg7);
                                
                                });

                                const parallelogram = (() => {

                                    // create the svg element
                                    const svg8 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                    
                                      var x1 = y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                                      var point1 = `${x1},${y1}`
                                    
                                    
                                      var x2 = x1 - x1/2
                                      var y2 = y1 + y1
                                      var point2 = `${x2},${y2}`
                                      
                                      var x3 = x1 + x1
                                      var y3 = y2
                                      var point3 = `${x3},${y3}`
                                    
                                      var x4 = x3 + x1/2
                                      var y4 = y1
                                      var point4 = `${x4},${y4}`
                                    
                                      points = `${point1} ${point2} ${point3} ${point4}`
                                    console.log(points)
                                    
                                    // set width and height
                                    svg8.setAttribute("width", x4);
                                    svg8.setAttribute("height", y3);
                                    svg8.setAttribute("fill", 'brown');
                                    
                                    // create a parallelogram
                                    const parallelogram = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                    parallelogram.setAttribute("points", points);
                                    
                                    // attach it to the container
                                    svg8.appendChild(parallelogram);
                                    
                                    // attach container to contentP
                                    document.getElementById("contentP").appendChild(svg8);
                                    
                                    });


                                    const trapezium = (() => {

                                        // create the svg element
                                        const svg9 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                        
                                          var x1 = y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                                          var point1 = `${x1},${y1}`
                                        
                                        
                                          var x2 = x1 - x1/3
                                          var y2 = y1 + y1
                                          var point2 = `${x2},${y2}`
                                          
                                          var x3 = x1 + x1 + x1/3
                                          var y3 = y2
                                          var point3 = `${x3},${y3}`
                                        
                                          var x4 = x3 - x1/3
                                          var y4 = y1
                                          var point4 = `${x4},${y4}`
                                        
                                          points = `${point1} ${point2} ${point3} ${point4}`
                                        console.log(points)
                                        
                                        // set width and height
                                        svg9.setAttribute("width", x3);
                                        svg9.setAttribute("height", y3);
                                        svg9.setAttribute("fill", 'white');
                                        
                                        // create a trapezium
                                        const trapezium = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                        trapezium.setAttribute("points", points);
                                        
                                        // attach it to the container
                                        svg9.appendChild(trapezium);
                                        
                                        // attach container to contentP
                                        document.getElementById("contentP").appendChild(svg9);
                                        
                                        });

                                        const rhombus = (() => {

                                            // create the svg element
                                            const svg10 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                            
                                              var x1 = y1 = Math.floor((Math.random() * (80 - 40 + 1)) + 40);
                                              var point1 = `${x1},${y1}`
                                            
                                              var x2 = x1 - x1
                                              var y2 = y1 * 2
                                              var point2 = `${x2},${y2}`
                                              
                                              var x3 = x1
                                              var y3 = y1 * 3
                                              var point3 = `${x3},${y3}`
                                            
                                              var x4 = x1 * 2
                                              var y4 = y2
                                              var point4 = `${x4},${y4}`
                                            
                                              points = `${point1} ${point2} ${point3} ${point4}`
                                            
                                            // set width and height
                                            svg10.setAttribute("width", x4);
                                            svg10.setAttribute("height", y3);
                                            svg10.setAttribute("fill", 'lime');
                                            // svg10.setAttribute("fillRule", 'evenodd');
                                            
                                            // create a rhombus
                                            const rhombus1 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                            rhombus1.setAttribute("points", points);
                                            
                                            // attach it to the container
                                            svg10.appendChild(rhombus1);
                                            
                                            // attach container to contentP
                                            document.getElementById("contentP").appendChild(svg10);
                                            
                                            });



        // get the addNew button
        const addNewP = document.getElementById('addNewP')

        // event listener for the functionality of the addNew button
        addNewP.addEventListener('click', () => {

            // get the input value 
          var shapeName = document.getElementById('perfect-input')
          
          if (shapeName.value === 'circle') {
              circle()
          }
          else if (shapeName.value === 'rectangle') {
              rect()
          }
          else if (shapeName.value === 'ellipse') {
              ellipse()
          }
          else if (shapeName.value === 'square') {
              square()
          }
          else if (shapeName.value === 'triangle') {
              triangle()
          }
          else if (shapeName.value === 'pentagon') {
              pentagon()
          }
          else if (shapeName.value === 'hexagon') {
              hexagon()
          }
          else if (shapeName.value === 'parallelogram') {
              parallelogram()
          }
          else if (shapeName.value === 'trapezium') {
              trapezium()
          }
          else if (shapeName.value === 'rhombus') {
              rhombus()
          }
        })

        }
        perfectShapes()


        function customShapes() {


              // rectangle

        const rect = (() => {

            // create the svg element
            const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
            var height =  Math.floor((Math.random() * (100 - 50 + 1)) + 50);
            var width = 2 * height
        
            var colorInput = document.getElementById('color-input')
            var strokeColorInput = document.getElementById('stroke-color-input')
            var strokeWidthInput = document.getElementById('stroke-width-input')


            // set width and height
            svg1.setAttribute("width", width + 10);
            svg1.setAttribute("height", height + 10);
        
            // create a rectangle
            const rect3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect3.setAttribute("width", width);
            rect3.setAttribute("height", height);
            rect3.setAttribute("x", height);
            rect3.setAttribute("y", height);
            rect3.setAttribute("fill", colorInput.value);
            rect3.setAttribute("stroke", strokeColorInput.value);
            rect3.setAttribute("stroke-width", strokeWidthInput.value);
        
            // attach it to the container
            svg1.appendChild(rect3);
        
            // attach container to contentP
            document.getElementById("contentC").appendChild(svg1);
        
            });
            rect()


            const circle = (() => {

                // create the svg element
                const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

                var r = cx = cy = Math.floor((Math.random() * 100) + 1);
        
                var colorInput = document.getElementById('color-input')
                var strokeColorInput = document.getElementById('stroke-color-input')
                var strokeWidthInput = document.getElementById('stroke-width-input')

                // set width and height
                svg2.setAttribute("width", r + cx + 20);
                svg2.setAttribute("height", r + cy + 20);
        
                // create a circle
                const cir1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                cir1.setAttribute("cx", cx + 10);
                cir1.setAttribute("cy", cy + 10);
                cir1.setAttribute("r", r);
                cir1.setAttribute("fill", colorInput.value);
                cir1.setAttribute("stroke", strokeColorInput.value);
                cir1.setAttribute("stroke-width", strokeWidthInput.value);
        
                // attach it to the container
                svg2.appendChild(cir1);
        
                // attach container to contentR
                document.getElementById("contentC").appendChild(svg2);
        
            })


            // square generator

            const square = (() => {

                // create the svg element
                const svg3 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        
                var height = width = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
        
                var colorInput = document.getElementById('color-input')
                var strokeColorInput = document.getElementById('stroke-color-input')
                var strokeWidthInput = document.getElementById('stroke-width-input')

                // set width and height
                svg3.setAttribute("width", width + 25);
                svg3.setAttribute("height", height + 25);
        
                // create a square
                const square3 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                square3.setAttribute("width", width);
                square3.setAttribute("height", height);
                square3.setAttribute("x", 10);
                square3.setAttribute("y", 10);
                square3.setAttribute("fill", colorInput.value)
                square3.setAttribute("stroke", strokeColorInput.value)
                square3.setAttribute("stroke-width", strokeWidthInput.value)
        
                // attach it to the container
                svg3.appendChild(square3);
        
                // attach container to contentP
                document.getElementById("contentC").appendChild(svg3);
        
                });


                const ellipse = (() => {

                    // create the svg element
                    const svg4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              
                    var rx = cx = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                    var ry = cy = rx / 2
              
                    var colorInput = document.getElementById('color-input')
                    var strokeColorInput = document.getElementById('stroke-color-input')
                    var strokeWidthInput = document.getElementById('stroke-width-input')


                    // set width and height
                    svg4.setAttribute("width", rx + cx + 20);
                    svg4.setAttribute("height", ry + cy + 20);
              
                    // create an ellipse
                    const ellipse3 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                    ellipse3.setAttribute("rx", rx);
                    ellipse3.setAttribute("ry", ry);
                    ellipse3.setAttribute("cx", cx + 10);
                    ellipse3.setAttribute("cy", cy + 10);
                    ellipse3.setAttribute("fill", colorInput.value);
                    ellipse3.setAttribute("stroke", strokeColorInput.value);
                    ellipse3.setAttribute("stroke-width", strokeWidthInput.value);
              
                    // attach it to the container
                    svg4.appendChild(ellipse3);
              
                    // attach container to contentP
                    document.getElementById("contentC").appendChild(svg4);
              
                    });


                    const triangle = (() => {

                        // create the svg element
                        const svg5 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    
                          var x1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                          var y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                          var point1 = `${x1},${y1}`
                    
                          var x2 = x1 - x1 + 10
                          var y2 = y1 * 2 - 10
                          var point2 = `${x2},${y2}`
                          
                          var x3 = x1 * 2 - 10
                          var y3 = y2
                          var point3 = `${x3},${y3}`

                          points = `${point1} ${point2} ${point3}`
                    
                          var colorInput = document.getElementById('color-input')
                          var strokeColorInput = document.getElementById('stroke-color-input')
                          var strokeWidthInput = document.getElementById('stroke-width-input')


                        // set width and height
                        svg5.setAttribute("width", x3 + 30);
                        svg5.setAttribute("height", y2 + 30);
                    
                        // create a triangle
                        const triangle3 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                        triangle3.setAttribute("points", points);
                        triangle3.setAttribute("fill", colorInput.value);
                        triangle3.setAttribute("stroke", strokeColorInput.value);
                        triangle3.setAttribute("stroke-width", strokeWidthInput.value);
                    
                        // attach it to the container
                        svg5.appendChild(triangle3);
                    
                        // attach container to contentP
                        document.getElementById("contentC").appendChild(svg5);
                    
                        });


                        const pentagon = (() => {

                            // create the svg element
                            const svg6 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            
                              var x1 = y1 = Math.floor((Math.random() * (80 - 40 + 1)) + 40);
                              var point1 = `${x1},${y1}`
                            
                              var x2 = x1 - x1 + 10
                              var y2 = y1 * 2
                              var point2 = `${x2},${y2}`
                              
                              var x3 = x2
                              var y3 = y1 * 3
                              var point3 = `${x3},${y3}`
                            
                              var x4 = x1 * 2 - 10
                              var y4 = y3
                              var point4 = `${x4},${y4}`
                            
                              var x5 = x4
                              var y5 = y2
                              var point5 = `${x5},${y5}`
                            
                              var colorInput = document.getElementById('color-input')
                              var strokeColorInput = document.getElementById('stroke-color-input')
                              var strokeWidthInput = document.getElementById('stroke-width-input')


                              points = `${point1} ${point2} ${point3} ${point4} ${point5}`
                            
                            // set width and height
                            svg6.setAttribute("width", x4 + 30);
                            svg6.setAttribute("height", y4 + 30);
                            svg6.setAttribute("fill", colorInput.value);
                            svg6.setAttribute("stroke", strokeColorInput.value);
                            svg6.setAttribute("stroke-width", strokeWidthInput.value);
                            
                            // create a pentagon
                            const pentagon2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                            pentagon2.setAttribute("points", points);
                            
                            // attach it to the container
                            svg6.appendChild(pentagon2);
                            
                            // attach container to contentP
                            document.getElementById("contentC").appendChild(svg6);
                            
                            });


                            const hexagon = (() => {

                                // create the svg element
                                const svg7 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                
                                  var x1 = y1 = Math.floor((Math.random() * (60 - 30 + 1)) + 30);
                                  var point1 = `${x1},${y1}`
                                
                                  var x2 = x1 - x1 + 10
                                  var y2 = y1 + y1
                                  var point2 = `${x2},${y2}`
                                  
                                  var x3 = x2
                                  var y3 = y2 + y1
                                  var point3 = `${x3},${y3}`
                                
                                  var x4 = x3 + x1 - 10
                                  var y4 = y3 + y1
                                  var point4 = `${x4},${y4}`
                                
                                  var x5 = x4 + x1 - 10
                                  var y5 = y3
                                  var point5 = `${x5},${y5}`
                                
                                  var x6 = x5
                                  var y6 = y2
                                  var point6 = `${x6},${y6}`
                                
                                  points = `${point1} ${point2} ${point3} ${point4} ${point5} ${point6}`
                                
                                  var colorInput = document.getElementById('color-input')
                                  var strokeColorInput = document.getElementById('stroke-color-input')
                                  var strokeWidthInput = document.getElementById('stroke-width-input')    


                                // set width and height
                                svg7.setAttribute("width", x5 + 30);
                                svg7.setAttribute("height", y4 + 30);
                                svg7.setAttribute("fill", colorInput.value);
                                svg7.setAttribute("stroke", strokeColorInput.value);
                                svg7.setAttribute("stroke-width", strokeWidthInput.value);
                                
                                // create a  hexagon
                                const hexagon2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                hexagon2.setAttribute("points", points);
                                
                                // attach it to the container
                                svg7.appendChild(hexagon2);
                                
                                // attach container to contentP
                                document.getElementById("contentC").appendChild(svg7);
                                
                                });

                                const parallelogram = (() => {

                                    // create the svg element
                                    const svg8 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                    
                                      var x1 = y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                                      var point1 = `${x1},${y1}`
                                    
                                    
                                      var x2 = x1 - x1/2
                                      var y2 = y1 + y1
                                      var point2 = `${x2},${y2}`
                                      
                                      var x3 = x1 + x1
                                      var y3 = y2
                                      var point3 = `${x3},${y3}`
                                    
                                      var x4 = x3 + x1/2
                                      var y4 = y1
                                      var point4 = `${x4},${y4}`
                                    
                                      points = `${point1} ${point2} ${point3} ${point4}`

                                      var colorInput = document.getElementById('color-input')
                                      var strokeColorInput = document.getElementById('stroke-color-input')
                                      var strokeWidthInput = document.getElementById('stroke-width-input')    

                                    
                                    // set width and height
                                    svg8.setAttribute("width", x4 + 10);
                                    svg8.setAttribute("height", y3 + 10);
                                    svg8.setAttribute("fill", colorInput.value);
                                    svg8.setAttribute("stroke", strokeColorInput.value);
                                    svg8.setAttribute("stroke-width", strokeWidthInput.value);
                                    
                                    // create a parallelogram
                                    const parallelogram2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                    parallelogram2.setAttribute("points", points);
                                    
                                    // attach it to the container
                                    svg8.appendChild(parallelogram2);
                                    
                                    // attach container to contentP
                                    document.getElementById("contentC").appendChild(svg8);
                                    
                                    });


                                    const trapezium = (() => {

                                        // create the svg element
                                        const svg9 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                        
                                          var x1 = y1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                                          var point1 = `${x1},${y1}`
                                        
                                        
                                          var x2 = x1 - x1/3
                                          var y2 = y1 + y1
                                          var point2 = `${x2},${y2}`
                                          
                                          var x3 = x1 + x1 + x1/3
                                          var y3 = y2
                                          var point3 = `${x3},${y3}`
                                        
                                          var x4 = x3 - x1/3
                                          var y4 = y1
                                          var point4 = `${x4},${y4}`
                                        
                                          points = `${point1} ${point2} ${point3} ${point4}`
                                        
                                          var colorInput = document.getElementById('color-input')
                                          var strokeColorInput = document.getElementById('stroke-color-input')
                                          var strokeWidthInput = document.getElementById('stroke-width-input')    


                                        // set width and height
                                        svg9.setAttribute("width", x3 + 10);
                                        svg9.setAttribute("height", y3 + 10);
                                        svg9.setAttribute("fill", colorInput.value);
                                        svg9.setAttribute("stroke", strokeColorInput.value);
                                        svg9.setAttribute("stroke-width", strokeWidthInput.value);
                                        
                                        // create a trapezium
                                        const trapezium2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                        trapezium2.setAttribute("points", points);
                                        
                                        // attach it to the container
                                        svg9.appendChild(trapezium2);
                                        
                                        // attach container to contentP
                                        document.getElementById("contentC").appendChild(svg9);
                                        
                                        });

                                        const rhombus = (() => {

                                            // create the svg element
                                            const svg10 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                            
                                              var x1 = Math.floor((Math.random() * (100 - 50 + 1)) + 50);
                                              y1 = x1 - 10
                                              var point1 = `${x1},${y1}`
                                            
                                              var x2 = x1 - x1 + 10
                                              var y2 = y1 * 2 
                                              var point2 = `${x2},${y2}`
                                              
                                              var x3 = x1
                                              var y3 = y1 * 3
                                              var point3 = `${x3},${y3}`
                                            
                                              var x4 = x1 * 2 - 10
                                              var y4 = y2
                                              var point4 = `${x4},${y4}`
                                            
                                              points = `${point1} ${point2} ${point3} ${point4}`
                                            
                                              var colorInput = document.getElementById('color-input')
                                              var strokeColorInput = document.getElementById('stroke-color-input')
                                              var strokeWidthInput = document.getElementById('stroke-width-input')    


                                            // set width and height
                                            svg10.setAttribute("width", x4 + 30);
                                            svg10.setAttribute("height", y3 +30);
                                            svg10.setAttribute("fill", colorInput.value);
                                            svg10.setAttribute("stroke", strokeColorInput.value);
                                            svg10.setAttribute("stroke-width", strokeWidthInput.value);
                                            
                                            // create a rhombus
                                            const rhombus2 = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
                                            rhombus2.setAttribute("points", points);
                                            
                                            // attach it to the container
                                            svg10.appendChild(rhombus2);
                                            
                                            // attach container to contentP
                                            document.getElementById("contentC").appendChild(svg10);
                                            
                                            });
                                            rhombus()



        // get the addNew button
        const addNewC = document.getElementById('addNewC')

        // event listener for the functionality of the addNew button
        addNewC.addEventListener('click', () => {

            // get the input value 
          var shapeName = document.getElementById('custom-input')
          
          if (shapeName.value === 'circle') {
              circle()
          }
          else if (shapeName.value === 'rectangle') {
              rect()
          }
          else if (shapeName.value === 'ellipse') {
              ellipse()
          }
          else if (shapeName.value === 'square') {
              square()
          }
          else if (shapeName.value === 'triangle') {
              triangle()
          }
          else if (shapeName.value === 'pentagon') {
              pentagon()
          }
          else if (shapeName.value === 'hexagon') {
              hexagon()
          }
          else if (shapeName.value === 'parallelogram') {
              parallelogram()
          }
          else if (shapeName.value === 'trapezium') {
              trapezium()
          }
          else if (shapeName.value === 'rhombus') {
              rhombus()
          }
        })

        }
        customShapes()
    /////////////////////////////////////////