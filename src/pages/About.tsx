import { Component, Fragment, ReactNode } from "react";
import { Chart } from "components";
import ReactGA from 'react-ga';
import { CSVFileReader, TSVFileReader } from "services";

interface AboutProps {
    githablink?: string;
}

export default class About extends Component<AboutProps, { chartData: any[] } > {
    static defaultProps = {
        githablink: '#'
    }
    private params: any = {x: "дата", y: 'диф'};

    constructor(props: AboutProps) {
        super(props);
        this.state = {
            chartData: [],
        };
    }

    public componentDidMount(): void {
        this.loadChartData();
    }

    /**
     * gaEventTracker
     */
    public gaEventTracker(label: string): void {
        ReactGA.event({ category: 'clicks', action: 'btnclick', label });
    }

    private loadChartData() {
        new CSVFileReader({src: '/assets/counters.csv'}).read().then((data: any[]) => {
            const parced = data
                .filter((row) => row['дата'])
                .filter((row) => row['диф'])
                .map((row) => Object.assign(
                    {},
                    row,
                    { дата: row['дата'].split('.').reverse().join('-')}
                ));

            this.setState({
                chartData: parced,
            });
        });

    }


    render(): ReactNode {
        return (
            <div className="app_page app_page-about">
                <h1>About</h1>
                <p>This is React application example</p>

                {/* <h2>Sources</h2> */}
                <p>You can explore the source code of this application on <a onClick={() =>this.gaEventTracker('githablink')} href={this.props.githablink} target="_blank">Github</a></p>

                <h2>What can you find there?</h2>
                <ul>
                    <li>Css variables and @media querys, sass nesting</li>
                    <li>Grid and flex markup</li>
                    <li>Up-to-date React functional components and obsolete class components</li>
                    <li>Lazy React component loading, custom hooks</li>
                    <li>Typescript usage and modern web application architecture</li>
                </ul>

                {/* <Chart
                    data={this.state.chartData}
                    params={this.params}
                    /> */}

            </div>
        )
    }

}