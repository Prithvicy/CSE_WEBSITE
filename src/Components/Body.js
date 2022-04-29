import React from "react";
import { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import "./Body.css";

const Body = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: myRef.current,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <div id="app-background" className="app">
            <header className="app__header" ref={myRef}>
                <div className="app__content">
                    <div>
                    <h1>St. Josephs College of Engineering</h1>
                    </div>
                    <div class="wrapper">
                        <div class="typing-demo">
                            Computer Science Department
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Body;
