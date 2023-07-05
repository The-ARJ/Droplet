"use client"
import CardContent from '@/components/dashboard/CardContent';
import DashboardLayout from '../../components/dashboard/layout';
import ProtectedRoute from '../../utils/Context/ProtectedRoute';

const Card = () => {
    return (
        <>
            <DashboardLayout>
                <CardContent />
            </DashboardLayout></>
    )

}

export default ProtectedRoute(Card);