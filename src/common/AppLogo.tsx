import { Link, useLocation } from 'react-router-dom';
import logo from 'logo.svg';

export default function AppLogo(): JSX.Element {
    return (<></>);
    const location = useLocation();

    if (location.pathname !== '/')
        return (
            <Link to="/">
                <img className='app_header_logo' src={logo} alt="logo" />
            </Link>
            );
    else return (
        <div>
            <img className='app_header_logo' src={logo} alt="logo" />
        </div>
    )
}