export default function setOptions(params) {
   
}

const selectOptions = document.querySelector('#options')
const radioOptions = document.querySelectorAll('[name="edit-option"]')
const days = document.querySelector('#days')
const submitBtn = document.querySelector('#submit-button')

function submitOptions(params) {

    submitBtn.addEventListener('click', submitClick)

    function submitClick(params) {
        const option = selectOptions.value
        console.log(option)
        const radioOptionChecked = document.querySelector('input[name="edit-option"]:checked');
        console.log(radioOptionChecked.value)
        const daysSelected = days.value
        console.log(daysSelected)
    }
    
}
submitOptions()
