import { Component, ReactNode } from "react";

interface HomePageProps {}

export default class HomePage extends Component<HomePageProps> {
    render(): ReactNode {
        return (
            <div className="app_page app_page-home">
                <h1>Hello there</h1>
                <p>My name is Dmitriy and i greet you</p>
                <p>What are you doing here? There are a lot of strange places on the Internet, this is probably one of them </p>
            </div>
        )
    }
}