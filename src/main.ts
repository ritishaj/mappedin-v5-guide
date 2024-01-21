import {
  getVenueMaker,
  showVenue,
  TGetVenueMakerOptions,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";

const options: TGetVenueMakerOptions = {
  mapId: "659efcf1040fcba69696e7b6",
  key: "65a0422df128bbf7c7072349",
  secret: "5f72653eba818842c16c4fdb9c874ae02100ffced413f638b7bd9c65fd5b92a4",
};

async function init() {
  const venue = await getVenueMaker(options);
  const mapView = await showVenue(document.getElementById("app")!, venue);
  mapView.addInteractivePolygonsForAllLocations(); // if user hovers over a polygon , it will indicate that it's clickable

  
}

init();