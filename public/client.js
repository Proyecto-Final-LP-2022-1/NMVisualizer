let myFunc;
var next_x = [0,0,0];
var next_s = [0,0,0];
var zx; // zoom factor in pixels
var zy; // zoom factor in pixels
var resolution = 10; // steps for anim
let btn_next;
let btn_start;
let btn_reset;
let txt_input;
let code_input;
let input;
let done_msg;

// test buttons
// let btn_r;
// let btn_l;

var tb = [0,0,0]; // text boxes

function setup() {
  createCanvas(860, 640);
  background(20);
  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);

  // noLoop();

  txt_input = createElement('textarea','');
  txt_input.attribute('name','input');
  txt_input.attribute('cols','50');
  txt_input.attribute('rows','10');
  txt_input.position(width*0.05,height-150-65);
  txt_input.value('xi_init = 0.0;\n'
                  +'xf_init = 2.0;\n'
                  +'xi = xi_init;\n'
                  +'xf = xf_init;\n'
                  +'epsilon = 0.00000000000001;\n'
                  +'f = @(x) (-(x*x) + 2.0);\n'
                  +'x = (xi+xf)/2;\n'
                  +'while(((xf-xi)^ 2) ^ 0.5 > epsilon)\n'
                  +'  if( (f(xf) > 0) & (f(xi) < 0))\n'
                  +'    if(f(x) > 0)\n'
                  +'      xf = x;\n'
                  +'    else\n'
                  +'      xi = x;\n'
                  +'    end;\n'
                  +'  else\n'
                  +'    if(f(x) < 0)\n'
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
  btn_next.hide();

  // test buttons
  // btn_r = createButton('Cut Right');
  // btn_r.position(width*0.9, height-12*5);
  // btn_r.mousePressed(cutRight);
  // btn_l = createButton('Cut Left');
  // btn_l.position(width*0.9-70, height-12*5);
  // btn_l.mousePressed(cutLeft);

  btn_reset = createButton('Reset');
  btn_reset.position(20, height-12*2.5);
  btn_reset.mousePressed(resetFunc);
  btn_reset.hide();

  textSize(12);

  code_input = createDiv('');
  code_input.style("font-family", "Courier");
  code_input.style("font-size", "12px");
  code_input.style("color","#FFFFFF");
  code_input.position(width*0.05,height-(220));
  code_input.size(1, 1); 
  
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
  tb[0].position(width*0.05, height*0.1);
  tb[0].size(width/4, 20);
  tb[1].style("color","#FFFFFF");
  tb[1].position((width/3)+(width*0.05), height*0.1);
  tb[1].size(width/4, 20);
  tb[2].style("color","#FFFFFF");    
  tb[2].position((2*width/3)+(width*0.05), height*0.1);
  tb[2].size(width/4, 20);

  done_msg = createDiv('');
  done_msg.style("font-family", "Courier");
  done_msg.style("font-size", "24px");
  done_msg.style("justify-content", "center");
  done_msg.style("color","#00FF00");
  done_msg.position((width/2)-75, (height*0.1)+25);
  done_msg.size(150, 40);

}

function draw() {
  background(20);
  stroke(255);
  strokeWeight(1);
  line(0,height/2,width,height/2);
  if(myFunc) {
    myFunc.draw(zx, zy);
    tb[0].html('xi: '+next_x[1]);
    tb[1].html('x: '+next_x[0]);
    tb[2].html('xf: '+next_x[2]);
    if ((myFunc.x).toFixed(9) != (next_x[0]).toFixed(9)) {
      myFunc.updatex(next_s);
    }
  }
}

// function keyPressed() {
//   //console.log(keyCode);
//   if (keyCode === LEFT_ARROW) {
//     //console.log('L');
//     cutLeft();
//   } else if (keyCode === RIGHT_ARROW) {
//     //console.log('R');
//     cutRight();
//   }
// }

// function mouseWheel(event) {
    
//   // Change the zoom value according
//   // to the scroll delta value
//   zy += event.delta;
// }

// function cutRight() {
//   //console.log('Rin');
//   fetch('/bisection/cutR', {method: 'GET'})
//   .then(function(response) {
//     if(response.ok) return response.json();
//     throw new Error('Request failed.');
//   })
//   .then(function(data) {
//     if(data) {
//       if (myFunc) {
//         next_x[0] = data.x;
//         next_x[1] = data.xi;
//         next_x[2] = data.xf;
//         next_s[0] = (data.x-myFunc.x)/resolution;
//         next_s[1] = (data.xi-myFunc.xi)/resolution;
//         next_s[2] = (data.xf-myFunc.xf)/resolution;
//         //console.log(data);
//       }
//     }
//     else {
//       myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
//     }
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// }

