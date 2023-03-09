
import * as Plot from "@observablehq/plot";

enum ChartTypes {
    'LINE' = 'line',
    'BAR' = 'bar',
}

interface ChartProps {
    type?: ChartTypes,
    settings: any,
}

export default class Chart {
    public settings: any = {};
    public chart: any = null;

    constructor(props: ChartProps) {
        this.settings = props.settings;
        this.chart =  Plot.plot(this.settings);
    }

    public remove(): void {
        if (
            this.chart !== null &&
            typeof this.chart.remove === 'function'
        ) {
            this.chart.remove();
        }
    }
}