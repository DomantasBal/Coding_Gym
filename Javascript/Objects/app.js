///////////////////////////////
// Factory functions        //
/////////////////////////////


function circle (radius) {
    return {
        radius,
        draw (){
            console.log("circleee");
        }
        };
}
  
  const circle1 = circle(123);
  circle1.draw();
  console.log(circle1);
  

///////////////////////////////
// Objects   - Method       //
/////////////////////////////

// const circle = {
//     radius: 1,
//     location: {
//         x:1,
//         y:1
//     },
//     invisible: true,

//     draw: function (){
//         console.log("circle");
//     }
//     };

//     circle.draw();
