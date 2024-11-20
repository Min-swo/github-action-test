import {
  MapLayout,
  MapTestLayout,
  ReservationLayout,
} from '@/components/Layout';
import AdminLayout from '@/components/Layout/AdminLayout';
import { RegisterLayout } from '@/components/Layout/Register';
import {
  BranchDetailPage,
  DirectionPage,
  InquiryDetailPage,
  MapDetailPage,
  MapPage,
  RegisterCallFormPage,
  RegisterInquiryFormPage,
  ReservationCallPage,
  ReservationDetailCallPage,
  ReservationDetailInquiryPage,
  ReservationDetailVisitPage,
  ReservationInquiryPage,
  ReservationPage,
  ReservationVisitPage,
} from '@/pages';
//수정 예정 ..
import { ClientLayout } from '@/components/Layout/ClientLayout';
import { MainLayout } from '@/components/Layout/MainLayout';
import MypageLayout from '@/components/Layout/MypageLayout';
import VisitPage from '@/pages/Admin/offline';
import CallPage from '@/pages/Admin/online/Call';
import InquiryPage from '@/pages/Admin/online/Inquiry';
import { AnswerDetail } from '@/pages/Admin/online/Inquiry/Answer/Detail';
import { AnswerInput } from '@/pages/Admin/online/Inquiry/Answer/Input';
import { AdminMainPage } from '@/pages/Admin/online/Main';
import MapTestPage from '@/pages/MapTest';
import DupTest from '@/pages/MapTest/DupTest';
import Mypage from '@/pages/Mypage';
import { RegisterVisitFormPage } from '@/pages/Register/Visit';
import { createBrowserRouter } from 'react-router-dom';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        { index: true, element: <MainLayout /> },
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
          path: '/direction',
          element: <DirectionPage />,
        },
        {
          path: '/branch/:id',
          element: <BranchDetailPage />,
        },
        {
          path: '/reservation',
          element: <ReservationLayout />,
          children: [
            // { index: true, element: <ReservationPage /> },
            {
              path: '/reservation/call',
              children: [
                { index: true, element: <ReservationCallPage /> },
                {
                  path: '/reservation/call/:id',
                  children: [
                    { index: true, element: <ReservationDetailCallPage /> },
                  ],
                },
              ],
            },
            {
              path: '/reservation/inquiry',
              children: [
                { index: true, element: <ReservationInquiryPage /> },
                {
                  path: '/reservation/inquiry/:id',
                  children: [
                    { index: true, element: <ReservationDetailInquiryPage /> },
                  ],
                },
                {
                  path: '/reservation/inquiry/:id/detail',
                  children: [{ index: true, element: <InquiryDetailPage /> }],
                },
              ],
            },
            {
              path: '/reservation/visit',
              children: [
                { index: true, element: <ReservationVisitPage /> },
                {
                  path: '/reservation/visit/:id',
                  children: [
                    { index: true, element: <ReservationDetailVisitPage /> },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: '/register',
          element: <RegisterLayout />,
          children: [
            { index: true, element: <ReservationPage /> },
            {
              path: '/register/call',
              element: <RegisterCallFormPage />,
            },
            {
              path: '/register/inquiry',
              element: <RegisterInquiryFormPage />,
            },
            {
              path: '/register/visit',
              element: <RegisterVisitFormPage />,
            },
          ],
        },
        {
          path: '/mypage',
          element: <MypageLayout />,
          children: [{ index: true, element: <Mypage /> }],
        },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: [
        { index: true, element: <VisitPage /> },
        {
          path: '/admin/online',
          element: <AdminMainPage />,
        },
        {
          path: '/admin/inquiry',
          element: <InquiryPage />,
        },
        {
          path: '/admin/inquiry/:id',
          element: <AnswerDetail />,
        },
        { path: '/admin/inquiry/register/:id', element: <AnswerInput /> },
        // { path: '/admin/inquiry/answerDetail', element: <AnswerDetail /> },
        { path: '/admin/call', element: <CallPage /> },
        { path: '/admin/adminmypage', element: <AdminMyPage /> },
      ],
    },
    {
      path: '/maptest',
      element: <MapTestLayout />,
      children: [
        { index: true, element: <MapTestPage /> },
        { path: '/maptest/dup', element: <DupTest /> },
      ],
    },
  ]);
