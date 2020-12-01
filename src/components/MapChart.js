import React, { memo, useContext } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import { ApiContext } from "../ContextAPI/GlobalContext";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const MapChart = ({ setTooltipContent, setCurrentCountry }) => {

  const apiContext = useContext(ApiContext)
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  onClick={() => {
                    let { NAME } = geo.properties;
                    switch (NAME) {
                      case "United States of America":
                        {
                          NAME = "USA"
                          break;
                        }
                        case "United Kingdom":
                          {
                            NAME = "UK"
                            break;
                          }
                        case "Dem. Rep. Congo":
                          {
                            NAME = "DRC"
                            break;
                          }
                    
                      default:
                        break;
                    }
                    apiContext.callApi(NAME);
                    setCurrentCountry(NAME);
                    console.log(NAME)
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#2eb82e",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);