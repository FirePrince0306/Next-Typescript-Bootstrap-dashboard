import Image from 'next/image';

import { IoNavigateSharp } from 'react-icons/io5';

export type CommonInformationProps = {
};

const CommonInformation: React.FC<CommonInformationProps> = ({}: CommonInformationProps) => {
    return (
        <>
            <div className="bg-white border border-1 rounded-3 common-information">
                <div className="d-flex align-items-center pt-4 px-4 ms-1 pb-1">
                    <Image className="image me-3" alt="icon" src={require("~/public/images/Group@2x32.png").default.src} width="60" height="60" />
                    <div>
                        <h5 className="heading text-basic mb-0">Vehicle Name</h5>
                        <div>
                            <span className="text-hint caption me-1">Vin:</span>
                            <span className="text-basic caption-2 me-2">JTDKBRFU9J30593O7</span>
                            <span className="text-hint caption m-1">Licence Plate:</span>
                            <span className="text-basic caption-2 me-2">232456</span>
                        </div>
                    </div>
                </div>

                <div className="divider2"></div>

                <div className="d-flex common-information-body">
                    <div className="d-flex flex-wrap">
                        <div className="pt-3 ps-4 w-50 h-50">
                            <span className="text-basic subtitle-2">Status</span><br/>
                            <div className="d-inline-block border border-1 rounded-3 px-2 py-1">
                                <IoNavigateSharp className="text-primary me-1"/>
                                <span className="text-primary subtitle">On Route</span>
                            </div>
                        </div>
                        <div className="pt-3 ps-4 w-50 h-50 d-flex flex-column">
                            <span className="text-basic subtitle-2">Type</span>
                            <span className="text-hint caption-2">TRUCK</span>
                        </div>
                        <div className="pt-3 ps-4 w-50 h-50 d-flex flex-column">
                            <span className="text-basic subtitle-2">Domain</span>
                            <span className="text-hint caption-2">DETAIL</span>
                        </div>
                        <div className="pt-3 ps-4 w-50 h-50 d-flex flex-column">
                            <span className="text-basic subtitle-2">DRIVER</span>
                            <span className="text-hint caption-2">JOHN DOE</span>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="my-2 p-2 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex">
                                <Image className="image me-1" alt="icon" src={require('~/public/images/fuel@3x.svg').default.src} width="14" height="14" />
                                <span className="text text-hint caption">Fuel Consumption</span>
                            </div>
                            <span className="pt-1 text-basic subtitle-2">15L / 100km</span>
                        </div>
                        <div className="my-2 p-2 border border-1 rounded-3 d-flex flex-column align-items-center justify-content-center">
                            <div className="d-flex">
                                <Image className="image me-1" alt="icon" src={require('~/public/images/speed-1@3x.svg').default.src} width="14" height="14" />
                                <span className="text text-hint caption">Average Speed</span>
                            </div>
                            <span className="pt-1 text-basic subtitle-2">100kmh</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default CommonInformation;