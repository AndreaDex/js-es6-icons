/* Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */
const icons =[
	{ name: 'cat', prefix: 'fa-', type: 'animal', family: 'fas' },
	{ name: 'crow',prefix: 'fa-', type: 'animal', family: 'fas'},
	{ name: 'dog', prefix: 'fa-', type: 'animal', family: 'fas'},
	{ name: 'dove', prefix: 'fa-', type: 'animal', family: 'fas' },
	{ name: 'dragon',prefix: 'fa-', type: 'animal', family: 'fas' },
	{ name: 'horse', prefix: 'fa-', type: 'animal', family: 'fas'},
	{ name: 'hippo', prefix: 'fa-', type: 'animal', family: 'fas' },
	{ name: 'fish', prefix: 'fa-', type: 'animal', family: 'fas' },
	{ name: 'carrot', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{ name: 'apple-alt', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{ name: 'lemon', prefix: 'fa-', type: 'vegetable', family: 'fas' },
	{ name: 'pepper-hot', prefix: 'fa-', type: 'vegetable', family: 'fas'},
	{ name: 'user-astronaut', prefix: 'fa-', type: 'user', family: 'fas'},
	{ name: 'user-graduate', prefix: 'fa-', type: 'user', family: 'fas'},
	{ name: 'user-ninja', prefix: 'fa-', type: 'user', family: 'fas'},
	{ name: 'user-secret', prefix: 'fa-', type: 'user', family: 'fas'}
];

/* 
 *Milestone 1:
  Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
*/
function printcard(){
	let colore ;
	const mainEl = document.querySelector(".container");
	 icons.forEach((item) =>{
		 if(item.type === "animal"){
			 colore = "blue"
		} else if (item.type === "vegetable"){
			colore = "orange"
		} else if (item.type === "user") {
			colore = "purple"  
		} 
	
		mainEl.insertAdjacentHTML("beforeend", 
		`
		<div class="card ${item.type}">
			<i class="${item.family} ${item.prefix}${item.name}" style = "color:${colore}"  ></i>
			<h3>${item.name}</h3>
		</div>
		`)
	
	})

}
printcard()

 
let select = document.getElementById("tipo");
let cardsElems = document.getElementsByClassName("card") ;
let vegetableElems = document.getElementsByClassName("vegetable") ;

select.addEventListener("change", function(){

    let valoreselect = select.value;
    
    if(valoreselect === "animal"){

		for (let index = 0; index < cardsElems.length; index++) {
			const element = cardsElems[index];
		
			if(!element.classList.contains("animal")){
				element.classList.add("none")
			} else if(element.classList.contains("animal"))	{
				element.classList.remove("none")
			}
		}

    } else if (valoreselect === "vegetable"){
		for (let index = 0; index < cardsElems.length; index++) {
			const element = cardsElems[index];
			
			if(!element.classList.contains("vegetable")){
				element.classList.add("none")
			} else if(element.classList.contains("vegetable")){
				element.classList.remove("none")
			}
		}

	}else if (valoreselect === "user"){
		for (let index = 0; index < cardsElems.length; index++) {
			const element = cardsElems[index];
		
			if(!element.classList.contains("user")){
				element.classList.add("none")
			}else if(element.classList.contains("user")){ 
				element.classList.remove("none")
			}
		} 

	}else {
		for (let index = 0; index < cardsElems.length; index++) {
			const element = cardsElems[index];
			element.classList.remove("none")
			
		} 
	}
    
    
}) 
