 
import React from 'react';
import { useRouter } from 'next/router';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarContent,
} from 'react-pro-sidebar';

import { FaBookOpen, FaTruck, FaMap } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { HiChartPie } from 'react-icons/hi'

import ActiveLink from '~/components/features/active-link';

export type SidebarProps = {
    collapsed?: boolean;
    toggled?: boolean;
    handleToggleSidebar?: () => void;
};

const Sidebar: React.FC<SidebarProps>  = ({ collapsed, toggled, handleToggleSidebar }) => {
    const router = useRouter();

    return (
        <ProSidebar
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="lg"
            onToggle={handleToggleSidebar}
        >
            <SidebarContent className="scrollable-container p-3">
                <Menu className="p-0">
                    <SubMenu
                        title='Dashboard'
                        className={`${router.asPath.includes('dashboard') ? 'active' : ''}`}
                        icon={<FaBookOpen />}
                    >
                            <MenuItem><ActiveLink path="dashboard/vehicle-overview"><a href="/dashboard/vehicle-overview">Vehicles Overview</a></ActiveLink></MenuItem>
                            <MenuItem>Real Time Data</MenuItem>
                            <MenuItem>Events</MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Vehicles'
                        icon={<FaTruck />}
                        >
                        <MenuItem>Fleet</MenuItem>
                        <MenuItem>Vehicles Assignment</MenuItem>
                        <MenuItem>Vehicle Details</MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Trips'
                        icon={<FaMap />}
                        >
                        <MenuItem>Overview</MenuItem>
                        <MenuItem>Upcoming Trip</MenuItem>
                        <MenuItem>Schedule Trip</MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Maintenance'
                        icon={<AiFillSetting />}
                    >
                        <MenuItem>Maintenance Planner</MenuItem>
                        <MenuItem>History</MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<HiChartPie />}
                    >Analytics</MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Sidebar;