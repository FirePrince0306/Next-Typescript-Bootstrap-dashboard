import { RiCalendarTodoLine } from 'react-icons/ri';

import HistoryTabs from "./shared/history-tabs";

const History = () => {
    return (
        <div className="vehicle-assignment">
            <div className="d-flex align-items-center justify-content-between p-2 m-1">
                <h5 className="heading text-basic mb-0">History</h5>

                <button className="button size-xl-medium appearance-filled fw-bold size-medium status-primary shape-rectangle icon-start transitions me-2">
                    <RiCalendarTodoLine className="fw-bold fs-5 me-2" />
                    <span>schedule Maintenance</span>
                </button>
            </div>
            <div className="divider2"></div>
            <HistoryTabs />
        </div>
    )
};

export default History;