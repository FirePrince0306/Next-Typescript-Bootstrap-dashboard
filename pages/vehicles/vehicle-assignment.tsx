import AssignmentTabs from "./shared/assignment-tabs";

const VehicleAssignment = () => {
    return (
        <div className="vehicle-assignment">
            <div className="d-flex align-items-center justify-content-between p-3">
                <h5 className="heading text-basic mb-0">Assign Vehicles</h5>
            </div>
            <div className="divider2"></div>
            <AssignmentTabs />
        </div>
    )
};

export default VehicleAssignment;