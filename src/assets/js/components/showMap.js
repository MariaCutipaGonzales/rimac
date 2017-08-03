const showMap = () => {
    const mapa = $('<div id="map"></div>');
    let latitud, longitud;
    $( _ =>{
        //Crea el mapa
        const map = new GMaps({
            div: '#map',
            lat: -12.043333,
            lng: -77.028333
        });
        state.garage.forEach((elem)=> {
                map.addMarker({
                    lat: elem.latitud,
                    lng: elem.longitud,
                    title: elem.nombre,
                    infoWindow: {
                        content: `<div style="color:#212121;">
                                <strong>TALLER ${elem.nombre}</strong>
                                <ul>
                                    <li>Dirección: ${elem.direccion}</li>
                                    <li><a href="tel:+51">Teléfono: ${elem.telefono}</a></li>
                                </ul>
                              </div>`
                    }
                });
        });

        //Determina la ubicación actual
        GMaps.geolocate({
            success: function(position) {
                latitud = position.coords.latitude;
                longitud = position.coords.longitude;
                map.setCenter(latitud, longitud);

                //Funcion que añade marcador de la ubicacion actual
                map.addMarker({
                    lat: latitud,
                    lng: longitud,
                    color: 'blue',
                    infoWindow: {
                        content: '<div style="color:#212121;"><strong>Tu ubicación:</strong><p>lima</p></div>'
                    }
                });
            },
            error: function(error) {
                alert('Geolocalización fallada: '+error.message);
            },
            not_supported: function() {
                alert("Tu navegador no soporta la API geolocation");
            }
        });
    });
    return mapa;
}

const showMarkerSelected = (district) => {
    // mapContainer.empty();
    const mapa = $('<div id="map"></div>');
    let latitud, longitud;
    $( _ =>{
        //Crea el mapa
        const map = new GMaps({
            div: '#map',
            lat: -12.043333,
            lng: -77.028333
        });
        state.garage.forEach((elem)=> {
            if (district == elem.distrito) {
                map.addMarker({
                    lat: elem.latitud,
                    lng: elem.longitud,
                    title: elem.nombre,
                    infoWindow: {
                        content: `<div style="color:#212121;">
                                <strong>TALLER ${elem.nombre}</strong>
                                <ul>
                                    <li>Dirección: ${elem.direccion}</li>
                                    <li><a href="tel:+51">Teléfono: ${elem.telefono}</a></li>
                                </ul>
                              </div>`
                    }
                });
            }else {
                console.log("aki");
            }
        });

        //Determina la ubicación actual
        GMaps.geolocate({
            success: function(position) {
                latitud = position.coords.latitude;
                longitud = position.coords.longitude;
                map.setCenter(latitud, longitud);

                //Funcion que añade marcador de la ubicacion actual
                map.addMarker({
                    lat: latitud,
                    lng: longitud,
                    color: 'blue',
                    infoWindow: {
                        content: '<div style="color:#212121;"><strong>Tu ubicación:</strong><p>lima</p></div>'
                    }
                });
            },
            error: function(error) {
                alert('Geolocalización fallada: '+error.message);
            },
            not_supported: function() {
                alert("Tu navegador no soporta la API geolocation");
            }
        });
    });
    return mapa;
};

