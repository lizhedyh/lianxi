
function component() {
  var  element = document.createElement('pre');
  
  element.innerHTML = [
    'Hi Stark 222!'
  ].join('\n\n');
  return element;
}

let element = component(); 
document.body.appendChild(element);
