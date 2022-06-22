let myFunc;
var next_x = [0,0,0];
var next_s = [0,0,0];
var zx; // zoom factor in pixels
var zy; // zoom factor in pixels
var offset; 
var resolution = 10; // steps for anim
let btn_next;
let btn_prev;
let btn_start;
let btn_reset;
let code_output = '';
let xi_input;
let xf_input;
let epsilon_input;
let function_input;
let done_msg;
let mode;
let alg;
let labels = ['','','',''];

// test buttons
// let btn_r;
// let btn_l;

var tb = [0,0,0]; // text boxes

function setup() {
  createCanvas(860, 640);
  background(20);
  // noLoop();
  labels[0] = 'xi';
  labels[1] = 'xf';
  labels[2] = 'epsilon';
  labels[3] = 'f(x)=';
  
  xi_input = createElement('input','');
  xi_input.attribute('name','xi_input');
  xi_input.attribute('required','');
  xi_input.position(width*0.05+20, height-215);
  xi_input.value('0.0');

  xf_input = createElement('input','');
  xf_input.attribute('name','xf_input');
  xf_input.attribute('required','');
  xf_input.position(width*0.05+20, height-215+25);
  xf_input.value('2.0');

  epsilon_input = createElement('input','');
  epsilon_input.attribute('name','epsilon_input');
  epsilon_input.attribute('required','');
  epsilon_input.position(width*0.05+20, height-215+50);
  epsilon_input.value('0.00000000000001');
        
  function_input = createElement('input','');
  function_input.attribute('name','function_input');
  function_input.attribute('required','');
  function_input.position(width*0.05+20, height-215+75);
  function_input.value('(-(x*x) + 2.0)');

  btn_start = createButton('Start');
  btn_start.position(width*0.05+20, height-215+100);
  btn_start.mousePressed(setupFunction);

  mode = createSelect();
  mode.position((width*0.05)+20+90, height-215+100);
  mode.option('Bisection');
  mode.option('Newton');
  mode.selected('Bisection');
  alg = mode.value();
  mode.changed(changeMode);

  btn_next = createButton('Next Step');
  btn_next.position(width*0.9, height-12*2.5);
  btn_next.mousePressed(updateFunctionNext);
  btn_next.hide();

  btn_prev = createButton('Prev Step');
  btn_prev.position(width*0.9-77, height-12*2.5);
  btn_prev.mousePressed(updateFunctionPrev);
  btn_prev.hide();

  btn_reset = createButton('Reset');
  btn_reset.position(20, height-12*2.5);
  btn_reset.mousePressed(resetFunc);
  btn_reset.hide();

  textSize(12);
  
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
  tb[0].position(width*0.05, height*0.05);
  tb[0].size(width/4, 20);
  tb[1].style("color","#FFFFFF");
  tb[1].position((width/3)+(width*0.05), height*0.05);
  tb[1].size(width/4, 20);
  tb[2].style("color","#FFFFFF");    
  tb[2].position((2*width/3)+(width*0.05), height*0.05);
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
  textSize(11);
  fill(255);
  noStroke();
  textFont('Courier');
  text(code_output, width*0.04,height-(290));
  textSize(14);
  text(labels[0], width*0.05-5, height-200);
  text(labels[1], width*0.05-5, height-200+25);
  text(labels[2], width*0.05-40, height-200+50);
  text(labels[3], width*0.05-25, height-200+75);
  noFill();
  if(myFunc) {
    if (alg === 'Bisection'){
      fill(255,0,0);
      stroke(255,0,0);
      ellipse((width*0.05)-5, (height*0.05)+7, 5, 5);
      ellipse((2*width/3)+(width*0.05)-5, (height*0.05)+7, 5, 5);
      noStroke();
      noFill();
      fill(0,0,255);
      stroke(0,0,255);
      ellipse((width/3)+(width*0.05)-5, (height*0.05)+7, 5, 5);
      noStroke();
      noFill();
      myFunc.draw(zx, zy, offset);
      tb[0].html('xi: '+next_x[1]);
      tb[1].html('x: '+next_x[0]);
      tb[2].html('xf: '+next_x[2]);
      if ((myFunc.x).toFixed(9) != (next_x[0]).toFixed(9)) {
        myFunc.updatex(next_s);
      }
    } else {      
      fill(255,0,0);
      stroke(255,0,0);
      ellipse((width*0.05)-5, (height*0.05)+7, 5, 5);
      noStroke();
      noFill();
      fill(0,0,255);
      stroke(0,0,255);
      ellipse((width/3)+(width*0.05)-5, (height*0.05)+7, 5, 5);
      noStroke();
      noFill();
      myFunc.draw(zx, zy, offset);
      tb[0].html('xi: '+next_x[1]);
      tb[1].html('x: '+next_x[0]);
      if ((myFunc.x).toFixed(9) != (next_x[0]).toFixed(9)) {
        myFunc.updatex(next_s);
      }
    }
  }
}

