let myFunc;
var next_x = [0,0,0];
var next_s = [0,0,0];
var z = 75; // zoom factor in pixels
var res = 10; // steps for anim

function setup() {
  createCanvas(860, 640);
  background(20);
  //noLoop();

  fetch('/func', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        // create a circle at the x, y coords
        myFunc = new Func(data.xs, data.ys, data.x, data.xi, data.xf);
        next_x[0] = data.x;
        next_x[1] = data.xi;
        next_x[2] = data.xf;
        console.log(data);
        if(myFunc) myFunc.draw(z);
      }
      else {
        myFunc = new Func([0,1], [0,1], 0, 0, 1);
        if(myFunc) myFunc.draw(z);
      }
    })
    .catch(function(error) {
      console.log(error);
    });

  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);
}

function draw() {
  background(20);
  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);
  if(myFunc) {
    myFunc.draw(z);
    if (next_x[0] != myFunc.x) {
      myFunc.updatex(next_s);
    }
  }
}
// function mouseWheel(event) {
    
//   // Change the zoom value according
//   // to the scroll delta value
//   z += event.delta;
// }
function mousePressed() {

  fetch('/func', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          next_x[0] = data.x;
          next_x[1] = data.xi;
          next_x[2] = data.xf;
          next_s[0] = (data.x-myFunc.x)/res;
          next_s[1] = (data.xi-myFunc.xi)/res;
          next_s[2] = (data.xf-myFunc.xf)/res;
          //console.log(data);
        }
      }
      else {
        myFunc = new Func([0,1], [0,1], 0, 0, 1);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  //redraw();
}

// example put request
//   fetch('/circle', {
//     method: 'PUT',
//     body: JSON.stringify({x: newX, y: newY}),
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(function(response) {
//       if(response.ok) {
//         console.log('Coords were updated in the DB.');
//         return;
//       }
//       throw new Error('Request failed.');
//     })
//     .catch(function(error) {
//       console.log(error);
//     });


// poll the DB every 1 sec to get the stored x, y coords
// note: this is a demo of how to retrieve data from mongodb, in a real system it might make more sense to send these updates via something like Socket.io to avoid the need for polling
// setInterval(function() {
//   fetch('/circle', {method: 'GET'})
//     .then(function(response) {
//       if(response.ok) return response.json();
//       throw new Error('Request failed.');
//     })
//     .then(function(data) {
//       myCircle.x = data.x;
//       myCircle.y = data.y;
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
// }, 1000);



class Func {
  constructor(xs, ys, x, xi, xf) {
    this.xs = xs;
    this.ys = ys;
    this.x = x;
    this.xi = xi;
    this.xf = xf;
  }

  updatex(next_s){
    this.x += next_s[0];
    this.xi += next_s[1];
    this.xf += next_s[2];
  }

  draw(z) {
    stroke(255);
    noFill();
    translate(width*0.1, height/2); // put 0, 0 at center
    var cut = 0;
    var ans;
    beginShape();
    for(var i = 0;i<this.ys.length;i++)
    {   
      cut = i;
      vertex(this.xs[i]*z, this.ys[i]*z);
      if (this.xs[i]>this.xi){
        break;        
      }      
    }
    endShape();
    beginShape();
    stroke(255,0,0);
    fill(255,0,0);
    line(this.xs[cut]*z,0,this.xs[cut]*z,this.ys[cut]*z);
    ellipse(this.xs[cut]*z, this.ys[cut]*z, 5, 5);
    noFill();
    for(var i = cut;i<this.ys.length;i++)
    {
      cut = i;
      if (this.xs[i]<=this.x){
        //console.log('break with> i: '+i.toString()+', xs[i]: '+this.xs[i].toString());
        ans = i;
      }
      vertex(this.xs[i]*z, this.ys[i]*z); 
      if (this.xs[i]>this.xf){
        break;        
      }           
    }    
    endShape();
    beginShape();
    stroke(255);
    for(var i = cut;i<this.ys.length;i++)
    {
      vertex(this.xs[i]*z, this.ys[i]*z);
    }
    endShape();
    stroke(255,0,0);
    fill(255,0,0);
    line(this.xs[cut]*z,0,this.xs[cut]*z,this.ys[cut]*z);
    ellipse(this.xs[cut]*z, this.ys[cut]*z, 5, 5);
    stroke(0,0,255);
    fill(0,0,255);
    line(this.xs[ans]*z,0,this.xs[ans]*z,this.ys[ans]*z);
    ellipse(this.xs[ans]*z, this.ys[ans]*z, 5, 5);
  }
}