"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    myLandbot: any; // Replace 'any' with proper type if available
    Landbot: any;
  }
}

const Landbot = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";

        script.onload = () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: "https://storage.googleapis.com/landbot.online/v3/H-1943151-A2K97LE37J9M20HI/index.json",
          });
        };

        document.head.appendChild(script);
      }
    };

    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return null;
};

export default Landbot;
