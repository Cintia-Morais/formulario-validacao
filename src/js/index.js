const form = document.getElementById('formulario');
const campos = form.querySelectorAll('input, textarea');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let formValido = true;

  campos.forEach((campo) => {
    const erro = campo.nextElementSibling;

    if (campo.value.trim() === '') {
      campo.classList.remove('success');
      campo.classList.add('error');
      erro.style.display = 'block';
      formValido = false;
    } else {
      campo.classList.remove('error');
      campo.classList.add('success');
      erro.style.display = 'none';
    }
  });

  if (formValido) {
    alert('Formulário enviado com sucesso!');
    form.reset();
    campos.forEach((campo) => campo.classList.remove('success'));
  }
});