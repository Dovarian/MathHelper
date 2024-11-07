console.log('x*x'.replaceAll('x', 5));

let formula = math.evaluate(
  document
    .querySelector('.formula')
    .value.replaceAll('√', 'Math.sqrt')
    .replaceAll('x', x)
);
let formulaF = (x) => math.evaluate(formula);
let scale = Number(document.querySelector('.scale').value) + 4;
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.translate(canvas.width / 2, canvas.height / 2);

function renderGraph() {
  ctx.clearRect(
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );
  ctx.beginPath();
  ctx.strokeStyle = 'grey';
  ctx.lineWidth = 1;
  for (let i = -500; i < 500; i++) {
    ctx.moveTo(i * scale, -canvas.height / 2);
    ctx.lineTo(i * scale, canvas.height / 2);
    ctx.moveTo(-canvas.width / 2, i * scale);
    ctx.lineTo(canvas.width / 2, i * scale);
  }
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(-canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, 0);
  ctx.moveTo(0, -canvas.height / 2);
  ctx.lineTo(0, canvas.height / 2);
  ctx.stroke();

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = -499; i <= 499; i += 0.1) {
    ctx.lineTo(i * scale, -formula(i) * scale);
  }
  ctx.stroke();
}

renderGraph();

document.querySelector('.scale').addEventListener('input', (event) => {
  if (event.target.value < 1) {
    event.target.value = 1;
    scale = 1 + 4;
  } else if (event.target.value > 100) {
    event.target.value = 100;
    scale = 100 + 4;
  } else {
    scale = Number(event.target.value) + 4;
  }
  renderGraph();
});

document.querySelector('.formula').addEventListener('input', (event) => {
  const regex = new RegExp(/[0-9%\/*\-+x√\(\)]/);
  event.target.value = event.target.value
    .split('')
    .filter((e) => regex.test(e))
    .join('');
  formula = (x) =>
    math.evaluate(
      event.target.value.replaceAll('√', 'Math.sqrt').replaceAll('x', x)
    );
  console.log(formula);

  renderGraph();
});
