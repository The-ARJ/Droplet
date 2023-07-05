"use client"
import Content from '../../components/dashboard/DashContent';
import DashboardLayout from '../../components/dashboard/layout';
import ProtectedRoute from '../../utils/Context/ProtectedRoute';

const HomePage = () => {
    return (
        <>
            <DashboardLayout>
                <Content title="Home" />
            </DashboardLayout>
        </>
    );
};

export default ProtectedRoute(HomePage);
