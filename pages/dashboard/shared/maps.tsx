import { useEffect, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import * as leaflet from 'leaflet';
import Image from 'next/image';

import { GoAlert } from 'react-icons/go';

export type MapProps = {
  data: any
}

const center: L.LatLngExpression | undefined = [38.991709, -91.886109];
const zoom: number = 4;

function DisplayPosition({ map, data }: any) {    
    useEffect(()=> {
        if(data.trip !== null)
            map.setView(data.trip.currentPosition, 7)
        else
            map.setView(center, zoom)
    }, [data, map]);

    useEffect(()=> {
        if(map !== null) {
            map.addControl(leaflet.control.zoom({ position: 'bottomright'}))
        }
    });

    return (
        <></>
    )
}

const Map: React.FC<MapProps> = ({ data }) => {
    const [map, setMap]:[null, (map: any) => void] = useState<null>(null);

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                whenCreated={setMap}>
                    {
                        data.trip !== null ? <>
                            <Polyline pathOptions={{ color: '#0D8A72' }} positions={data.trip.travelledPath} />
                            <Polyline pathOptions={{ color: '#0D8A72', dashArray: '10, 10', dashOffset: '10' }} positions={data.trip.upcomingPath} />
                        </> : ''
                    }
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        data.markers?.map(({ lat, lng, status, type }: any, index: any) => {  
                            return (
                                <Marker
                                    key={`place-${index}`}
                                    position={[lat, lng]}
                                    icon={
                                        L.icon({
                                            iconUrl: require( `~/public/images/${type}-${status}-marker.png` ).default.src,
                                            iconSize: [44, 56],
                                            iconAnchor: [22, 56],
                                            popupAnchor: [0, -56]
                                        })
                                    }
                                >
                                    <Popup>
                                        <div className="map-popup d-flex flex-column mx-auto my-0 h-auto" >
                                            <div className="map-popup-header d-flex">
                                                <div className="map-popup-header-left d-flex align-items-center">
                                                    <h6 className="heading text-basic mb-0">{data.markers[index].vehicle.name}</h6>
                                                    <span className="text text-hint caption-2">{data.markers[index].type}</span>
                                                </div>
                                                <div className="map-popup-header-right d-flex align-items-center justify-content-end">
                                                    <span className="text1 text-danger caption-2">{data.markers[index].status}</span>
                                                </div>
                                            </div>

                                            <div className="divider2"></div>

                                            <div className="map-popup-body d-flex flex-wrap">
                                                <div className="d-flex flex-column justify-content-center align-items-center border border-1 rounded-3">
                                                    <span className="text text-hint caption">Vehicle Condition</span>
                                                    <span className={`text1 subtitle-2 ${data.markers[index].vehicle.condition.status === 'critical' ? 'text-danger' : data.markers[index].vehicle.condition.status === 'satisfactory' ? 'text-warning' : 'text-primary'}`}>{data.markers[index].vehicle.condition.status === 'critical' ? 'Critical' : data.markers[index].vehicle.condition.status === 'satisfactory' ? 'Satisfactory' : 'Good'}</span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center align-items-center border border-1 rounded-3">
                                                    <span className="text text-hint caption">Number of Errors</span>
                                                    <span className="text1 text-danger subtitle-2">{Number(!data.markers[index].vehicle.indicators.engine) + Number(!data.markers[index].vehicle.indicators.battery)}</span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center align-items-center border border-1 rounded-3 mb-0">
                                                    <div className="d-flex">
                                                        <Image className="image me-1" alt="icon" src={require('~/public/images/speed-1@3x.svg').default.src} width="14" height="14" />
                                                        <span className="text text-hint caption">Average Speed</span>
                                                    </div>
                                                    <span className="pt-1 text-basic subtitle-2">100kmh</span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center align-items-center border border-1 rounded-3 mb-0">
                                                    <div className="d-flex">
                                                        <Image className="image me-1" alt="icon" src={require('~/public/images/fuel@3x.svg').default.src} width="14" height="14" />
                                                        <span className="text text-hint caption">Fuel Consumption</span>
                                                    </div>
                                                    <span className="pt-1 text-basic subtitle-2">15L / 100km</span>
                                                </div>
                                            </div>

                                            {
                                                !data.markers[index].vehicle.indicators.engine || !data.markers[index].vehicle.indicators.battery || data.markers[index].vehicle.indicators.gas < 80 ?
                                                    <div className="divider2"></div> : ''
                                            }

                                            <div className="d-flex pb-3">
                                                {
                                                    !data.markers[index].vehicle.indicators.engine || !data.markers[index].vehicle.indicators.battery || data.markers[index].vehicle.indicators.gas < 80 ?
                                                        <>
                                                            <div className="d-flex pt-3 pb-1 ps-3 ms-2">
                                                                <GoAlert className="text-danger fs-5 mx-2" />
                                                                {
                                                                    !data.markers[index].vehicle.indicators.engine ? <div className="d-flex flex-column">
                                                                        <span className="text-danger caption-2">Engine critical state</span>
                                                                        <span className="text-danger caption">Please check fuel pump</span>
                                                                    </div> : ''
                                                                }
                                                                {
                                                                    !data.markers[index].vehicle.indicators.battery ? <div className="d-flex flex-column">
                                                                        <span className="text-danger caption-2">Low battery</span>
                                                                        <span className="text-danger caption">Please recharge battery</span>
                                                                    </div> : ''
                                                                }
                                                                {
                                                                    data.markers[index].vehicle.indicators.gas < 80 ? <div className="d-flex flex-column">
                                                                        <span className="text-danger caption-2">Critical fuel level</span>
                                                                        <span className="text-danger caption">Please refuel</span>
                                                                    </div> : ''
                                                                }
                                                            </div>
                                                        </>
                                                    : ''
                                                }
                                            </div>

                                            <div className="divider2"></div>

                                            <div className="map-popup-footer d-flex">
                                                <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start w-50 fw-bold me-10">
                                                    <div className="icon btn-icon"></div>
                                                    <span>ALL EVENTS</span>
                                                </button>
                                                <button className="button size-xl-medium appearance-filled size-medium status-basic shape-rectangle icon-start w-50 fw-bold">
                                                    <div className="icon btn-icon"></div>
                                                    <span>TRIP</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            )
                    })}
            </MapContainer>
        ),
    [data])

    return (
        <>
            {map ? <DisplayPosition map={map} data={data} /> : null}
            {displayMap}
        </>
    )
}

export default Map