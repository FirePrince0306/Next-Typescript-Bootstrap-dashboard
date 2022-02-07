 
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

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
                            <MenuItem><ActiveLink path="dashboard/vehicle-overview"><Link href="/dashboard/vehicle-overview">Vehicles Overview</Link></ActiveLink></MenuItem>
                            <MenuItem><ActiveLink path="dashboard/real-time-data"><Link href="/dashboard/real-time-data">Real Time Data</Link></ActiveLink></MenuItem>
                            <MenuItem><ActiveLink path="dashboard/events"><Link href="/dashboard/events">Events</Link></ActiveLink></MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Vehicles'
                        className={`${router.asPath.includes('vehicles') ? 'active' : ''}`}
                        icon={<FaTruck />}
                        >
                        <MenuItem><ActiveLink path="vehicles/fleet"><Link href="/vehicles/fleet">Fleet</Link></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="vehicles/vehicle-assignment"><Link href="/vehicles/vehicle-assignment">Vehicles Assignment</Link></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="vehicles/vehicle-details"><Link href="/vehicles/vehicle-details">Vehicle Details</Link></ActiveLink></MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Trips'
                        className={`${router.asPath.includes('trips') ? 'active' : ''}`}
                        icon={<FaMap />}
                        >
                        <MenuItem><ActiveLink path="trips/overview"><Link href="/trips/overview">Overview</Link></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="trips/upcoming-trip"><Link href="/trips/upcoming-trip">Upcoming Trip</Link></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="trips/schedule-trip"><Link href="/trips/schedule-trip">Schedule Trip</Link></ActiveLink></MenuItem>
                    </SubMenu>
                    <SubMenu
                        title='Maintenance'
                        className={`${router.asPath.includes('maintenance') ? 'active' : ''}`}
                        icon={<AiFillSetting />}
                    >
                        <MenuItem><ActiveLink path="maintenance/maintenance-planner"><Link href="/maintenance/maintenance-planner">Maintenance Planner</Link></ActiveLink></MenuItem>
                        <MenuItem><ActiveLink path="maintenance/history"><Link href="/maintenance/history">History</Link></ActiveLink></MenuItem>
                    </SubMenu>
                    <MenuItem
                        icon={<HiChartPie />}
                    ><ActiveLink path="analytics"><Link href="/analytics">Analytics</Link></ActiveLink></MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
};

export default Sidebar;