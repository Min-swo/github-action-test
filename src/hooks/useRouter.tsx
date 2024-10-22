import { MapLayout, ReservationLayout } from '@/components/Layout';
import { MainLayout } from '@/components/Layout/MainLayout';
import { BranchDetailPage, MapDetailPage, MapPage } from '@/pages';
import { ReservationPage } from '@/pages';
import { MainPage } from '@/pages';
import { AdminMainPage } from '@/pages/Admin/Main';
import { createBrowserRouter } from 'react-router-dom';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <MainPage /> }],
    },
    {
      path: '/map',
      element: <MapLayout />,
      children: [
        { index: true, element: <MapPage /> },
        {
          path: '/map/:id',
          element: <MapDetailPage />,
        },
      ],
    },
    {
      path: '/branch/:id',
      element: <BranchDetailPage />,
    },
    {
      path: '/reservation',
      element: <ReservationLayout />,
      children: [{ index: true, element: <ReservationPage /> }],
    },
    {
      path: '/admin',
      element: <AdminMainPage />,
    },
  ]);
