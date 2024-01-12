
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output')

function foo() {
  const trimInput = nameInput.value.trim();
  if (trimInput === '') {
    nameOutput.textContent = 'Anonymous'
  } else {
    nameOutput.textContent = trimInput
  }
}
nameInput.addEventListener('input', foo)




