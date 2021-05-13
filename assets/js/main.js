/* Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */
const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/* 
 *Milestone 1:
  Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
*/

let colore ;
const mainEl = document.querySelector(".container");
console.log(mainEl);
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
    <div class="card">
        <i class="${item.family} ${item.prefix}${item.name}" style = "color:${colore}"  ></i>
        <h3>${item.name}</h3>
    </div>
    `)

})

/* Milestone 2 Coloriamo le icone per tipo */


// !Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone


let select = document.getElementById("tipo");

select.addEventListener("change", function(){

    let valoreselect = select.value;
    
    if(valoreselect === "animali"){
        console.log("ok")
        let filtraAnimali = icons.filter(item => {
            return item.type === "animal"
        })
       
    }/*else if (valoreselect === "vegetali") {
        icons.filter(item => {
            return item.type === "vegetable"
        })

    } else if (valoreselect === "utenti"){
        icons.filter(item => {
            return item.type === "user"
        })
    } */
}) 











/* 
let animaliElems = document.getElementsByClassName("animal") ;
    let vegetableElems = document.getElementsByClassName("vegetable") ;
    let userElems = document.getElementsByClassName("user");
    console.log(animaliElems);
    console.log(vegetableElems);
    console.log(userElems);
 */