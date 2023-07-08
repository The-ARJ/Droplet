"use client"
import CardContent from '@/components/dashboard/CardContent';
import DashboardLayout from '../../components/dashboard/Dashboard';
import ProtectedRoute from '../../utils/Context/ProtectedRoute';
import CardTabs from '@/components/dashboard/Tabs';

const Card = () => {
    return (
        <>
            <DashboardLayout>
                <CardTabs />
            </DashboardLayout></>
    )

}

export default ProtectedRoute(Card);