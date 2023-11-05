import { TemperatureFormat, TemperatureConverterSingelton } from './temperature-converter'

export class InputManager {
    private inputMap: Map<TemperatureFormat, HTMLInputElement>
    activeFormat: TemperatureFormat
    private activeInpElement: HTMLInputElement
    private converter: TemperatureConverterSingelton

    constructor(inputs: NodeListOf<HTMLInputElement>) {
        this.inputMap = new Map<TemperatureFormat, HTMLInputElement>()
        inputs.forEach((inp: HTMLInputElement) => {
            const format = inp.getAttribute('data-format') as TemperatureFormat
            this.inputMap.set(format, inp)
        })

        this.activeFormat = 'celsius'
        this.activeInpElement = this.inputMap.get('celsius')!
        this.activeInpElement.valueAsNumber = 0

        this.converter = TemperatureConverterSingelton.getInstance()
        this.recalcTemperatureValues()
    }

    activateInput(format: TemperatureFormat, elem: HTMLInputElement) {
        this.activeFormat = format
        this.activeInpElement = elem

        this.recalcTemperatureValues()
    }

    recalcTemperatureValues() {
        const result = this.converter.convert(this.activeInpElement.valueAsNumber, this.activeFormat)

        this.inputMap.forEach((inp, key) => {
            //exclude active input
            if (key !== this.activeFormat) {
                inp.value = result[key]
            }
        })
    }

    addEventListenerForAllInputs(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        this.inputMap.forEach(inp => inp.addEventListener(type, listener, options));
    }

    removeEventListenerFromActiveInput(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        this.activeInpElement.removeEventListener(type, listener, options);
    }

    addEventListenerToActiveInput(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
        this.activeInpElement.addEventListener(type, listener, options);
    }
}