function changeMode(){  
  alg = mode.value();
  if (alg === 'Bisection'){
    labels[1] = 'xf';
    xi_input.value('0.0');
    epsilon_input.value('0.00000000000001');
    xf_input.value('2.0');
  } else {
    labels[1] = 'pad';
    xi_input.value('2.0');
    epsilon_input.value('0.00000000000001');
    xf_input.value('2.0');
  }  
}

function resetFunc(){
  fetch('/reset', {
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
        btn_reset.hide();
        btn_next.hide();
        btn_prev.hide();
        code_output = '';
        labels[0] = 'xi';
        labels[2] = 'epsilon';
        labels[3] = 'f(x)=';
        if (alg === 'Bisection'){
          labels[1] = 'xf';
        } else {
          labels[1] = 'pad';
        }
        mode.show();
        btn_start.show();
        xi_input.show();
        xf_input.show();
        epsilon_input.show();
        function_input.show();
        done_msg.html(''); 
        tb[0].html('');
        tb[1].html('');
        tb[2].html('');        
        console.log('reseted');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });

}

function updateFunctionNext() {
  if (alg === 'Bisection'){
    fetch('/bisection/update/next', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          if(data.done) {
            done_msg.html('DONE IN<br>'+data.steps+'<br>STEPS');                
            btn_next.hide();
            btn_prev.show();
          } else {
            done_msg.html('');                
            btn_next.show();
            btn_prev.show();
          }  
          next_x[0] = 1*data.x;
          next_x[1] = 1*data.xi;
          next_x[2] = 1*data.xf;
          next_s[0] = (1*data.x-myFunc.x)/resolution;
          next_s[1] = (1*data.xi-myFunc.xi)/resolution;
          next_s[2] = (1*data.xf-myFunc.xf)/resolution;
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
  } else {
    fetch('/newton/update/next', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          if(data.done) {
            done_msg.html('DONE IN<br>'+data.steps+'<br>STEPS');                
            btn_next.hide();
            btn_prev.show();
          } else {
            done_msg.html('');                
            btn_next.show();
            btn_prev.show();
          }          
          myFunc.slope = 1*data.slope;
          next_x[0] = 1*data.x;
          next_x[1] = 1*data.xi;
          next_s[0] = (1*data.x-myFunc.x)/resolution;
          next_s[1] = (1*data.xi-myFunc.xi)/resolution;
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
}

function updateFunctionPrev() {
  if (alg === 'Bisection'){
    fetch('/bisection/update/prev', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          if(data.done) {
            done_msg.html('BACK AT START');
            btn_next.show();
            btn_prev.hide();
          }else{
            done_msg.html('');
            btn_prev.show();
            btn_next.show();
          }  
          next_x[0] = 1*data.x;
          next_x[1] = 1*data.xi;
          next_x[2] = 1*data.xf;
          next_s[0] = (1*data.x-myFunc.x)/resolution;
          next_s[1] = (1*data.xi-myFunc.xi)/resolution;
          next_s[2] = (1*data.xf-myFunc.xf)/resolution;
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
  } else {
    fetch('/newton/update/prev', {method: 'GET'})
    .then(function(response) {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(function(data) {
      if(data) {
        if (myFunc) {
          if(data.done) {
            done_msg.html('BACK AT START');
            btn_next.show();
            btn_prev.hide();
          }else{
            done_msg.html('');
            btn_prev.show();
            btn_next.show();
          }                   
          myFunc.slope = 1*data.slope;
          next_x[0] = 1*data.x;
          next_x[1] = 1*data.xi;
          next_s[0] = (1*data.x-myFunc.x)/resolution;
          next_s[1] = (1*data.xi-myFunc.xi)/resolution;
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
}

function setupFunction(){
  if (alg === 'Bisection'){
    console.log('setting up bisection');
    if (isNaN(xi_input.value()) || isNaN(xf_input.value()) || isNaN(epsilon_input.value()) || function_input.value()===''
    || xi_input.value()==='' || xf_input.value()==='' || epsilon_input.value()===''){
    console.log('FILL ALL OUT FIELDS,\nNumbers only for xi, xf and epsilon');
    done_msg.html('FILL ALL OUT FIELDS,\nNumbers only for xi, xf and epsilon');
    return;
  }
  // put request, sends input values
  fetch('/bisection', {
    method: 'PUT',
    body: JSON.stringify({xi: xi_input.value(), xf: xf_input.value(), epsilon: epsilon_input.value(), function: function_input.value()}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if(response.ok) {
        console.log('received response, requesting data');
        fetch('/bisection/code', {method: 'GET'})
        .then(function(response) {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function(data) {
          if(data) {
            console.log('code');
            console.log(data.code);
            code_output = data.code;
            labels[0] = '';
            labels[1] = '';
            labels[2] = '';
            labels[3] = '';
            done_msg.html('');
            xi_input.hide();
            xf_input.hide();
            epsilon_input.hide();
            function_input.hide();
            btn_start.hide();
            mode.hide();
            btn_next.show();
            btn_prev.hide();
            btn_reset.show();
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy, offset);
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
            offset = 0;
            zx = (width*0.96/(Math.max( ...data.xs )-Math.min( ...data.xs )));
            zy = (height*0.5/(Math.max( ...data.ys )-Math.min( ...data.ys )));
            console.log(data);
            if(myFunc) myFunc.draw(zx, zy, offset);
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy, offset);
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
  } else {
    console.log('setting up newton');
    if (isNaN(xi_input.value()) || isNaN(xf_input.value()) || isNaN(epsilon_input.value()) || function_input.value()===''
    || xi_input.value()==='' || xf_input.value()==='' || epsilon_input.value()===''){
    console.log('FILL ALL OUT FIELDS,\nNumbers only for xi, pad and epsilon');
    done_msg.html('FILL ALL OUT FIELDS,\nNumbers only for xi, pad and epsilon');
    return;
  }
  // put request, sends input values
  fetch('/newton', {
    method: 'PUT',
    body: JSON.stringify({xi: xi_input.value(), pad: xf_input.value(), epsilon: epsilon_input.value(), function: function_input.value()}),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(function(response) {
      if(response.ok) {
        console.log('received response, requesting data');
        fetch('/newton/code', {method: 'GET'})
        .then(function(response) {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function(data) {
          if(data) {
            console.log('code');
            console.log(data.code);
            code_output = data.code;
            labels[0] = '';
            labels[1] = '';
            labels[2] = '';
            labels[3] = '';
            done_msg.html('');
            xi_input.hide();
            xf_input.hide();
            epsilon_input.hide();
            function_input.hide();
            btn_start.hide();
            mode.hide();
            btn_next.show();
            btn_prev.hide();
            btn_reset.show();
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy, offset);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
        fetch('/newton', {method: 'GET'})
        .then(function(response) {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(function(data) {
          if(data) {
            myFunc = new Newton(data.xs, data.ys, data.x, data.xi, data.slope);
            next_x[0] = data.x;
            next_x[1] = data.xi;
            next_x[2] = data.xf;
            offset = 0;
            zx = (width*0.96/(Math.max( ...data.xs )-Math.min( ...data.xs )));
            zy = (height*0.5/(Math.max( ...data.ys )-Math.min( ...data.ys )));
            console.log(data);
            if(myFunc) myFunc.draw(zx, zy, offset);
          }
          else {
            myFunc = new Bisection([0,1], [0,1], 0, 0, 1);
            if(myFunc) myFunc.draw(zx, zy, offset);
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
}
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

  draw(zx, zy, offset) {
    stroke(0,255,0);
    line(0,(height/2)+offset,width,(height/2)+offset);
    translate(width*0.02, (height/2)+offset);
    line(-1*this.xs[0]*zx,-height,-1*this.xs[0]*zx,height);
    noFill();
    var cut = 0;
    var ans;
    stroke(255);
    beginShape();
    for(var i = 0;i<this.ys.length;i++)
    {   
      cut = i;
      vertex((this.xs[i]-(1*this.xs[0]))*zx, -this.ys[i]*zy);  
      if (this.xs[i]>=this.xi){
        break;        
      }      
    }
    endShape();
    beginShape();
    stroke(255,0,0);
    fill(255,0,0);
    line((this.xs[cut]-(1*this.xs[0]))*zx,0,(this.xs[cut]-(1*this.xs[0]))*zx,-this.ys[cut]*zy);
    ellipse((this.xs[cut]-(1*this.xs[0]))*zx, -this.ys[cut]*zy, 5, 5);
    noFill();    
    for(var i = cut;i<this.ys.length;i++)
    {
      cut = i;
      if (this.xs[i]<=this.x){
        //console.log('break with> i: '+i.toString()+', xs[i]: '+this.xs[i].toString());
        ans = i;
      }
      vertex((this.xs[i]-(1*this.xs[0]))*zx, -this.ys[i]*zy); 
      if (this.xs[i]>=this.xf){
        break;        
      }           
    }    
    endShape();
    beginShape();
    stroke(255);
    for(var i = cut;i<this.ys.length;i++)
    {
      vertex((this.xs[i]-(1*this.xs[0]))*zx, -this.ys[i]*zy);
    }
    endShape();
    stroke(255,0,0);
    fill(255,0,0);
    line((this.xs[cut]-(1*this.xs[0]))*zx,0,(this.xs[cut]-(1*this.xs[0]))*zx,-this.ys[cut]*zy);
    ellipse((this.xs[cut]-(1*this.xs[0]))*zx, -this.ys[cut]*zy, 5, 5);
    stroke(0,0,255);
    fill(0,0,255);
    line((this.xs[ans]-(1*this.xs[0]))*zx,0,(this.xs[ans]-(1*this.xs[0]))*zx,-this.ys[ans]*zy);
    ellipse((this.xs[ans]-(1*this.xs[0]))*zx, -this.ys[ans]*zy, 5, 5);
    noFill();
  }
}

class Newton {
  constructor(xs, ys, x, xi, slope) {
    this.xs = xs;
    this.ys = ys;
    this.x = x;
    this.xi = xi;
    this.slope = slope
  }

  updatex(next_s){
    this.x += next_s[0];
    this.xi += next_s[1];
  }

  draw(zx, zy, offset) {
    stroke(0,255,0);
    line(0,(height/2)+offset,width,(height/2)+offset);
    translate(width*0.02, (height/2)+offset);
    line(-1*this.xs[0]*zx,-height,-1*this.xs[0]*zx,height);
    noFill();
    var ans;    
    stroke(255,0,0);
    beginShape();
    for(var i = 0;i<this.ys.length;i++)
    {
      vertex((this.xs[i]-(1*this.xs[0]))*zx, -this.ys[i]*zy);     
    }
    endShape();
    stroke(0,0,255);
    line(((this.x-(1*this.xs[0]))+((height)/(2*this.slope)))*zx,-(height/2)*zy,((this.x-(1*this.xs[0]))+((-height)/(2*this.slope)))*zx,(height/2)*zy);
    fill(255,0,0);
    stroke(255,0,0);
    ellipse((this.xi-(1*this.xs[0]))*zx, -(((this.xi-(1*this.xs[0]))-(this.x-(1*this.xs[0])))*this.slope)*zy, 5, 5);
    fill(0,0,255);
    stroke(0,0,255);
    ellipse((this.x-(1*this.xs[0]))*zx, 0, 5, 5);
    noStroke();
    noFill();
  }
}