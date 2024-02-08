const btn = document.querySelector('#btn-sortear');

function handleClick() {
  const min = Math.ceil(document.querySelector('#min').value);
  const max = Math.floor(document.querySelector('#max').value);
  const resultado = document.querySelector('#sorteado');
  if (min >= max) {
    alert('O valor minimo tem que ser MENOR que valor maximo');
  } else {
    const sorteado = Math.floor(Math.random() * (max - min + 1) + min);

    resultado.innerHTML = `O Número sorteado foi: ${sorteado}`;
  }
}
btn.addEventListener('click', handleClick);
