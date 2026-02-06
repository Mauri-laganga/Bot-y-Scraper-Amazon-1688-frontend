import { createBrowserRouter } from 'react-router-dom';

// project-imports
import AppRoutes from './appRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([AppRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
