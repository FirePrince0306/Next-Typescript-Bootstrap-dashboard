import { useState } from 'react';
import dynamic from "next/dynamic";
import classNames from "classnames";
import {Checkbox, FormControlLabel, makeStyles, createStyles, Theme } from "@material-ui/core";
import MapStyle from "~/styles/styles.js";

import { AiOutlineCheck } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { IoOptionsSharp } from 'react-icons/io5';
import { AiFillSetting } from 'react-icons/ai';
import { RiListUnordered } from 'react-icons/ri';

import { Trip } from '~/components/features/common';
import { TripsService } from '~/components/utils/trips.service';

import VehicleTabs from '~/components/pages/dashboard/vehicle-tabs';
import TripDetails from '~/components/pages/dashboard/trip-details';
import Indicator from '~/components/pages/dashboard/indicator';

const MapWidget = dynamic(() => import('~/components/pages/dashboard/maps'), {
  	ssr: false
});

let styles: any = (theme: Theme) => createStyles({
	MapStyle
});

let useStyles = makeStyles(styles);

const VehicleOverview = () => {
	const [activeVehicle, setActiveVehicle] = useState(true);
	const [activeVehicleId, setActiveVehicleId] = useState(-1);
	const [currentVehicle, setCurrentVehicle] = useState<Trip | null>(null);
	const [activeIndicator, setActiveIndicator ] = useState(true);
	const [checked, setChecked] = useState([1, 2, 3, 4]);
	const classes = useStyles();
	const wrapperDiv = classNames(
		classes.checkboxAndRadio,
		classes.checkboxAndRadioHorizontal
	);

	const handleToggle = (value:number) => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
	
		if (currentIndex === -1) {
		  newChecked.push(value);
		} else {
		  newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};
	
	let MyTripsService:TripsService = new TripsService();
	let tempMarkers = MyTripsService.getMarkersData();

	const [markers, setMarkers] = useState<any>(tempMarkers);

	const handleActiveVehicleId = (id: number) => {
		setActiveVehicleId(id);
	};

	const handleCurrentVehicle = (trip: Trip | null) => {
		setCurrentVehicle(trip);
	};

	const handleMarkers = (markers: any) => {
		setMarkers(markers);
	};

	return (
		<>
			<div className="d-flex px-1 px-md-0 h-100 min-vh-100 vehicle-overview">
				{
					activeVehicle ? <>
						<div className="active-vehicles">
							<div className="d-flex align-items-center justify-content-between p-3">
								<h6 className="heading text-basic mb-0">Active Vehicles</h6>
								<span onClick={() => { setActiveVehicle(false); setCurrentVehicle(null); setMarkers(tempMarkers) }} >
									<IoMdClose />
								</span>
							</div>
							<div className="divider2"></div>
							<div className="d-flex vehicle-value align-items-center">
								<input className="input size-xl-medium size-medium status-basic shape-rectangle	" placeholder="Enter Value" type="text" />
								
								<span className="icon d-flex pe-1 me-3">
									<IoOptionsSharp />
								</span>
							</div>
							<div className="divider2"></div>
							<VehicleTabs
								handleActiveVehicleId={handleActiveVehicleId}
								handleCurrentVehicle={handleCurrentVehicle}
								handleMarkers={handleMarkers}
								id={activeVehicleId}
							/>
						</div>
						<div className="divider3"></div>
					</> : ''
				}
				{
					activeVehicleId > -1 && currentVehicle !== null ? <>
						<TripDetails
							handleActiveVehicleId={handleActiveVehicleId}
							handleMarkers={handleMarkers}
							trip={currentVehicle}
						/>
						<div className="divider3"></div>
					</> : ''
				}
				<div className="flex-grow-1 zindex-1 position-relative">
					<div className="indicators d-flex justify-content-between position-absolute w-100">
						{
							activeVehicle ? '' :
								<button className="button size-xl-large appearance-filled size-medium status-control shape-rectangle icon-start transitions fs-4 me-0" onClick={()=> setActiveVehicle(true)}>
									<RiListUnordered />
									<span className="d-none">Button</span>
								</button>
						}
						<Indicator val={2} label={"Vehicles with errors"} type={"critical"} />
						<Indicator val={5} label={"Vehicles with warnings"} type={"warning"} />
						<Indicator val={1} label={"Side route"} type={"warning"} />
						<Indicator val={3} label={"Being late"} type={"warning"} />
						{
							activeIndicator ? '' :
								<button className="button size-xl-large appearance-filled size-medium status-control shape-rectangle icon-start transitions fs-4 me-0" onClick={()=> setActiveIndicator(true)}>
									<AiFillSetting />
									<span className="d-none">Button</span>
								</button>
						}
					</div>
					<MapWidget
						data = {{
							trip: currentVehicle,
							markers: markers
						}}
					/>
				</div>
				{
					activeIndicator ?
						<div className="indicators-sidebar h-100">
							<div className="indicators-header d-flex align-items-center justify-content-between p-3">
								<h6 className="heading text-basic mb-0">Indicators</h6>
								<span onClick={() => {setActiveIndicator(false)}} className="d-flex align-items-center">
									<IoMdClose />
								</span>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={-1}
											onClick={() => handleToggle(1)}
											checked={
												checked.indexOf(1) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Errors vehicles"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={2}
											onClick={() => handleToggle(2)}
											checked={
												checked.indexOf(2) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Warning vehicles"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={3}
											onClick={() => handleToggle(3)}
											checked={
												checked.indexOf(3) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Side Trip"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={4}
											onClick={() => handleToggle(4)}
											checked={
												checked.indexOf(4) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Being Late"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={5}
											onClick={() => handleToggle(5)}
											checked={
												checked.indexOf(5) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Late Delivery"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={6}
											onClick={() => handleToggle(6)}
											checked={
												checked.indexOf(6) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="Accidens"
								/>
							</div>
							<div className="divider2"></div>
							<div className={wrapperDiv}>
								<FormControlLabel
									control={
										<Checkbox
											tabIndex={7}
											onClick={() => handleToggle(7)}
											checked={
												checked.indexOf(7) !== -1 ? true : false
											}
											checkedIcon={<AiOutlineCheck className={classes.checkedIcon} />}
											icon={<AiOutlineCheck className={classes.uncheckedIcon} />}
											classes={{ checked: classes.checked }}
										/>
									}
									classes={{ label: classes.label }}
									label="High Consumption"
								/>
							</div>
						</div> : ''
				}
			</div>
		</>
)};

export default VehicleOverview;
