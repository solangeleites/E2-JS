const pizza = [
    {
        id: 1,
        name: "Calabresa",
        ingredients: ["salsa de tomate", "mozzarella", "longaniza", "oregano"],
        price:1020
    },
    {
        id: 2,
        name: "4 Quesos",
        ingredients: ["salsa de tomate", "mozzarella", "parmesano", "provolone", "roquefort"],
        price:1300
    },
    {
        id: 3,
        name: "Vegan",
        ingredients: ["salsa de tomate", "espinaca", "brocoli", "queso de almendras"],
        price:100
    },
    {
        id: 4,
        name: "Atun",
        ingredients: ["salsa de tomate", "mozzarella", "atun", "huevo picado", "oregano"],
        price:590
    },
    {
        id: 5,
        name: "Fugazzeta",
        ingredients: ["cebolla", "mozzarella", "oregano"],
        price:990
    },
    {
        id: 6,
        name: "Rúcula",
        ingredients: ["mozzarella", "jamon crudo", "rucula", "parmesano"],
        price:1250
    }
]

    //* Selecciono los elementos que voy a usar
const d = document;
const $form = d.getElementById('form')
const $input = d.getElementById('input')
const $containerPizza = d.getElementById('pizzas')

    //* Creo esta funcion para buscar el id
const buscarPizza = value => {
    let pizzaEncontrada = pizza.find(pizza => pizza.id === Number(value));
    return pizzaEncontrada;
}

    //* Creo esta funcion para renderizar
const pizzaRender = pizza => {
    const {id, name} = pizza;
    return `<h2>La pizza que vas a pedir para comer hoy es: ${pizza.name}</h2> 
            <h4>Precio: $${pizza.price}</h4>`
}

    //* Creo esta funcion para cancelar el evento de submit
    const cualPizza = e => {
    e.preventDefault();

    //* Guardo en una variable el valor del input y le quito los espacios con trim
    let guardarValor = $input.value;
    $input.value = '';

    //* Funcion para que muestre un mensaje si no se ingresa un valor
    if (!guardarValor.length){
        $containerPizza.innerHTML = `<small>El campo esta vacío. Por favor, ingresa un número del 1 al 6 </small>`
        return;

    //* Funcion para que muestre un mensaje si se ingresa un valor que no corresponda a un id
        } else if (guardarValor < 1 || guardarValor > 6){
            $containerPizza.innerHTML = `<small>No existe una pizza para ese número. Por favor, ingresa un número del 1 al 6 </small>` 
            return;
            
            //* Funcion para que muestre la funcion de renderizar si se ingresa un valor correcto
        } else {  
            let pizzaEncontrada = buscarPizza(guardarValor);
            $containerPizza.innerHTML = pizzaRender(pizzaEncontrada);
        }        
}

//* Funcion para inicializar
const init = () => {
    $form.addEventListener ('submit', cualPizza);
}
init();
