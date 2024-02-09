// function draw() {
//     const ctx = document.getElementById("canvas").getContext("2d");
//     ctx.font = "48px serif";
//     ctx.textBaseline = "hanging";
//     ctx.strokeText("Hello world", 20, 100);

// }
// draw()

// // drawImage(image, x, y)


// // const img = new Image(); // Create new img element
// // img.src = "myImage.png"; // Set source path

// // function getMyVideo() {
// //     const canvas = document.getElementById("canvas");
// //     if (canvas.getContext) {
// //         const ctx = canvas.getContext("2d");

// //         return document.getElementById("myvideo");
// //     }
// // }
// // getMyVideo()

// function draw() {
//     const ctx = document.getElementById("canvas").getContext("2d");
//     const img = new Image();
//     img.onload = () => {
//         ctx.drawImage(img, 0, 0);
//         ctx.beginPath();
//         ctx.moveTo(30, 96);
//         ctx.lineTo(70, 66);
//         ctx.lineTo(103, 76);
//         ctx.lineTo(170, 15);
//         ctx.stroke();
//     };
//     img.src = "backdrop.png";
// }

// draw()

// // mine => Scaling
// function draw() {
//     const ctx = document.getElementById("canvas").getContext("2d");
//     const img = new Image();
//     img.onload = () => {
//         for (let i = 0; i < 4; i++) {
//             for (let j = 0; j < 3; j++) {
//                 ctx.drawImage(img, j * 50, i * 38, 50, 38);
//             }
//         }
//     };
//     img.src = "rhino.jpg";
// }

const addingLineBtn = document.getElementById('adding-line-btn');
addingLineBtn.addEventListener('click',activeAddingLine)

let canvas = new fabric.Canvas('canvas', {
    width: window.innerWidth,
    height: window.innerHeight,
})

function activeAddingLine (){
    console.log('handling');
    canvas.on('mouse:down',startAddingLine);
    canvas.on('mouse:move', startDrawingLine);
    canvas.on('mouse:up', stopDrawingLine);

    canvas.selection = false
}

let line
let mouseDown = false 

function startAddingLine (o){
    mouseDown = true
    let pointer = canvas.getPointer(o.e)
    line = new fabric.Line([pointer.x,pointer.y,pointer.x,pointer.y],{
        stroke: 'red',
        strokeWidth: 3,
    })

    canvas.add(line);
    canvas.requestRenderAll();
}
function startDrawingLine (o){
   if(mouseDown === true){
       let pointer = canvas.getPointer(o.e);

       line.set({
           x2: pointer.x,
           y2: pointer.y
       })
       canvas.requestRenderAll()
   }

}
function stopDrawingLine (){
    mouseDown = false
}
