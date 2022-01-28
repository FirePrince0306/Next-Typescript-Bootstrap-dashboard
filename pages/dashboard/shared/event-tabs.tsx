import {Tab, Nav} from "react-bootstrap";
import Select, {components} from 'react-select'

import { GoAlert } from 'react-icons/go';

import { EventsService } from '~/components/utils/events.service';

const options1 = [
    { value: 'all-events', label: 'All Events' },
    { value: 'success', label: 'Success' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
    { value: 'error', label: 'Error' }
]

const options2 = [
    { value: 'all-vehicles', label: 'All Vehicles' },
    { value: 'vehicle1', label: 'Vehicle 1' },
    { value: 'vehicle2', label: 'Vehicle 2' }
]

const DropdownIndicator = () => {
    return (
        <components.DropdownIndicator>
            <GoAlert />
        </components.DropdownIndicator>
    );
};

const EventTabs = () => {
    const MyEventsService: EventsService = new EventsService();

    let allVehicles = MyEventsService.getEvents();
    let featuredVehicles = MyEventsService.getEvents().slice(1, 2);
    console.log(allVehicles, featuredVehicles)

    return (
        <div className="event-tabs">
            <Tab.Container id="vehicle-tabs" defaultActiveKey="all">
                <Nav variant="pills" className="justify-content-start flex-nowrap">
                    <Nav.Item>
                        <Nav.Link eventKey="all" >ALL EVENTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="featured" >FEATURED EVENTS</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="all">
                        <Select
                            options={options1}
                            isSearchable={true}
                            components={{
                                DropdownIndicator,
                                IndicatorSeparator: () => null
                            }}
                        />
                        <Select
                            options={options2}
                            isSearchable={true}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                        {
                            allVehicles.map((item, index) => {
                                return (
                                    <>

                                    </>
                                )
                            })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="featured">
                        {
                            featuredVehicles.map((item, index) => {
                                return (
                                    <></>
                                )
                            })
                        }
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
 }
 
 export default EventTabs;