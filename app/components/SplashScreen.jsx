"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

const SplashScreen = ({ finishloading }) => {
  const [isloading, setisloading] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishloading(),
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 1,
      duration: 4000,
      easing: "linear",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setisloading(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Image id="logo" src="/assets/Rocket.gif" width={100} height={100} alt="logo" unoptimized = {false} />
    </div>
  );
};

export default SplashScreen;
