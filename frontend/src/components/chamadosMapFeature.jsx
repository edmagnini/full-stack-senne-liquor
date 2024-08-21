import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ChamadosMapFeature({ hospitals }) {
    return (
        <MapContainer center={[-22.9, -47.06]} zoom={13} style={{ height: "900px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {hospitals.map(hospital => (
                <Marker
                    key={hospital.NR_CHAMADO}
                    position={[parseFloat(hospital.HOSPITAL_LATITUDE), parseFloat(hospital.HOSPITAL_LONGITUDE)]}
                >
                    <Popup>
                        {hospital.HOSPITAL_NOME} <br /> {hospital.NM_PACIENTE}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default ChamadosMapFeature;
