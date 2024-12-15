export default function setOptions(params) {
   
}

const selectOptions = document.querySelector('#options')
const radioOptions = document.querySelectorAll('[name="edit-option"]')
const days = document.querySelector('#days')
const submitBtn = document.querySelector('#submit-button')

function submitOptions() {
    submitBtn.addEventListener('click', submitClick)

    function submitClick() {
        let optionsObject = {}

        const option = selectOptions.value //retorna se é morning...

        // Obtém o input de rádio selecionado
        const radioOptionChecked = document.querySelector('input[name="edit-option"]:checked');
        

        const daysSelected = days.value //retorna dias

        // Preenchendo o objeto corretamente
        optionsObject.turno = option
        optionsObject.addOrRemove = radioOptionChecked.value // Obtém o valor do rádio
        optionsObject.days = daysSelected


        // Salvar no LocalStorage
        localStorage.setItem('options', JSON.stringify(optionsObject));
        console.log("Informações salvas no LocalStorage!");
    }
}

// Inicia o evento
submitOptions();


// Recuperar o objeto do LocalStorage
const savedOptions = localStorage.getItem('options');

// Verificar se o LocalStorage contém o dado
if (savedOptions) {
    // Converter o JSON para um objeto JavaScript
    const optionsObject = JSON.parse(savedOptions);
    console.log("Objeto recuperado do LocalStorage:", optionsObject);

    // Acessar as propriedades do objeto
    console.log("Turno:", optionsObject.turno); // Ex: morning
    console.log("Ação:", optionsObject.addOrRemove); // Ex: add
    console.log("Dias:", optionsObject.days); // Ex: dias
} else {
    console.log("Nenhum dado encontrado no LocalStorage.");
}



            //    // Carregar dados do LocalStorage para cada dia
            //    const savedData = localStorage.getItem(`day-${day}`);
            //    if (savedData) {
            //        const optionsObject = JSON.parse(savedData);
            //        // Dependendo do turno, aplica o background e exibe
            //        if (optionsObject.turno === "morning") {
            //            morning.style.display = "block";
            //            morning.style.backgroundColor = "yellow";
            //        } else {
            //            morning.style.display = "none";
            //        }
            //        if (optionsObject.turno === "afternoon") {
            //            afternoon.style.display = "block";
            //            afternoon.style.backgroundColor = "green";
            //        } else {
            //            afternoon.style.display = "none";
            //        }
            //        if (optionsObject.turno === "night") {
            //            night.style.display = "block";
            //            night.style.backgroundColor = "blue";
            //        } else {
            //            night.style.display = "none";
            //        }
            //    }


//     function saveValues(name, value) {
//         localStorage[name] = selectOptions.value
//     }
//     saveValues()
    
// }
// submitOptions()
