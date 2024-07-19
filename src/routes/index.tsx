// import dependencies
import {
    Routes as RouterDomRoutes,
    Route
} from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const Routes = () => {
    return (
        <RouterDomRoutes>
            <Route path="/" element={<Dashboard />}/>
        </RouterDomRoutes>
    )
}