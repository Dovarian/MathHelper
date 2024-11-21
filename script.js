document.querySelector('#value').addEventListener('input', (e) => {
  const regex = new RegExp(/[0-9%\/*\-+\(\)e^]/);
  e.target.value = e.target.value
    .split('')
    .filter((e) => regex.test(e))
    .join('');
  if (e.target.value.length >= '27') {
    e.target.style.fontSize = '2vh';
    e.target.style.paddingTop = '1.6vh';
  } else {
    e.target.style.fontSize = '2.5vh';
    e.target.style.paddingTop = '1.1vh';
  }
});
document.querySelector('#value').addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    e.target.value = math.evaluate(e.target.value);
  }
});
for (el of document.querySelectorAll('.add')) {
  el.addEventListener('click', (e) => {
    document.querySelector('#value').value += e.target.innerHTML;
  });
}
document.querySelector('#del').addEventListener('click', () => {
  document.querySelector('#value').value = '';
});
document.querySelector('#res').addEventListener('click', () => {
  document.querySelector('#value').value = math.evaluate(
    document.querySelector('#value').value
  );
});
