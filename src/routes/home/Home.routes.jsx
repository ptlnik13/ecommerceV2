import { Outlet } from 'react-router-dom';

import DirectoryComponent from '../../components/directory/directory.component';

const HomeRoutes = () => {

  return (
    <div>
      <DirectoryComponent />
      <Outlet />
    </div>
  );
};

export default HomeRoutes;
