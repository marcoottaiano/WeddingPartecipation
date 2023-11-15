import React, { useEffect } from 'react'
import L from 'leaflet';

function Map() {
  useEffect(() => {
    // Crea la mappa e imposta le coordinate e il livello di zoom desiderati
    const map = L.map('map').setView([43.3245396311673, 12.5456975], 14);

    // Aggiungi un layer di mappa utilizzando OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);

    L.marker([43.3245396311673, 12.5456975]).addTo(map);

    return () => {
      map.off();
      map.remove();
    }

  }, [])

  function handleOnClick() {
    window.open('https://www.google.com/maps/place/Antica+Villa+Castelli/@43.3241845,12.5431226,17z/data=!3m1!4b1!4m10!3m9!1s0x132c39581c45e169:0x6833a4dc88c8064d!5m3!1s2023-11-20!4m1!1i2!8m2!3d43.3241806!4d12.5456975!16s%2Fg%2F11bw67jphr?entry=ttu', '_blank');
  }



  return (
    <div id="map" className='map-container' onClick={handleOnClick}></div>
  )
}

export default Map