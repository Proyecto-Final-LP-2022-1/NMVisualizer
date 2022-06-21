let myFunc;
var next_x = [0,0,0];
var next_s = [0,0,0];
var z = 75; // zoom factor in pixels
var res = 10; // steps for anim
let btn_next;
let btn_start;
let txt_input;
let code_input;
let input;

var tb = [0,0,0]; // text boxes

function setup() {
  createCanvas(860, 640);
  background(20);
  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);

  txt_input = createElement('textarea','');
  txt_input.attribute('name','input');
  txt_input.attribute('cols','50');
  txt_input.attribute('rows','10');
  txt_input.position(width*0.05,height+(20));
  txt_input.value('xi = 0.0;\n'
                  +'xf = 2.0;\n'
                  +'epsilon = 0.00000000000001;\n'
                  +'x = (xi+xf)/2;\n'
                  +'while(((xf-xi)^ 2) ^ 0.5 > epsilon)\n'
                  +'  if( ((-(xf*xf) + 2.0) > 0) & ((-(xi*xi) + 2.0) < 0))\n'
                  +'    if((-(x*x) + 2.0) > 0)\n'
                  +'      xf = x;\n'
                  +'    else\n'
                  +'      xi = x;\n'
                  +'    end;\n'
                  +'  else\n'
                  +'    if((-(x*x) + 2.0) < 0)\n'
                  +'      xf = x;\n'
                  +'    else\n'
                  +'      xi = x;\n'
                  +'    end;\n'
                  +'  end;\n'
                  +'  x = (xi+xf)/2;\n'
                  +'end;');

  btn_start = createButton('Start');
  btn_start.position(txt_input.x, txt_input.y + 120 + 40 );
  btn_start.mousePressed(setupFunction);

  btn_next = createButton('Next Step');
  btn_next.position(width*0.9, height-12*2.5);
  btn_next.mousePressed(updateFunction);

  textSize(12);

  code_input = createDiv('');
  code_input.style("font-family", "Courier");
  code_input.style("font-size", "12px");
  code_input.style("color","#FFFFFF");
  code_input.position(width*0.05,height-(220));
  code_input.size(300, 300); 
  
  tb[0] = createDiv('');
  tb[0].style("font-family", "Courier");
  tb[0].style("font-size", "12px");
  tb[1] = createDiv('');
  tb[1].style("font-family", "Courier");
  tb[1].style("font-size", "12px");
  tb[2] = createDiv('');
  tb[2].style("font-family", "Courier");
  tb[2].style("font-size", "12px");
  tb[0].style("color","#FFFFFF");    
  tb[0].position(width/6, height*0.1);
  tb[0].size(width/3, 20);
  tb[1].style("color","#FFFFFF");
  tb[1].position(3*width/6, height*0.1);
  tb[1].size(width/3, 20);
  tb[2].style("color","#FFFFFF");    
  tb[2].position(5*width/6, height*0.1);
  tb[2].size(width/3, 20);
}

function draw() {
  background(20);
  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);
  if(myFunc) {
    myFunc.draw(z);
    tb[0].html('xi: '+myFunc.xi);
    tb[1].html('x: '+myFunc.x);
    tb[2].html('xf: '+myFunc.xf);
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
function updateFunction() {

  fetch('/bisection', {method: 'GET'})
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
          console.log(data);
        }
      }
      else {
        myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  //redraw();
}

function setupFunction(){

  // put request, sends text input
  fetch('/bisection', {
    method: 'PUT',
    body: JSON.stringify({in: txt_input.value()}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if(response.ok) {
        console.log('received response, requesting data');
        fetch('/bisection/simbTable', {method: 'GET'})
        .then(function(response) {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function(data) {
          if(data) {
            console.log('simbTable');
            console.log(data.table);
            code_input.html(JSON.stringify(data.table, null, '<br>'));
            txt_input.hide();
            btn_start.hide();
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(z);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
        fetch('/bisection', {method: 'GET'})
        .then(function(response) {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function(data) {
          if(data) {
            myFunc = new Bisection(data.xs, data.ys, data.x, data.xi, data.xf);
            next_x[0] = data.x;
            next_x[1] = data.xi;
            next_x[2] = data.xf;
            tb[0].html('xi: '+data.xi);
            tb[1].html('x: '+data.x);
            tb[2].html('xf: '+data.xf);
            console.log(data);
            if(myFunc) myFunc.draw(z);
            // let asd = txt_input.value();
            // console.log(asd);
            // code_input.html(asd);
            // txt_input.hide();
            // btn_start.hide();
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(z);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
        console.log('input code sent to server.');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
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



class Bisection {
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
      if (this.xs[i]>=this.xi){
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
      if (this.xs[i]>=this.xf){
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
    noFill();
  }
}