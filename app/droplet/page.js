"use client"
import DashboardLayout from '../../components/dashboard/Dashboard';
import ProtectedRoute from '../../utils/Context/ProtectedRoute';
import DropletTabs from '@/components/dashboard/Tabs';

const Droplet = () => {
    return (
        <>
            <DashboardLayout>
                <DropletTabs />
            </DashboardLayout></>
    )

}

export default ProtectedRoute(Droplet);