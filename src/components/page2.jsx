import React, { useRef, useState, useEffect } from 'react'
import { BsXLg } from "react-icons/bs";
import { FaLessThan } from 'react-icons/fa6';
import gsap from 'gsap'
import GsapMagnetic from './magnetic';
import { useGSAP } from '@gsap/react';

function page2({bgChanger, bgReverseChanger}) {
   const [activeIndex, setActiveIndex] = useState(0)
   const [ height ,setHeight] = useState(0)

   const setIndexAndOpen = (idx) =>{
    setActiveIndex(idx)
    setHeight(1)
  }

  const setClose = () =>{
    setHeight(0)
  }

  const projects = [
    {
      seq: "01",
      projectName: "Ceser Society",
      year: "2023",
      flex: "items-start",
      margin: "mt-[20%]",
      media: "https://leopoldmanguette.com/_nuxt/miniature-cesarsociety.CPI5Bb3C.jpg",
      justify: "-center",
      banner: "https://leopoldmanguette.com/_nuxt/heading-cesarsociety.Bp3MTP3c.jpg",
      img: ["https://leopoldmanguette.com/_nuxt/cesarsociety_1.BwKbd1zA.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_2.BVN1p6dI.jpg","https://leopoldmanguette.com/_nuxt/cesarsociety_3.D8-BdixH.jpg", "https://leopoldmanguette.com/_nuxt/cesarsociety_4.BM1TVSn8.jpg", "https://leopoldmanguette.com/_nuxt/cesarsociety_5.CFr3LaST.jpg", "https://leopoldmanguette.com/_nuxt/cesarsociety_6.BaBRCkAd.jpg"],
      sliderText: "Cesar †",
      sliderWidth: '200px'

    },
    {
      seq: "02",
      projectName: "The Pulp",
      year: "2023",
      flex: "items-end",
      margin: "mb-[20%]",
      media: "https://leopoldmanguette.com/_nuxt/miniature-thepulp.DIOBJvmu.mp4",
      justify: "-center",
      banner: "https://leopoldmanguette.com/_nuxt/heading-thepulp.DZY4TRpX.jpg",
      img: ["https://leopoldmanguette.com/_nuxt/thepulp_1.DPmgHnnF.jpg","https://leopoldmanguette.com/_nuxt/thepulp_2.D76Dghed.jpg","https://leopoldmanguette.com/_nuxt/thepulp_3.rGjd71iD.jpg", "https://leopoldmanguette.com/_nuxt/thepulp_4.DwQwkVU3.jpg", "https://leopoldmanguette.com/_nuxt/thepulp_5.BaCCf8NG.jpg"],
      sliderText: "The Pulp †",
      sliderWidth: '430px'
    },
    {
      seq: "03",
      projectName: "Caesar",
      year: "2024",
      flex: "items-start",
      margin: "mt-[20%]",
      media: "https://leopoldmanguette.com/_nuxt/miniature-cesar.DznDD4Xt.jpg",
      justify: "-end",
      banner: "https://leopoldmanguette.com/_nuxt/heading-cesar.C8UFJHlN.jpg",
      img: ["https://leopoldmanguette.com/_nuxt/cesar_1.CjxXpFtQ.jpg","https://leopoldmanguette.com/_nuxt/cesar_4.B2CkSIOJ.jpg","https://leopoldmanguette.com/_nuxt/cesar_3.D52IiA0w.jpg", "https://leopoldmanguette.com/_nuxt/cesar_2.Bs0HxnSy.jpg", "https://leopoldmanguette.com/_nuxt/cesar_5.CFu1us47.jpg"],
      sliderText: "Cesar †",
      sliderWidth: '200px'
    },
    {
      seq: "04",
      projectName: "Fitly",
      year: "2024",
      flex: "items-end",
      margin: "mb-[20%]",
      media: "https://leopoldmanguette.com/_nuxt/miniature-fitly.1XfRDU5K.jpg",
      justify: "-center",
      banner: "https://leopoldmanguette.com/_nuxt/heading-fitly.8lB_h6RT.jpg",
      img: ["https://leopoldmanguette.com/_nuxt/cesar_1.CjxXpFtQ.jpg","https://leopoldmanguette.com/_nuxt/cesar_4.B2CkSIOJ.jpg","https://leopoldmanguette.com/_nuxt/cesar_3.D52IiA0w.jpg", "https://leopoldmanguette.com/_nuxt/cesar_2.Bs0HxnSy.jpg", "https://leopoldmanguette.com/_nuxt/cesar_5.CFu1us47.jpg"],
      sliderText: "Fitly †",
      sliderWidth: '160px'
    },
  ]

  const projectData = projects.map((elem, idx) => {
    return <div onClick={()=>{setIndexAndOpen(idx)}} key={idx} className={`w-[50vw] h-[135vh] flex ${elem.flex} justify${elem.justify} bg-black`}>
      <GsapMagnetic>
      <div onMouseEnter={()=>{bgChanger()}} onMouseLeave={()=>{bgReverseChanger()}} className={`w-[40%] h-[50%] card cursor-pointer block ${elem.margin}`}>
        <h2 className='neue text-[12px] h-[7%] text-white font-semibold block text-right p-1'>{elem.seq}</h2>
        <div className={`h-[81%] rounded-lg w-full block")]`}>
          {elem.media.endsWith('.mp4') || elem.media.endsWith('.webm') ? (
            <video
              src={elem.media}
              autoPlay
              loop
              muted
              className="w-full h-full rounded-lg"
            ></video>
          ) : (
            <img
              src={elem.media}
              alt={elem.projectName}
              className="w-full h-full rounded-lg object-cover"
            />
          )}
        </div>
        <div className="h-[12%] w-full flex justify-between items-center px-2 text-white">
          <h2 className='text-[15px] tracking-tight font-medium'>
            {elem.projectName}
          </h2>
          <p className='text-[13px] font-normal neue'>
            -{elem.year}
          </p>
        </div>
      </div>
      </GsapMagnetic>
    </div>
  })

  const modelSlider = Array.from({ length: 11 }, (_, i) => (
    <p key={i} style={{ "--position": i, '--width': `${projects[activeIndex].sliderWidth}` }} className="text-[32px] slide_item">
      {projects[activeIndex].sliderText}
    </p>
  ));


  return (
    <>
      <div className='page2 w-screen h-[100%] bg-black flex flex-eow justify-center items-center flex-wrap'>
        {projectData}
      </div>


      <div style={{"--scale": height}} className={`model fixed z-[9999] top-0 left-0 w-screen h-screen origin-top bg-black text-white p-10 pb-20 overflow-auto`}>
        <div
          style={{ borderWidth: "0.5px" }}
          className="banner border-solid border-white/40 w-[100%] h-[80vh] bg-black mx-auto rounded-xl relative overflow-hidden"
        >
          <div
            onClick={()=> {setClose()} }
            style={{ borderWidth: "0.3px" }}
            className="icon w-12 h-12 bg-transparent cursor-pointer border-solid border-white/40 overflow-hidden rounded-full absolute top-4 left-4 flex justify-center items-center"
          >
            <BsXLg size={"20px"} opacity={0.8} />
          </div>
          <img className="w-full h-[47.19vh]" src={`${projects[activeIndex].banner}`} alt="banner#1" />
          <div className="w-[100%] h-[32.81vh] flex flex-row">
            <div className="w-[30%] h-full flex items-center px-10">
              <p className="tracking-tighter text-[20px] leading-6 font-light">
                {projects[activeIndex].projectName}
                <span className="block">-{projects[activeIndex].year}</span>
              </p>
            </div>
            <div className="w-[70%] h-full flex px-10 justify-center items-start flex-col text-[16px]">
              <p className="tracking-tighter">UX/UI developer</p>
              <p className="tracking-tighter">MERN developer</p>
            </div>
          </div>
        </div>
        <div className="gallery h-full w-full pt-10 px-14 pb-10">
          {projects[activeIndex].img.map((image, idx) => (
            <React.Fragment key={idx}>
              <img className="w-[63vw] rounded-md my-20 block m-auto" src={`${image}`} alt={`img${idx + 1}`} />
              {idx === 1 && (
                <div
                  style={{ borderWidth: "0.5px" }}
                  className="w-[63vw] pan rounded-2xl mx-auto h-[9vh] relative flex border-white/40 border-solid flex-row whitespace-nowrap overflow-hidden items-center"
                >
                  {modelSlider}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default page2