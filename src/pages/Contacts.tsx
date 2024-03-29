import { Component, FormEvent, ReactNode } from "react";
import ReactGA from 'react-ga';

interface ContactsPageProps {
    name: string;
}

export default class ContactsPage extends Component<ContactsPageProps> {
    public name: string = '';
    constructor(props: ContactsPageProps) {
        super(props);

    }

    public handleSubmit( event: FormEvent<HTMLFormElement>): void {
        const formData = new FormData(event.target as HTMLFormElement);
        const data: {[key: string]: any} = {};
        for (const [ key, value ] of formData.entries()) {
            data[key] = value;
        }
        if ( data.name === this.name ) alert('you goddamn right!');
    }

    /**
     * gaEventTracker
     */
    public gaEventTracker(label: string): void {
        ReactGA.event({ category: 'clicks', action: 'btnclick', label });
    }

    render(): ReactNode {
        return (
            <div className="app_page app_page-contacts">
            <h1>Contacts</h1>
            <dl className="con">
                <dt>Email</dt>
                <dd><a
                    onClick={() => this.gaEventTracker('mailto')}
                    href="mailto:d1mmmk@gmail.com?subject=You are rockstar!"
                >{this.props.name}@gmail.com</a></dd>
                <dt>HH.ru</dt>
                <dd><a
                    className="crop w-max200 d-ib"
                    onClick={() => this.gaEventTracker('hh')}
                    href="https://hh.ru/resume/06e2d492ff0c0682770039ed1f5945326e6a4a"
                    target="_blank"
                >hh.ru/resume/06e2d492ff0c0682770039ed1f5945326e6a4a</a></dd>
                <dt>GitHub</dt>
                <dd><a
                    onClick={() => this.gaEventTracker('github')}
                    href={"https://github.com/" + this.props.name}
                    target="_blank"
                >github.com/{this.props.name}</a></dd>
            </dl>

            {/* <form action="" ref={this.formRef} onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="say my name" />
                <input type="submit"  />
            </form> */}
            </div>
        )
    }
}