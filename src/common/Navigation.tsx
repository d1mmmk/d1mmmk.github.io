import { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavigationItem } from "interfaces/NavigationItem";


type NavigationProps = {
    items: NavigationItem[]
}

export default function Navigation( {
    items,
}: NavigationProps) {
return (
    <nav className="app_navigation">
        {items.sort(
            (a: NavigationItem, b: NavigationItem) => a.order - b.order
            ).map((item: NavigationItem) => (
        <Fragment  key={item.order}>
            <Link className="app_navigation_button" to={item.path}>{item.title}</Link>
        </Fragment>
        ))}
    </nav>
)
}