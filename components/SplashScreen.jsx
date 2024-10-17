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
    <div className="flex items-center justify-center w-full h-screen bg-splash bg-cover">
      <Image id="logo" src="/assets/iskon.png" width={300} height={300} alt="logo" unoptimized = {false} className="animate-pulse"/>
    </div>
  );
};

export default SplashScreen;
