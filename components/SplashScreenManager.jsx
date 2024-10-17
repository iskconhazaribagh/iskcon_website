"use client"
import React,{useEffect,useState} from 'react'
import SplashScreen from './SplashScreen'


function SplashScreenManager({children}) {
    const [showSplash,setShowSplash]=useState(true);

    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setShowSplash(false);
        },3000)
        return ()=>clearTimeout(timeout)
    },[])

    const finishLoading=()=>{
        setShowSplash(false);
    }

  return showSplash?<SplashScreen finishloading={finishLoading}/>:children
}

export default SplashScreenManager
