import { FunctionComponent } from "react";
import AppContent from "common/AppContent";
interface footerProps {
    year_from?: number;
}

export const AppFooter: FunctionComponent<footerProps> = ({year_from = ''}) =>
    <div className='app_footer'>
        <AppContent element={
            <p>&copy; d1mmmk {year_from } — { new Date().getFullYear() }</p>
        } />
    </div>