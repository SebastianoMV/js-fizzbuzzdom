const container= document.querySelector('.container');

let limit = 100;

for(let i = 0; i < limit; i++){
  const boxEl = document.createElement('div');
  boxEl.className = 'box';
  boxEl.append(i);
  container.append(boxEl);
}
