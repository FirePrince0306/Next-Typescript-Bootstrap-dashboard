import Select from 'react-select';

import { IoMdClose } from 'react-icons/io';
import { RiCalendarTodoLine } from 'react-icons/ri';

import Trips from '~/components/pages/trips/trips';
import TripTabs from '~/components/pages/trips/trip-tabs';

const options1 = [
    { value: 'ab-1512', label: 'AB 1512' },
    { value: 'vb-5432', label: 'VB 5432' }
]

const Overview = () => {
	return (
		<>
			<div className="d-flex px-1 px-md-0 h-100 min-vh-100 trips-overview">
                <div className="active-vehicles">
                    <div className="d-flex align-items-center justify-content-between px-3 py-2 my-1">
                        <h6 className="heading text-basic mb-0">Trips</h6>
                        <span>
                            <IoMdClose />
                        </span>
                    </div>
                    <div className="divider2"></div>
                    <div className="d-flex vehicle-value align-items-center">
                        <Select
                            className="me-md-2 me-0 w-100"
                            options={options1}
                            isSearchable={true}
                            id="vehicle-selector"
                            instanceId="vehicle-selector"
                            inputId="vehicle-selector"
                            placeholder="Filter by Vehicle"
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />

                        <span className="icon d-flex pe-1 ms-1">
                            <RiCalendarTodoLine className="text-hint" />
                        </span>
                    </div>
                    <div className="divider2"></div>
                    
                    <div className="p-2">
                        <Trips />
                    </div>
                </div>
                <div className="divider3"></div>

                <TripTabs />
			</div>
		</>
)};

export default Overview;