import { RiMapPinFill } from 'react-icons/ri';

const Trips = () => {
    return (
        <>
            <div className="border border-1 rounded-3 p-3 mb-2 active-trip">
                <div className="d-flex align-items-center">
                    <div className="me-2 pe-1">
                        <img className="image" width="36" height="36" alt="car" src="data:image/png;base64,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" />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="heading text-primary mb-0">AT 5863</h5>
                        </div>
                        <div className="text-end">
                            <span className="text text-primary subtitle-2">LIVE</span>
                            <p className="text1 text-primary paragraph-2 mb-0">#786473</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">1961 Chain Bridge Rd, Tysons, VA</span>
                            <p className="text-hint paragraph-2 mb-0">17.06.20  2:00PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-disabled" />
                        </div>
                        <div className="ms-3">
                            <span className="text-hint subtitle">1600 Washington St E, Charleston</span>
                            <p className="text-disabled paragraph-2 mb-0">17.06.20  8:00PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-1 rounded-3 p-3 mb-2">
                <div className="d-flex align-items-center">
                    <div className="me-2 pe-1">
                        <img className="image" width="36" height="36" alt="car" src="data:image/png;base64,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" />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="heading text-basic mb-0">GT 1256</h5>
                        </div>
                        <div className="text-end">
                            <span className="text text-success subtitle-2">COMPLETED</span>
                            <p className="text1 text-success paragraph-2 mb-0">#125963</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">2226 Park Rd, Charlotte, NC</span>
                            <p className="text-hint paragraph-2 mb-0">15.06.20 1:00PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">2301 Holmes St, Kansas City</span>
                            <p className="text-hint paragraph-2 mb-0">16.06.20 5:00PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-1 rounded-3 p-3 mb-2">
                <div className="d-flex align-items-center">
                    <div className="me-2 pe-1">
                        <img className="image" width="36" height="36" alt="car" src="data:image/png;base64,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" />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="heading text-basic mb-0">WR 3642</h5>
                        </div>
                        <div className="text-end">
                            <span className="text text-warning subtitle-2">WITH DELAY</span>
                            <p className="text1 text-warning paragraph-2 mb-0">#786473</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">706 NW 3rd St, Homestead, FL</span>
                            <p className="text-hint paragraph-2 mb-0">01.05.20 1:00PM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">123 NW 3rd St, Homestead, FL</span>
                            <p className="text-hint paragraph-2 mb-0">01.05.20 2:00PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-1 rounded-3 p-3">
                <div className="d-flex align-items-center">
                    <div className="me-2 pe-1">
                        <img className="image" width="36" height="36" alt="car" src="data:image/png;base64,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" />
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="heading text-basic mb-0">WO 5361</h5>
                        </div>
                        <div className="text-end">
                            <span className="text text-danger subtitle-2">FAILED</span>
                            <p className="text1 text-danger paragraph-2 mb-0">#786473</p>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-hint" />
                        </div>
                        <div className="ms-3">
                            <span className="text-basic subtitle">310 Palmetto St, Bunkie, LA</span>
                            <p className="text-hint paragraph-2 mb-0">15.07.20 1:00AM</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center py-2">
                        <div className="ps-4 ms-3">
                            <RiMapPinFill className="text-danger" />
                        </div>
                        <div className="ms-3">
                            <span className="text-danger subtitle">256 Abbey St, Bunkie, LA</span>
                            <p className="text-danger paragraph-2 mb-0">15.07.20 6:00PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Trips;