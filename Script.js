const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Out',
  'Set',
  'Nov',
  'Dez'
]

function render() {
  let output = ''

  const thisMonth = months[new Date().getMonth()]

  for (let month of months) {
    const active =
      thisMonth ==
      //  é igual '?' se sim active ou se n for n vai ser nada ''
      month
        ? 'active'
        : ''

    output += `<div class ="${active}">${month}</div>`
  }

  return output
}

app.querySelector('main').innerHTML = render()

app.querySelector('header span').innerHTML = new Date().getFullYear()

/* botao de tema */

function temer() {
  document.body.classList.toggle('black')
}
