import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { AiOutlineExpandAlt } from 'react-icons/ai';
import { RiLayoutFill } from 'react-icons/ri';
import { HiCreditCard } from 'react-icons/hi';

import RevenueChart from '~/components/pages/analytics/revenue-chart';
import ExpensesChart from '~/components/pages/analytics/expenses-chart';
import Co2Chart from '~/components/pages/analytics/co2-chart';
import TripsChart from '~/components/pages/analytics/trips-chart';
import IdleChart from '~/components/pages/analytics/idle-chart';
import FuelChart from '~/components/pages/analytics/fuel-chart';
import DistanceChart from '~/components/pages/analytics/distance-chart';

const options1 = [
    { value: 'all-vehicles', label: 'All Vehicles' },
    { value: 'vehicle1', label: 'Vehicle 1' },
    { value: 'vehicle2', label: 'Vehicle 2' }
]

const Analytics = () => {
    function datePickHandler():void {
    }

    return (
        <div className="analytics bg-grey">
            <div className="d-flex justify-content-between align-items-center bg-default flex-md-row flex-column">
                <div className="d-flex align-items-center flex-md-row flex-column">
                    <h5 className="heading text-basic mb-0 p-3 mx-1">Analytics</h5>
                    <div className="divider d-none d-md-block"></div>

                    <Select
                        className="ms-md-3 ps-md-1 me-md-3 me-0 mb-3 mb-md-0 status-basic"
                        options={options1}
                        isSearchable={true}
                        id="vehicle-selector"
                        instanceId="vehicle-selector"
                        inputId="vehicle-selector"
                        placeholder="All Vehicles"
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                    <DatePicker
                        className="input status-basic border border-1 rounded-3 px-3 py-1 me-md-3 mb-3 mb-md-0"
                        placeholderText="Enter date"
                        readOnly={false}
                        onChange={datePickHandler}
                    />
                </div>

                <div className="d-flex justify-content-between mb-md-0 mb-3">
                    <button className="d-flex align-items-center button size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold me-2">
                        <RiLayoutFill className="fs-5 me-2 pe-1" /><span>widgets</span>
                    </button>
                    <button className="button1 size-xl-medium appearance-outline size-medium status-basic shape-rectangle icon-start transitions fw-bold fs-5 me-0 me-md-3">
                        <AiOutlineExpandAlt /><span className="d-none">Button</span>
                    </button>
                </div>
            </div>
            
            <div className="divider2"></div>

            <div className="indicators d-flex flex-column flex-md-row justify-content-between w-100 pt-3 px-2">
                <div className="indicator p-1 position-relative bg-white justify-content-between w-100 d-flex flex-column align-items-start border border-1 rounded-3 mx-2 my-0 w-md-100 w-auto">
                    <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                        <div>
                            <div className="mt-2">
                                <h5 className="heading text-basic mb-0">$124.000</h5>
                            </div>
                            <div className="mb-2">
                                <span className="text text-hint caption-2 d-flex">Total Expenses</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center text-primary rounded-circle" style={{backgroundColor: "#ECF6F4", width: "52px", height: "52px"}}>
                            <HiCreditCard />
                        </div>
                    </div>
                </div>

                <div className="indicator p-1 position-relative bg-white justify-content-between w-100 d-flex flex-column align-items-start border border-1 rounded-3 mx-2 my-0 w-md-100 w-auto">
                    <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                        <div>
                            <div className="mt-2">
                                <h5 className="heading text-basic mb-0">$124.000</h5>
                            </div>
                            <div className="mb-2">
                                <span className="text text-hint caption-2 d-flex">Total Expenses</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center text-primary rounded-circle" style={{backgroundColor: "#ECF6F4", width: "52px", height: "52px"}}>
                            <HiCreditCard />
                        </div>
                    </div>
                </div>

                <div className="indicator p-1 position-relative bg-white justify-content-between w-100 d-flex flex-column align-items-start border border-1 rounded-3 mx-2 my-0 w-md-100 w-auto">
                    <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                        <div>
                            <div className="mt-2">
                                <h5 className="heading text-basic mb-0">$100.000</h5>
                            </div>
                            <div className="mb-2">
                                <span className="text text-hint caption-2 d-flex">Total Expenses</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center text-primary rounded-circle" style={{backgroundColor: "#ECF6F4", width: "52px", height: "52px"}}>
                            <HiCreditCard />
                        </div>
                    </div>
                </div>

                <div className="indicator p-1 position-relative bg-white justify-content-between w-100 d-flex flex-column align-items-start border border-1 rounded-3 mx-2 my-0 w-md-100 w-auto">
                    <div className="d-flex align-items-center justify-content-between w-100 px-3 py-1">
                        <div>
                            <div className="mt-2">
                                <h5 className="heading text-basic mb-0">300.000k</h5>
                            </div>
                            <div className="mb-2">
                                <span className="text text-hint caption-2 d-flex">Total Expenses</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-center text-primary rounded-circle" style={{backgroundColor: "#ECF6F4", width: "52px", height: "52px"}}>
                            <HiCreditCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-lg-flex justify-content-between p-3">
                <div className="border border-1 rounded-3 revenue-chart mb-3 mb-lg-0 bg-white">
                    <RevenueChart />
                </div>

                <div className="border border-1 rounded-3 expenses-chart bg-white">
                    <ExpensesChart />
                </div>
            </div>

            <div className="d-lg-flex justify-content-between p-3">
                <div className="border border-1 rounded-3 co2-chart mb-3 mb-lg-0 bg-white">
                    <Co2Chart />
                </div>

                <div className="border border-1 rounded-3 trips-chart bg-white">
                    <TripsChart />
                </div>
            </div>

            <div className="d-lg-flex justify-content-between p-3">
                <div className="border border-1 rounded-3 idle-chart mb-3 mb-lg-0 bg-white">
                    <IdleChart />
                </div>

                <div className="border border-1 rounded-3 fuel-chart bg-white">
                    <FuelChart />
                </div>

                <div className="border border-1 rounded-3 distance-chart bg-white">
                    <DistanceChart />
                </div>
            </div>
        </div>
    )
};

export default Analytics;