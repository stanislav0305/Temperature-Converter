import './index.html'
import './index.scss'
import { TemperatureFormat } from './ts/temperature-converter'
import { InputManager } from './ts/input-manager'


const inputs = document.querySelectorAll<HTMLInputElement>('#inputs-panel input')
const inputManager = new InputManager(inputs)
inputManager.addEventListenerToActiveInput('input', onChangeTemperatureValues, false)

inputManager.addEventListenerForAllInputs('click', onActivateInput, false)


function onActivateInput(event: Event) {
    event.preventDefault()

    const elem = event.target as HTMLInputElement
    const format = elem.getAttribute('data-format') as TemperatureFormat

    if (inputManager.activeFormat !== format) {
        inputManager.removeEventListenerFromActiveInput('input', onChangeTemperatureValues, false)

        inputManager.activateInput(format, elem)
        inputManager.addEventListenerToActiveInput('input', onChangeTemperatureValues, false)
    }
}


function onChangeTemperatureValues(event: Event) {
    event.preventDefault()

    inputManager.recalcTemperatureValues()
}