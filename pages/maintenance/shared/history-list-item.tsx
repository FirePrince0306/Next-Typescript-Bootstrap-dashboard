import Image from 'next/image';

import { AiOutlineCheck } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';

export type HistoryListItemProps = {
    vehicleName: string,
    cost: string,
    status: String,
    tasks: {name: string, price: number}[]
};

import {useState} from 'react';

const HistoryListItem: React.FC<HistoryListItemProps> = ({vehicleName, cost, status, tasks}: HistoryListItemProps) => {
    const [isChecked, setIsChecked]=useState(false);
    const [showDetails, setShowDetails] = useState(false);

    function iconSrc(): string {
        return status === 'OUT OF SERVICE' ? require('/public/images/with status@2x8.png').default.src : require('/public/images/Group@2x.png').default.src;
    }

    function checkHandler(): void {
    }

    return (
        <>
            <div className={`d-flex align-items-center border border-1 rounded-3 pt-10 pb-10 vehicle-assigned mt-10 ${showDetails ? 'show' : 'hidden'}`}>
                <div className="checkbox d-flex justify-content-center ps-2" style={{width: "4.8%"}}>
                    <input style={{float: 'left', borderColor: 'red', border: '3px'}} type="checkbox" checked={isChecked} onChange={checkHandler}/>
                    <span className="wrapper" onClick={()=>{setIsChecked(!isChecked)}}>
                        <AiOutlineCheck className="text-white" />
                    </span>
                </div>

                <div className="d-flex align-items-center" style={{width: "22.6%"}}>
                    <Image className="image" src={iconSrc()} width="42" height="42" />
                    <div className="ms-2 ps-1">
                        <h6 className="heading text-basic fw-bold mb-0">{vehicleName}</h6>
                        <span className={`subtitle-2 me-1 ${status === 'OUT OF SERVICE' ? 'text-danger' : 'text-primary'}`}>{status}</span>
                        <span className="text-hint caption-2">VAN</span>
                    </div>
                </div>

                <div className="ps-3 d-flex flex-column " style={{width: "16%"}}>
                    <span className="text-basic subtitle">17.11.20 </span>
                    <span className="text-hint caption-2">18.00 PM - 21.00 PM</span>
                </div>

                <div className="d-flex align-items-center ps-3" style={{width: "30.6%"}}>
                    <p className="text-basic subtitle">{ tasks.map(x => x.name).join(', ')}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end" style={{width: "10%"}}>
                    <span className="text-basic subtitle">{cost}</span>
                </div>

                <div className="d-flex justify-content-end" style={{width: "12%"}}>
                    <button className="button size-xl-small appearance-ghost size-medium status-basic shape-rectangle icon-start transitions" onClick={()=>setShowDetails(!showDetails)} >
                        <span>details</span>
                        <FiChevronDown className="ms-1" />
                    </button>
                </div>

                <div className="d-flex justify-content-center" style={{width: "4%"}}>
                    <BsThreeDotsVertical className="text-hint"/>
                </div>
            </div>

            {
                showDetails ?
                    <div className="d-flex align-items-center border border-1 rounded-3 detail">
                        <div className="maintenance-details" style={{width: "43.4%"}}></div>

                        <div className="tasks pt-3 px-3 mx-2 pb-3 mb-2" style={{width: "56.6%"}}>
                            {
                                tasks.map((item, index) => {
                                    return <div key={"history-list-item-" + index} className="d-flex justify-content-between align-items-center py-2">
                                        <div className="task-item-name">
                                            <AiOutlineCheck className="text-hint me-1" />
                                            <span className="text-hint caption-2">{item.name}</span>
                                        </div>
                                        <div>
                                            <span className="text-basic subtitle-2">${item.price}</span>
                                        </div>
                                    </div>                                    
                                })
                            }
                            <div className="d-flex align-items-center justify-content-between">
                                <span className="text-hint caption-2 mt-4">Total</span>
                                <span className="text-basic subtitle">{cost}</span>
                            </div>
                        </div>
                    </div> : ''
            }
        </>
    )
};

export default HistoryListItem;