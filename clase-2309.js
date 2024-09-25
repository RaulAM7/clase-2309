// SELECCTING DOM ELEMENTS

//console.log(window)

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

const parent1 = document.getElementById('parent1-id')

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

const myParrafElements = document.getElementsByClassName("testInner")

const myFirstParraf =  myParrafElements[0]

const namePElement = myFirstParraf.getAttribute('name')
console.log(namePElement)

const mySecondParraf = myParrafElements[1]

//Vamos a meterle un atributo name="second-parrafo"

mySecondParraf.setAttribute('name', 'second-parraf')

const nameSecondParraf = mySecondParraf.getAttribute('name')

console.log(nameSecondParraf)

// Vamos a quitarle ese nuevo atributo

mySecondParraf.removeAttribute('name')



// CREANDO ELEMENTOS DEL DOM 

const newDiv = document.createElement('div')

console.log(newDiv)

newDiv.innerText = 'Este es el nuevo Text Content del nuevo Div creado'

newDiv.setAttribute('class', 'new-Div-class')

newDiv.setAttribute('id', 'parent2-id')





// INSERTANDO ELEMENTOS

// lo creamos
const newParrInserted = document.createElement('p')

newParrInserted.setAttribute('class', 'parrafs')
newParrInserted.setAttribute('name', 'newParr')
newParrInserted.innerText = 'Nuevo Parrafo creado en JS e insertado'


// Lo insertamos AL FINAL en el div con id parent1 y .appendChield()
//parent1.appendChild(newParrInserted)

// Lo insertamos .insertBefore(NewNode, Childreference)

const father1 = document.getElementById("parent1-id")

const childReferenceParent1 = document.querySelector('#parent1-id>p:nth-child(5)')

father1.insertBefore(newParrInserted, childReferenceParent1)


// BORRANDO ELEMENTOS DOM

const parrafBorrar = document.querySelector('#parent1-id>p:nth-child(1)')

father1.removeChild(parrafBorrar)


// EVENTS 

/* Que son los Events? son todo tipo de interaccion entre la web y el usuario

*/

// USER <-> BROWSER <-> EventHandler

// Event Handler -> Casi todo son Callbacks

/* callbackFn ¿Qué era? -> Una funcion definida en el codigo en cualquier lado 
y a la que se llama en cualquier momento como argumento/parametro 

*/

const fatherButton = document.getElementById('parent1-id')

const allParrafsTags = document.getElementsByTagName('p')

console.log('Este es el parrafo que quiero ver')
console.log(allParrafsTags[4])

const buttonOrder = document.getElementById('AddParrafButton')

buttonOrder.addEventListener('click', addParraf)

function addParraf () {
    console.log('Hiciste click en el boton de Añadir parrafs!')
    fatherButton.appendChild(allParrafsTags[4])
}

/*
console.log('fatherButton:', fatherButton);
console.log('allParrafsTags:', allParrafsTags);
console.log('buttonOrder:', buttonOrder);
*/

const buttonRemove = document.getElementById('buttonRemove')

buttonRemove.addEventListener('click', removeListener)

function removeListener(){
    console.log('Hiciste click en REMOVE CAPACIDAD DE AÑADIR PARRFS')
    buttonOrder.removeEventListener('click', addParraf)
}




// Queremos cambiar a mano el value default de un input a manija en JS

// traemos el primer input

const inputArriba = document.getElementsByTagName('input')[0]

// traemos el boton que queremos

const button = document.getElementById('addnameButton')

// traemos la lista a la que queremos añadirlo

const ulNamesList = document.getElementById('names-list')

inputArriba.value = 'Reboot Academy...'


// Vamos a hacer el code para añadir elementos a la lista


const buttonaddToList = document.getElementById('addToListButton')

function addToNamesList () {
    const newLi = document.createElement('li')
    newLi.innerText = inputArriba.value
    
    ulNamesList.appendChild(newLi)

    console.log('NewLi creado!')
    
}

buttonaddToList.addEventListener('click', addToNamesList)