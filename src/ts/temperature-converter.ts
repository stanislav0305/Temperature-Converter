export type Temperature = {
    celsius: string,
    fahrenheit: string,
    kelvin: string,
    rankine: string,
    reaumur: string,
}

export enum TemperatureEnum {
    Celsius,
    Fahrenheit,
    Kelvin,
    Rankine,
    Reaumur
}

export class TemperatureConverterSingelton {
    private static instance: TemperatureConverterSingelton;

    private constructor() { }

    public static getInstance(): TemperatureConverterSingelton {
        if (!TemperatureConverterSingelton.instance) {
            TemperatureConverterSingelton.instance = new TemperatureConverterSingelton();
        }

        return TemperatureConverterSingelton.instance
    }

    public convert(value: number, format: TemperatureEnum): Temperature {
        let c = 0;

        switch (format) {
            case TemperatureEnum.Celsius: {
                c = value;
                break;
            }
            case TemperatureEnum.Fahrenheit: {
                c = this.fahrenheitToCelsius(value);
                break;
            }
            case TemperatureEnum.Kelvin: {
                c = this.KelvinToCelsius(value);
                break;
            }
            case TemperatureEnum.Rankine: {
                c = this.rankineToCelsius(value);
                break;
            }
            case TemperatureEnum.Reaumur: {
                c = this.reaumurToCelsius(value);
                break;
            }
            default: {
                // ???? never
                break;
            }
        }


        return {
            celsius: c.toFixed(2),
            fahrenheit: this.celsiusToFahrenheit(c).toFixed(2),
            kelvin: this.celsiusToKelvin(c).toFixed(2),
            rankine: this.celsiusToRankine(c).toFixed(2),
            reaumur: this.celsiusToReaumur(c).toFixed(2)
        };
    }

    //---------------------

    private celsiusToFahrenheit(celsius: number) {
        return (celsius * 1.8 + 32)
    }

    private fahrenheitToCelsius(fahrenheit: number) {
        return (fahrenheit - 32) * 5 / 9
    }

    //---------------------

    private celsiusToKelvin(celsius: number): number {
        return celsius + 273.15
    }

    private KelvinToCelsius(kelvin: number) {
        return kelvin - 273.15
    }

    //---------------------

    private celsiusToRankine(celsius: number) {
        return celsius * 1.8 + 491.67
    }

    private rankineToCelsius(rankine: number) {
        return (rankine - 491.67) * 5 / 9
    }

    //---------------------

    private celsiusToReaumur(celsius: number) {
        return celsius * 0.80
    }

    private reaumurToCelsius(reaumur: number) {
        return reaumur * 1.25
    }

    //---------------------
}