const KeyIndicators = () => {
    return (
        <>
            <div className="bg-white border border-1 rounded-3 ms-3 p-4 key-indicators">
                <h6 className="heading text-basic mb-4" >Key Indicators</h6>
                <div className="d-flex">
                    <div className="w-50 me-3">
                        <div className="d-flex align-items-center py-2 px-3 border border-1 rounded-3 mb-3">
                            <div className="p-2 me-3" style={{backgroundColor: "#ECF6F4"}}>
                                <img className="image" src={require("~/public/images/motor@3x-green.svg").default.src} width="30" height="30" />
                            </div>
                            <div>
                                <h6 className="heading text-basic mb-0">Ok</h6>
                                <p className="text text-hint paragraph mb-0">Engine</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center py-2 px-3 border border-1 rounded-3">
                            <div className="p-2 me-3" style={{backgroundColor: "#ECF6F4"}}>
                                <img className="image" src={require("~/public/images/motor@3x-green.svg").default.src} width="30" height="30" />
                            </div>
                            <div>
                                <h6 className="heading text-basic mb-0">Ok</h6>
                                <p className="text text-hint paragraph mb-0">Engine</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-50">
                        <div className="d-flex align-items-center py-2 px-3 border border-1 rounded-3 mb-3">
                            <div className="p-2 me-3" style={{backgroundColor: "#ECF6F4"}}>
                                <img className="image" src={require("~/public/images/motor@3x-green.svg").default.src} width="30" height="30" />
                            </div>
                            <div>
                                <h6 className="heading text-basic mb-0">Ok</h6>
                                <p className="text text-hint paragraph mb-0">Engine</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center py-2 px-3 border border-1 rounded-3">
                            <div className="p-2 me-3" style={{backgroundColor: "#ECF6F4"}}>
                                <img className="image" src={require("~/public/images/motor@3x-green.svg").default.src} width="30" height="30" />
                            </div>
                            <div>
                                <h6 className="heading text-basic mb-0">Ok</h6>
                                <p className="text text-hint paragraph mb-0">Engine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default KeyIndicators;