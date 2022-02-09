export type MaintenanceVisitProps = {
    vehicleName: String,
    workshop: boolean
};

const MaintenanceVisit: React.FC<MaintenanceVisitProps> = ({vehicleName, workshop}: MaintenanceVisitProps) => {
    return (
        <>
            <div className={`${workshop ? 'bg-success' : 'bg-warning'} p-2 pb-3 rounded-3 d-inline-block w-100`}>
                <span className="text-alternate subtitle-2">{vehicleName}</span>
            </div>
        </>
    )
};

export default MaintenanceVisit;