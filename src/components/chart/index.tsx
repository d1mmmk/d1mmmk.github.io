
import { Fragment, useEffect, useMemo, useRef } from "react";
import Chart from "./chart";
import * as Plot from "@observablehq/plot";


interface ChartProps {
    data: {[ key: string]: any}[];
    params: any;
    stroke?: string;
}

export default function ChartComponent( {data, params} : ChartProps ): JSX.Element {
    const plotRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (!data) return;

        const chart = new Chart( {settings: {
            style: {
              background: "transparent"
            },
            x: {
                type: 'time',
                tickFormat: '%Y',
            },
            y: {
              grid: false
            },
            color: {
              type: "diverging",
              scheme: "burd"
            },
            marks: [
                Plot.areaY(data, params),
                Plot.ruleY([0]),
            ]
        }});

        plotRef.current.append(chart.chart);

        return () => chart.remove();
    });

    return (
        <div ref={plotRef} />
    )
}