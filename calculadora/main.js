const addValor = (valor) => {
  document.getElementById('tbxResultado').value += valor;
}

const evaluar = () => {
  try {
    document.getElementById('tbxResultado').value =
      eval(document.getElementById('tbxResultado').value);
  } catch (error) {
    alert(error);
    document.getElementById('tbxResultado').focus();
  }
}