 
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
                            <MenuItem><ActiveLink path="dashboard/real-time-data"><a href="/dashboard/real-time-data">Real Time Data</a></ActiveLink></MenuItem>
                            <MenuItem><ActiveLink path="dashboard/events"><a href="/dashboard/events">Events</a></ActiveLink></MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Vehicles'
                        icon={<FaTruck />}
                        >
                        <MenuItem><ActiveLink path="vehicles/fleet"><a href="/vehicles/fleet">Fleet</a></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="vehicles/vehicle-assignment"><a href="/vehicles/vehicle-assignment">Vehicles Assignment</a></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="vehicles/vehicle-details"><a href="/vehicles/vehicle-details">Vehicle Details</a></ActiveLink></MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Trips'
                        icon={<FaMap />}
                        >
                        <MenuItem><ActiveLink path="trips/overview"><a href="/trips/overview">Overview</a></ActiveLink></MenuItem>
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