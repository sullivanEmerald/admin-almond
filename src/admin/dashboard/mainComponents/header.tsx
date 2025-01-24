import DashbooardContentLayout from '@/admin/middleware/dashboardContent';
import HeaderContent from '../contents/headerContent';
const Header = () => {
    return (
        <>
            <DashbooardContentLayout>
                <HeaderContent />
            </DashbooardContentLayout>
        </>
    )
}

export default Header;