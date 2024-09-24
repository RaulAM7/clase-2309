// SELECCTING DOM ELEMENTS

console.log(window)

const primerParr = document.getElementById('primerParr')

console.log(primerParr)

const mainDiv = document.getElementsByClassName('main-div')

console.log(mainDiv)

const parrafosPrueba = document.getElementsByClassName('parrafosPrueba')

console.log(parrafosPrueba)

const allDivs = document.getElementsByTagName('div')

console.log(allDivs)



// Manipulating DOM elements

// Cambiando inner Text

const test = document.getElementsByClassName('testInner')[0]

console.log('Antes de cambiar elementos clase: ') // Antes de cambiarlo
console.log(test) // Antes de cambiarlo

test.innerText = "Cambié el Innertext del primer objeto de la clase test"

console.log('Luego de cambiar elementos clase: ') // Tras cambiarlo
console.log(test) // Tras cambiarlo


// Cambiando inner HTML

const parent = document.getElementById('parent1-id')

console.log('Antes de cambiar el innerHtml de un parent')
console.log(parent)

//parent.innerHTML = '<p>Ahora este elemento solo tiene un párrafo</p>'



// QUERY SELECTOR

const usingIdQuerySelector = document.querySelector('#parent1-id')

const usingClassQuerySelector = document.querySelector('.testInner')

const selectThirdChild = document.querySelector('#parent1-id>p:nth-child(3)')

const selectMyAttribute = document.querySelector('p[myAttribute = Attribute1')

console.log(usingIdQuerySelector)
console.log(usingClassQuerySelector)
console.log(selectThirdChild)
console.log(selectMyAttribute)


// QUERY SELECTOR ALL

const useIdSelector = document.querySelector('#parent1-id')

const selectingAllP = document.querySelectorAll('p')
const selectinPbyTag = document.getElementsByTagName('p')

console.log('Vamos a comparar el querySelectorAll con GetByTag')
console.log(selectingAllP)
console.log(selectinPbyTag)
console.log('Como vemos dan cosas parecidas')


// Como selecting All P es un array podemos hacer cosas con el
/*
console.log('Estamos iterando el array del querySelectorAll')
console.log(selectingAllP.forEach(function(element, index){
    console.log('Numero indice del elemento del array: ' + index)
    console.log('Elemento del array: ')
    console.log(element)

}))
*/

