const form = document.getElementById("form");
const submit = document.getElementById("submit");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const labelDayError = document.getElementById("label-day");
const labelMonthError = document.getElementById("label-month");
const labelYearError = document.getElementById("label-year");

const dayMensajeError = document.getElementById("day-mensaje-error");
const monthMensajeError = document.getElementById("month-mensaje-error");
const yearMensajeError = document.getElementById("year-mensaje-error");

const fechaActual = new Date();

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validarCampos()

    if(yearMensajeError.textContent === "" && monthMensajeError.textContent === "" && dayMensajeError.textContent === ""){
        getYear()
        getMonth()
        getDay()
    }
})

//-- VALIDACION DE CAMPOS.
const validarCampos = () =>{
    let day = parseInt(dayInput.value)
    let month = parseInt(monthInput.value)
    let year = parseInt(yearInput.value)
    //-- validar dia
    if (isNaN(day)){
        dayMensajeError.textContent = "This Field is required"
        dayMensajeError.classList.add("field-required-error")
        dayInput.classList.add("input-error")
        labelDayError.classList.add("label-error")
        dayInput.focus()
    } else if (day < 0 || day > 31) {
        dayMensajeError.textContent = "Must be a valid  day"
        dayMensajeError.classList.add("field-required-error")
        dayInput.classList.add("input-error")
        labelDayError.classList.add("label-error")
     } else {
        dayMensajeError.textContent = ""
        dayMensajeError.classList.remove("field-required-error")
        dayInput.classList.remove("input-error")
        labelDayError.classList.remove("label-error")
    }
    //-- Validar mes
    if (isNaN(month)){
        monthMensajeError.textContent = "This Field is required"
        monthMensajeError.classList.add("field-required-error")
        monthInput.classList.add("input-error")
        labelMonthError.classList.add("label-error")
        monthInput.focus()
    } else if (month < 0 || month > 12) {
        monthMensajeError.textContent = "Must be a valid  month"
        monthMensajeError.classList.add("field-required-error")
        monthInput.classList.add("input-error")
        labelMonthError.classList.add("label-error")
    } else {
        monthMensajeError.textContent = ""
        monthMensajeError.classList.remove("field-required-error")
        monthInput.classList.remove("input-error")
        labelMonthError.classList.remove("label-error")
    }
    //--Validar año
    if (isNaN(year)){
        yearMensajeError.textContent = "This Field is required"
        yearMensajeError.classList.add("field-required-error")
        yearInput.classList.add("input-error")
        labelYearError.classList.add("label-error")
        yearInput.focus()
    } else if (year < 0 || year > fechaActual.getFullYear()) {
        yearMensajeError.textContent = "Must be a valid  year"
        yearMensajeError.classList.add("field-required-error")
        yearInput.classList.add("input-error")
        labelYearError.classList.add("label-error")
    } else {
        yearMensajeError.textContent = ""
        yearMensajeError.classList.remove("field-required-error")
        yearInput.classList.remove("input-error")
        labelYearError.classList.remove("label-error")
    }
}
//-- OPERACION MATEMATICA PARA CALCULAR LA EDAD
const yearResult = document.getElementById("year-result")
const monthsResult = document.getElementById("months-result")
const daysResult = document.getElementById("days-result")

//-- Calcular años 
const getYear = () =>{    
    let numberYear = parseFloat(yearInput.value)
    let resultYearAge = fechaActual.getFullYear()
    let mesActual = fechaActual.getMonth() + 1
    let numeroMonth = parseFloat(monthInput.value)

    let añoResult = resultYearAge - numberYear
    if(mesActual < numeroMonth){
        yearResult.textContent = añoResult - 1
    }else{
        yearResult.textContent = añoResult
    }
}
//-- Calcular meses 
    const getMonth = () =>{
        let numeroMonth = parseFloat(monthInput.value)
        let mesActual = fechaActual.getMonth() + 1
        let resultMonthAge = (mesActual + 12 - numeroMonth) % 12

        monthsResult.textContent = resultMonthAge
    }
    //-- Calcular dias
    const getDay = () =>{
        let numeroDay = parseFloat(dayInput.value)
        let diaActual = fechaActual.getDate()
    
        let diasPasados = diaActual - numeroDay
    
        if (diasPasados < 0) {
            let diaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate()
            diasPasados += diaMesAnterior
        }
        
        daysResult.textContent = diasPasados
    }