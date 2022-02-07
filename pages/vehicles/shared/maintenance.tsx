export type MaintenanceProps = {
};

const Maintenance: React.FC<MaintenanceProps> = ({}: MaintenanceProps) => {
    return (
        <>
            <div className="bg-white border border-1 rounded-3 w-100 w-lg-50 maintenance">
                <div className="p-3">
                    <h6 className="heading text-basic">Maintenance</h6>
                </div>

                <div className="divider2"></div>

                <div className="d-flex py-2 my-1 px-2">
                    <div className="d-flex flex-column align-items-center justify-content-center mx-2 py-2 px-2 w-50 bg-pink">
                        <span className="text-danger subtitle-2" style={{fontSize: "18px"}}>5</span>
                        <span className="text-hint caption">Overdue</span>
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center mx-2 border border-1 rounded-3 py-2 px-2 w-50">
                        <span className="text-basic subtitle-2" style={{fontSize: "18px"}}>3</span>
                        <span className="text-hint caption">Due Soon</span>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex align-items-center py-3 ps-3 ms-1">
                    <div className="p-2 me-3 bg-pink">
                        <img className="image" src={require("~/public/images/brake@3x-red.svg").default.src} width="30" height="30" />
                    </div>
                    <div>
                        <span className="text text-basic subtitle-2 mb-0">Brakes Repair</span>
                        <p className="text1 text-hint paragraph-2 mb-0">2 mounth overdue</p>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex align-items-center py-3 ps-3 ms-1">
                    <div className="p-2 me-3 bg-pink">
                        <img className="image" src={require("~/public/images/filter@3x-red.svg").default.src} width="30" height="30" />
                    </div>
                    <div>
                        <span className="text2 text-basic subtitle-2 mb-0">Filter Replacement</span>
                        <p className="text3 text-hint paragraph-2 mb-0">1 mounth overdue</p>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex align-items-center py-3 ps-3 ms-1">
                    <div className="p-2 me-3 bg-pink">
                        <img className="image" src={require("~/public/images/lift@3x-red.svg").default.src} width="30" height="30" />
                    </div>
                    <div>
                        <span className="text4 text-basic subtitle-2 mb-0">Planned Inspection</span>
                        <p className="text5 text-hint paragraph-2 mb-0">4 mounth overdue</p>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex align-items-center py-3 ps-3 ms-1">
                    <div className="p-2 me-3 bg-pink">
                        <img className="image" src={require("~/public/images/tire@3x-red.svg").default.src} width="30" height="30" />
                    </div>
                    <div>
                        <span className="text4 text-basic subtitle-2 mb-0">Rotate Tires</span>
                        <p className="text5 text-hint paragraph-2 mb-0">3 mounth overdue</p>
                    </div>
                </div>

                <div className="divider2"></div>
            </div>
        </>
    )
};

export default Maintenance;