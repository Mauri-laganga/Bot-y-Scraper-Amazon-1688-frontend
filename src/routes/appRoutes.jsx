import { Navigate } from 'react-router-dom';
import MainLayout from '../layout/Dashboard/index';

// views
import Dashboard from '../views/dashboard';
import Opportunities from '../views/opportunities';
import Scans from '../views/scans';
import Settings from '../views/settings';

const AppRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Navigate to="dashboard" replace />
        },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'opportunities', element: <Opportunities /> },
        { path: 'scans', element: <Scans /> },
        { path: 'settings', element: <Settings /> }
    ]
};

export default AppRoutes;
