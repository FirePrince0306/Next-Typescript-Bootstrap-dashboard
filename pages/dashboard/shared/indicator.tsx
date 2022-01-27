import { GoAlert } from 'react-icons/go';

export type IndicatorProps = {
    val: number,
    label: String,
    type: String,
    adClass?: String
};

const Indicator: React.FC<IndicatorProps> = ({val, label, type, adClass}) => {
    return (
        <>
            <div className={"indicator p-1 position-relative bg-white justify-content-between w-100 d-flex flex-column align-items-center border border-1 rounded-3 " + adClass}>
                <div className="position-absolute">
                    <GoAlert className={`fs-5 ${type==="critical" ? "text-danger" : "text-warning"}`} />
                </div>
                <div className="mt-2">
                    <h5 className="heading text-basic mb-0">{val}</h5>
                </div>
                <div className="mb-2">
                    <span className="text text-hint caption-2 d-flex text-center">{label}</span>
                </div>
            </div>
        </>
    )
};

export default Indicator;
