document.addEventListener('DOMContentLoaded', function () {
	renderName()

	document.getElementById('myForm').addEventListener('submit', function (event) {
  	event.preventDefault()

    var input = document.getElementById('name')
    setName(input.value)
    renderName()
  })
})

function setName (name) {
	// Write code to set the name in Local Storage after submission
  localStorage.setItem('Name', document.getElementById('name').value)
}

function renderName () {
  let nameTitle = localStorage.getItem('Name') || 'Anonymous';
  document.querySelector('span').innerText = nameTitle
}
