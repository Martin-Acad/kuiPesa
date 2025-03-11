import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

// Icône personnalisée pour le marqueur
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30], 
  iconAnchor: [15, 30], 
});

// Barre de recherche
const SearchField = () => {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      showMarker: true,
      showPopup: true,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
      searchLabel: "Rechercher un lieu...",
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map]);
  return null;
};


// Légende des tarifs
const Legend = () => {
  const map = useMap();
  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.innerHTML = `
        <div style="background: white; padding: 10px; border-radius: 5px; font-size: 14px;">
          <b>Nos Tarifs (Pétit Colis)</b>
          <hr style="margin: 5px 0;">
          <div><span style="display:inline-block; width: 15px; height: 15px; background: skyblue; margin-right: 5px;"></span> 700 CFA</div>
          <div><span style="display:inline-block; width: 15px; height: 15px; background: blue; margin-right: 5px;"></span> 1000 CFA</div>
          <div><span style="display:inline-block; width: 15px; height: 15px; background: gray; margin-right: 5px;"></span> 1500 CFA</div>
           <div><span style="display:inline-block; width: 15px; height: 15px; background: black; margin-right: 5px;"></span> 2000 CFA</div>
            <div><span style="display:inline-block; width: 15px; height: 15px; background: red; margin-right: 5px;"></span> 2500 CFA</div>
        </div>  
      `;
      return div;
    };

    legend.addTo(map);
    return () => legend.remove();
  }, [map]);
  return null;
};


// Bouton "📍 Ma Position"
const LocationButton = ({ setPosition, setShowMarker }) => {
  const map = useMap();

  const handleClick = () => {
    if (!navigator.geolocation) {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]); // Met à jour la position
        setShowMarker(true); // Affiche le marqueur
        map.flyTo([latitude, longitude], 15); // Zoom sur la position
      },
      () => {
        alert("Impossible de récupérer votre position.");
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "absolute",
        top: "10px",
        right: "25px",
        zIndex: 1000,
        background: "#007bff",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginRight: "120px",
      }}
    >
      📍 Ma Position
    </button>
  );
};

// Bouton "📋 Copier la Position"
const CopyLocationButton = ({ position, showMarker }) => {
  if (!showMarker) return null; // Afficher le bouton seulement si la position est visible

  const handleCopy = () => {
    const textToCopy = `${position[0]}, ${position[1]}`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("📋 Position copiée : " + textToCopy))
      .catch(() => alert("❌ Erreur lors de la copie"));
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        position: "absolute",
        top: "10px",
        right: "5px",
        zIndex: 1000,
        background: "#28a745",
        color: "white",
        padding: "8px 12px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      📋 Copier la Position
    </button>
  );
};


// Définition des polygones des arrondissements
const arrondissements = [
  {
    name: "Zone '1' de livraison à 700 CFA",
    coords: [
      [-4.250011, 15.278717],
      [-4.250460, 15.279140],
      [-4.250503, 15.281554],
      [-4.253975, 15.284306],
      [-4.255409, 15.285797],
      [-4.261090, 15.279569],
      [-4.263074, 15.277402],
      [-4.262192, 15.276351],
      [-4.260271, 15.275766],
      [-4.259496, 15.275562],
      [-4.258303, 15.274580],
      [-4.255376, 15.272992],
      [-4.252332, 15.266137],
      [-4.248684, 15.266512],
      [-4.246977, 15.268830],
      [-4.243858, 15.274012],
      [-4.250011, 15.278717],
    ],
    color: "skyblue",
  },
  {
    name: "Zone de livraison à 1000 CFA",
    coords: [
      [-4.229890, 15.259807],
      [-4.231035, 15.260402],
      [-4.231035, 15.261582],
      [-4.231492, 15.262636],
      [-4.232487, 15.262030],
      [-4.233004, 15.264355],
      [-4.234058, 15.265082],
      [-4.235291, 15.264787],
      [-4.236529, 15.263725],
      [-4.236369, 15.265259],
      [-4.236663, 15.266627],
      [-4.237538, 15.268285],
      [-4.248684, 15.266512],
      [-4.246977, 15.268830],
      [-4.243858, 15.274012],
      [-4.250011, 15.278717],
      [-4.238970, 15.292288],
      [-4.232010501360046, 15.280515253601294],
      [-4.231471, 15.278317],
      [-4.228901, 15.275409],
      [-4.227071, 15.273692],
      [-4.225712, 15.268146],
      [-4.224450, 15.262255],
      [-4.229890, 15.259807],
      // [],
      // [],
      // [], 
      // [],
      // [],
      // [],
      // [],
      // [],
    ],
    color: "blue",
  },

];

// Carte avec marqueur dynamique
const MapWithCircles = () => {
  const [position, setPosition] = useState(null); // Aucune position au chargement
  const [showMarker, setShowMarker] = useState(false); // Masquer le marqueur au début

  return (
    <div style={{ position: "relative" }}>
      <MapContainer center={[-4.254, 15.273]} zoom={15} style={{ height: "500px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Afficher les polygones des arrondissements */}
       {arrondissements.map((arr, index) => (
        <Polygon key={index} pathOptions={{ color: arr.color }} positions={arr.coords}>
           <Popup>{arr.name}</Popup>
         </Polygon>
       ))}

        {/* Affiche le marqueur uniquement si showMarker est true */}
        {showMarker && (
          <>
            <Marker position={position} icon={customIcon}>
              <Popup>📍 Vous êtes ici</Popup>
            </Marker>

            {/* Cercle 100m (Bleu) */}
            <Circle center={position} radius={10} color="blue" fillColor="blue" fillOpacity={0.2} />

            {/* Cercle 200m (Rouge) */}
            {/* <Circle center={position} radius={200} color="red" fillColor="red" fillOpacity={0.2} /> */}
          </>
        )}

        {/* Légende */}
         <Legend />

        {/* Barre de recherche */}
        <SearchField />

        {/* Boutons */}
        <LocationButton setPosition={setPosition} setShowMarker={setShowMarker} />
        <CopyLocationButton position={position} showMarker={showMarker} />
      </MapContainer>
    </div>
  );
};

export default MapWithCircles;




