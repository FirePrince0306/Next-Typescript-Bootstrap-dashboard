import { useState, useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const L = typeof window === 'undefined' ? {} : require('leaflet');
const center: L.LatLngExpression | undefined = [41.148630, -110.486021];
const zoom: number = 7;

const tripCoords: [number, number][] = [
    [40.683055, -111.825476],
    [40.807519, -111.407743],
    [40.960830, -111.456866],
    [41.247660, -111.062614],
    [41.315487, -110.7201238],
    [41.397952, -110.187286],
    [41.555374, -109.900268],
    [41.527621, -109.414123],
    [41.602629, -109.217742],
];

function DisplayPosition({ map }: any) {
    useEffect(()=> {
        if(map !== null) {
            map.addControl(L.control.zoom({ position: 'bottomright'}));
        }
    }, []);

    return (
        <></>
    )
}

const TripMap = () => {
    const [map, setMap]:[null, (map: any) => void] = useState<null>(null);

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={center}
                zoom={zoom}
                style={{ height: '100%', width: '100%' }}
                zoomControl={false}
                whenCreated={setMap}>
                <Polyline pathOptions={{ color: '#0D8A72' }} positions={tripCoords} />
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        ), []);

    return (
        <>
            {(typeof window !== 'undefined') && map ? <DisplayPosition map={map} /> : null}
            {(typeof window !== 'undefined') ? displayMap : ''}
        </>
    )
}

export default TripMap;