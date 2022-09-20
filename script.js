const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')
document.querySelector('#mensagemTrue').style.display = 'none'

// função para codigicar o texto digitado

function btnEncriptar() {
  const textoEncriptado = encriptar(inputTexto.value)
  mensagem.value = textoEncriptado
  document.querySelector('.imagem').style.display = 'none'
  document.querySelector('#mensagemTrue').style.display = 'block'
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringEncriptada = stringEncriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      )
    }
  }
  return stringEncriptada
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(inputTexto.value)
  mensagem.value = textoDesencriptado
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  stringDesencriptada = stringDesencriptada.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      )
    }
  }
  return stringDesencriptada
}

// botao copiar
function copiar() {
  const msg = document.querySelector('#msgCripto')
  msg.select()
  navigator.clipboard.writeText(msg.value)
  msg.value = ''
}
