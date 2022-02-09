import {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { IoMdClose } from 'react-icons/io';
import { AiOutlineCheck } from 'react-icons/ai';

const options1 = [
    { value: 'ab-1512', label: 'AB 1512' },
    { value: 'vb-5432', label: 'VB 5432' }
]

const options2 = [
    { value: 'workshop-a', label: 'Workshop A' },
    { value: 'workshop-b', label: 'Workshop B' }
]

export type MaintenanceProps = {
    modalHandler: () => void;
    state: boolean
};

const MaintenanceModal: React.FC<MaintenanceProps> = ({ modalHandler, state }) => {
    const [isChecked1, setIsChecked1]=useState(false);
    const [isChecked2, setIsChecked2]=useState(false);

    function datePickHandler(): void {
    }

    function checkHandler(): void {
    }

    return (
        <>
            <Modal show={state}>
                <Modal.Header closeButton onClick={() => modalHandler()}>
                    <Modal.Title className="heading text-basic h6">Schedule Maintenance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="">
                        <label className="text-hint label mb-2">VEHICLE</label>
                        <Select
                            className="select-vehicle mb-3 mb-md-0"
                            options={options1}
                            isSearchable={true}
                            id="vehicle-selector"
                            instanceId="vehicle-selector"
                            inputId="vehicle-selector"
                            placeholder="Select Vehicle"
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                    </div>
                    <div className="d-flex mt-4">
                        <div className="w-50">
                            <label className="text-hint label mb-2">WORKSHOP</label>

                            <Select
                                className="me-2 select-workshop mb-3 mb-md-0"
                                options={options2}
                                isSearchable={true}
                                id="workshop-selector"
                                instanceId="workshop-selector"
                                inputId="workshop-selector"
                                placeholder="Select Workshop"
                                components={{
                                    IndicatorSeparator: () => null
                                }}
                            />
                        </div>
                        <div className="w-50">
                            <label className="text2 text-hint label mb-2">MAINTENANCE</label>
                            <div className="checkbox d-flex align-items-center" onClick={()=>{setIsChecked1(!isChecked1)}}>
                                <input className="w-100" type="checkbox" checked={isChecked1} onChange={checkHandler}/>
                                <span className="wrapper me-2">
                                    <AiOutlineCheck className="text-white" />
                                </span>
                                <span className="text-basic label">Regular Inspection</span>
                            </div>
                            <div className="checkbox d-flex align-items-center mt-2" onClick={()=>{setIsChecked2(!isChecked2)}}>
                                <input className="w-100" type="checkbox" checked={isChecked2} onChange={checkHandler}/>
                                <span className="wrapper me-2">
                                    <AiOutlineCheck className="text-white" />
                                </span>
                                <span className="text-basic label">Unscheduled Inspection</span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <div className="w-50">
                            <label className="text3 text-hint label mb-2">DATE</label>
                            <DatePicker
                                className="input status-basic border border-1 rounded-3 px-3 py-2"
                                placeholderText="Enter date"
                                readOnly={false}
                                onChange={datePickHandler}
                            />
                        </div>

                        <div className="w-50">
                            <div className="mt-4 pt-1">
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>8:00 AM</span>
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>10:00 AM</span>
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>12:00 PM</span>
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>14:00 PM</span>
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>16:00 PM</span>
                                <span className="border border-1 rounded-3 text-hint caption px-1 py-1 d-inline-block me-2 mb-2 w-33 text-center" style={{width: "68px"}}>18:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-3 d-flex flex-column">
                        <label className="text4 text-hint label mb-2">COMMENT</label>
                        <input className="input size-xl-medium size-medium status-basic shape-rectangle border-1" placeholder="" type="text" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start transitions fw-bold" onClick={() => modalHandler()}>
                        <IoMdClose className="me-1" />Cancel
                    </Button>
                    <Button variant="primary" className="button1 size-xl-medium appearance-filled size-medium status-primary shape-rectangle icon-start transitions fw-bold" onClick={() => modalHandler()}>
                        <AiOutlineCheck className="me-1" />Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default MaintenanceModal;