import {AiTwotoneEdit} from 'react-icons/ai';

const DetailsCard = () => {
    return (
        <>
            <div className="bg-white border border-1 rounded-3 vehicle-details-card">
                <div className="d-flex justify-content-between align-items-center py-3 px-4">
                    <h6 className="heading text-basic mb-0">Vehicle Details</h6>
                    <button className="button size-xl-small appearance-ghost size-medium status-basic shape-rectangle icon-start transitions">
                        <AiTwotoneEdit />
                        <span>edit</span>
                    </button>
                </div>

                <table className="table border">
                    <thead>
                        <tr>
                            <th className="p-0">
                                <p className="mb-0 p-3 text-end text-basic paragraph-2">Name</p>
                            </th>
                            <th className="p-0">
                                <p className="mb-0 p-3 text-basic paragraph">Type something</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="slot p-0 text-end">
                                <p className="mb-0 p-3 text-basic paragraph-2">Year</p>
                            </td>
                            <td className="slot p-0">
                                <p className="mb-0 p-3 text-basic paragraph">2015</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="slot p-0 text-end">
                                <p className="mb-0 p-3 text-basic paragraph-2">Model</p>
                            </td>
                            <td className="slot p-0">
                                <p className="mb-0 p-3 text-basic paragraph">Crafter</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="slot p-0 text-end">
                                <p className="mb-0 p-3 text-basic paragraph-2">Odometer</p>
                            </td>
                            <td className="slot p-0">
                                <p className="mb-0 p-3 text-basic paragraph">20.999m</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="slot p-0 text-end">
                                <p className="mb-0 p-3 text-basic paragraph-2">Color</p>
                            </td>
                            <td className="slot p-0">
                                <p className="mb-0 p-3 text-basic paragraph">Silver</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="slot p-0 text-end">
                                <p className="mb-0 p-3 text-basic paragraph-2">Vin</p>
                            </td>
                            <td className="slot p-0">
                                <p className="mb-0 p-3 text-basic paragraph">1G1ZT51806F128009</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default DetailsCard;