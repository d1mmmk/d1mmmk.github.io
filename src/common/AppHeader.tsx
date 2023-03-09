import { Fragment } from "react";
import { NavigationItem } from "interfaces/NavigationItem";
import AppContent from "common/AppContent";
import AppLogo from "common/AppLogo";
import Navigation from "common/Navigation";

export default function AppHeader (
    { items = [] } : { items?: NavigationItem[] }
): JSX.Element {
    return (
    <header className="app_header">
      <AppContent extraClass="app_header_content" element={
        <Fragment>
            <AppLogo />
            <Navigation items={items} />
        </Fragment>
      } />
    </header>
  )
}