// function cutLeft() {
//   //console.log('Lin');
//   fetch('/bisection/cutL', {method: 'GET'})
//   .then(function(response) {
//     if(response.ok) return response.json();
//     throw new Error('Request failed.');
//   })
//   .then(function(data) {
//     if(data) {
//       if (myFunc) {
//         next_x[0] = data.x;
//         next_x[1] = data.xi;
//         next_x[2] = data.xf;
//         next_s[0] = (data.x-myFunc.x)/resolution;
//         next_s[1] = (data.xi-myFunc.xi)/resolution;
//         next_s[2] = (data.xf-myFunc.xf)/resolution;
//         //console.log(data);
//       }
//     }
//     else {
//       myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
//     }
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// }

function resetFunc(){
  fetch('/bisection/reset', {
    method: 'PUT',
    body: JSON.stringify({}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if(response.ok) {
        clear();
        myFunc = false;
        background(20);
        stroke(255);
        strokeWeight(1);
        line(0,height/2,width,height/2);
        btn_reset.hide();
        btn_next.hide();
        code_input.html('');
        code_input.size(1, 1);
        btn_start.show();
        txt_input.show();
        done_msg.html(''); 
        tb[0].html('');
        tb[1].html('');
        tb[2].html('');        
        console.log('Range reseted.');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

}

function updateFunction() {
  fetch('/bisection/update', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          if(data.done) {
            done_msg.html('DONE');            
            btn_next.hide();
          }
          next_x[0] = data.x;
          next_x[1] = data.xi;
          next_x[2] = data.xf;
          next_s[0] = (data.x-myFunc.x)/resolution;
          next_s[1] = (data.xi-myFunc.xi)/resolution;
          next_s[2] = (data.xf-myFunc.xf)/resolution;
          //console.log(data);
        }
      }
      else {
        myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
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
            code_input.size(500, 150);
            code_input.html(JSON.stringify(data.table, null, '<br>'));
            txt_input.hide();
            btn_start.hide();
            btn_next.show();
            btn_reset.show();
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy);
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
            zx = (width*0.8/(Math.max( ...data.xs )-Math.min( ...data.xs )));
            zy = (height*0.4/(Math.max( ...data.ys )-Math.min( ...data.ys )));
            console.log(zx);
            console.log(zy);
            console.log(data);
            if(myFunc) myFunc.draw(zx, zy);
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy);
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

  draw(zx, zy) {
    stroke(255);
    noFill();
    translate(width*0.1, height/2); // put 0, 0 at center
    var cut = 0;
    var ans;
    beginShape();
    for(var i = 0;i<this.ys.length;i++)
    {   
      cut = i;
      vertex(this.xs[i]*zx, -this.ys[i]*zy);  
      if (this.xs[i]>=this.xi){
        break;        
      }      
    }
    endShape();
    beginShape();
    stroke(255,0,0);
    fill(255,0,0);
    line(this.xs[cut]*zx,0,this.xs[cut]*zx,-this.ys[cut]*zy);
    ellipse(this.xs[cut]*zx, -this.ys[cut]*zy, 5, 5);
    noFill();    
    for(var i = cut;i<this.ys.length;i++)
    {
      cut = i;
      if (this.xs[i]<=this.x){
        //console.log('break with> i: '+i.toString()+', xs[i]: '+this.xs[i].toString());
        ans = i;
      }
      vertex(this.xs[i]*zx, -this.ys[i]*zy); 
      if (this.xs[i]>=this.xf){
        break;        
      }           
    }    
    endShape();
    beginShape();
    stroke(255);
    for(var i = cut;i<this.ys.length;i++)
    {
      vertex(this.xs[i]*zx, -this.ys[i]*zy);
    }
    endShape();
    stroke(255,0,0);
    fill(255,0,0);
    line(this.xs[cut]*zx,0,this.xs[cut]*zx,-this.ys[cut]*zy);
    ellipse(this.xs[cut]*zx, -this.ys[cut]*zy, 5, 5);
    stroke(0,0,255);
    fill(0,0,255);
    line(this.xs[ans]*zx,0,this.xs[ans]*zx,-this.ys[ans]*zy);
    ellipse(this.xs[ans]*zx, -this.ys[ans]*zy, 5, 5);
    noFill();
  }
}