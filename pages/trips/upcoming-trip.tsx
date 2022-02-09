import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { RiCalendarTodoLine } from 'react-icons/ri';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { VehiclesService } from '~/components/utils/vehicles.service';

import TripOverviewCard from '~/components/pages/trips/trip-overview-card';

const options1 = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' }
]

const UpComingTrip = () => {
    const MyVehiclesService: VehiclesService = new VehiclesService();
    let allVehicles = MyVehiclesService.getVehicles();
    
    function datePickHandler(): void {

    }

    return (
        <div className="upcoming-trip">
            <div className="d-flex align-items-center justify-content-between px-3 py-1 my-1">
                <h5 className="heading text-basic mb-0">Schedule Trip</h5>
                <button className="button size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold">
                    <RiCalendarTodoLine className="me-2 fs-4"/>
                    <span>SCHEDULE TRIP</span>
                </button>
            </div>
            <div className="divider2"></div>
            
            <div className="px-3">
                <div className="d-lg-flex align-items-center justify-content-between">
                    <div className="d-md-flex align-items-center event-tabs-selectbox py-3">
                        <input className="input size-xl-medium size-medium status-basic shape-rectangle border-1 me-2 mb-3 mb-md-0" placeholder="Filter by Vehicle" type="text" />
                        
                        <DatePicker
                            className="input status-basic"
                            placeholderText="Enter date"
                            readOnly={false}
                            onChange={datePickHandler}
                        />
                    </div>
                            
                    <div className="mb-3 mb-lg-0">
                        <button className="button1 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions fw-bold">
                            <IoMdClose className="fs-5 pe-2" />
                            <span>clear</span>
                        </button>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-md-flex align-items-center justify-content-between my-1 py-2">
                    <div className="d-flex">
                        <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions me-2">
                            <AiFillSetting className="fs-5" />
                            <span className="d-none">button</span>
                        </button>
                        <button className="size-xl-medium appearance-ghost size-medium status-basic shape-rectangle icon-start transitions">
                            <BsFillTrashFill className="fs-5" />
                            <span className="d-none">button</span>
                        </button>
                    </div>

                    <div className="d-flex flex-wrap align-items-center mt-3 mt-md-0">
                        <label className="text-hint label me-2 mb-3 mb-md-0 d-none d-md-block">Items on page</label>
                        <Select
                            className="me-2 select-count mb-3 mb-md-0"
                            options={options1}
                            isSearchable={true}
                            id="count-selector"
                            instanceId="count-selector"
                            inputId="count-selector"
                            placeholder="20"
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                        <div className="d-flex mb-3 mb-md-0">
                            <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                <FaAngleLeft className="fs-5 text-hint" />
                                <span className="d-none">Button</span>
                            </button>
                            <button className="button3 size-xl-medium appearance-filled size-medium status-control shape-rectangle icon-start transitions">
                                <FaAngleRight className="fs-5 text-hint" />
                                <span className="d-none">Button</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div style={{overflowX: "auto"}}>
                    <div style={{minWidth: "920px"}}>
                        <div className="d-flex mb-2">
                            <div style={{width: "4.8%"}}>
                                
                            </div>
                            <div style={{width: "11%"}}>
                                <label className="text-hint label">TRIP</label>
                            </div>
                            <div style={{width: "21%"}}>
                                <label className="text-hint label" style={{marginLeft: "56px"}}>VEHICLE</label>
                            </div>
                            <div className="ps-3" style={{width: "18.2%"}}>
                                <label className="text-hint label">DRIVER</label>
                            </div>
                            <div style={{width: "12%"}}>
                                <label className="text-hint label ps-3">START RATE</label>
                            </div>
                            <div style={{width: "12%"}}>
                                <label className="text-hint label ps-3">END DATE</label>
                            </div>
                            <div style={{width: "17%"}}>
                                <label className="text-hint label">DURATION</label>
                            </div>
                            <div style={{width: "4%"}}>
                            </div>
                        </div>

                        {
                            allVehicles.map((item, index) => {
                                return (
                                    <TripOverviewCard item={item} key={"upcoming-trip-" + index} />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpComingTrip;