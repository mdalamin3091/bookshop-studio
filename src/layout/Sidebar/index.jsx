import { Divider, Drawer } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { selectOpendrawer } from '@/redux/features/sidebar/sidebarSelector';
import { setOpenDrawer } from '@/redux/features/sidebar/sidebarSlice';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {

    const openDrawer =  useSelector(selectOpendrawer)
    // const dispatch = useDispatch();

    // const handleDrawer = () =>{
    //     dispatch(setOpenDrawer(false))
    // }
    
    return (
        <>
            <Drawer
                opened={openDrawer}
                size="sm"
                title={<SidebarHeader />}
                // onClose={handleDrawer}
                withCloseButton={false}
                transitionProps={{ duration: 300, timingFunction: 'linear' }}
            >
            <Divider c="#dee2e6" />
                {/* Drawer content */}
            </Drawer>
        </>
    );
}

export default Sidebar;