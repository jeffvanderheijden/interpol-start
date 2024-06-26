import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";
import arcsData from "./data";
import ConnectedBots from "./../ConnectedBots/ConnectedBots";
import globeImage from "./../../assets/images/earth_bw.jpg";

const GlobeComp = () => {
    const globeEl = useRef();

    useEffect(() => {
        globeEl.current.pointOfView({ lat: 46.7749, lng: 40.4194, altitude: 2 });
        // Auto-rotate
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.6;
        // Disable zoom
        globeEl.current.controls().enableZoom = false;
    }, [globeEl]);

    return (
        <div style={{ position: 'absolute', background: "#000", top: '30px', left: 0, zIndex: 2, opacity: .8, width: '100%', height: '100%' }}>
            <Globe
                height={368}
                width={398}           
                ref={globeEl}
                autorotate={true}
                globeImageUrl={globeImage}
                atmosphereColor={"#ADFF2F"}
                backgroundColor={"rgba(0,0,0,0)"}
                // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                arcsData={arcsData}
                arcColor={"color"}
                arcDashGap={(d) => 1 - (d.stroke - 0.1)}
                arcDashAnimateTime={(d) => 5000}
                arcStroke={"stroke"}
                labelLat={(d) => d.lat}
                labelLng={(d) => d.lng}
                labelText={(d) => d.name}
                labelSize={(d) => 0.5 + d.size}
                labelDotRadius={(d) => 0.5 + d.size}
                labelColor={() => "rgba(255, 165, 0, 0.75)"}
                labelResolution={2}
                hexBinPointWeight="size"
                hexAltitude={(d) => d.sumWeight - 0.1 + 0.05}
                hexBinResolution={4}
                hexBinMerge={true}
                enablePointerInteraction={false}
            />
            <ConnectedBots />
        </div>
    )
}

export default GlobeComp;