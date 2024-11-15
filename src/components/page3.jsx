import React, { useRef, useState } from 'react'

function page3({bgChanger, bgReverseChanger}) {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const content = useRef(null)
    const moveable = useRef(null)

    const movement = (e) => {
        if (moveable.current && content.current) {
            const contentRect = content.current.getBoundingClientRect();
            const moveableWidth = moveable.current.clientWidth;
            const moveableHeight = moveable.current.clientHeight;

            // Calculate position relative to the container
            const x = e.clientX - contentRect.left - moveableWidth / 2;
            const y = e.clientY - contentRect.top - moveableHeight / 2;

            moveable.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
    };

    function appear() {
        setOpen(true)
        console.log('entered')
    }
    function disAppear() {
        setOpen(false)
        console.log("out")
    }
    const projects = [
        {
            seq: "05",
            name: "Nhast Geo",
            url: "https://leopoldmanguette.com/_nuxt/miniature-natgeo.CHTeqF7f.jpg"
        },
        {
            seq: "06",
            name: "Koi Food",
            url: "https://leopoldmanguette.com/_nuxt/miniature-koifood.BHYzr6G0.jpg"
        },
        {
            seq: "07",
            name: "Mhasison Dhasdas",
            url: "https://leopoldmanguette.com/_nuxt/miniature-maisondada.-iu6Eshr.jpg"
        },
        {
            seq: "08",
            name: "HASdidhass x Ozweego",
            url: "https://leopoldmanguette.com/_nuxt/miniature-adidas.BAdzdOaA.jpg"
        },
        {
            seq: "09",
            name: "The MhasndhasLorihasn",
            url: "https://leopoldmanguette.com/_nuxt/miniature-themandalorian.CUcv5SmN.jpg"
        },

    ]


    return (
        <div className='page-3 w-screen h-[120vh] bg-black'>
            <div onMouseEnter={() => { appear() }} onMouseLeave={() => { disAppear() }} onMouseMove={(e) => {
                movement(e)
            }} ref={content} className="content pb-[8px] w-[75%] h-full mx-auto relative cursor-pointer">
                {open && <div ref={moveable} className={`moveable pointer-events-none w-1/4 h-[50vh] z-50 absolute overflow-hidden rounded-lg`}>
                    <img className='w-full h-full object-fill' src={`${projects[activeIndex].url}`} alt="" />
                </div>}
                {projects.map((elem, idx) => {
                    return <div
                        onMouseLeave={() => { bgReverseChanger() }}
                        key={idx} onMouseEnter={() => {
                            setActiveIndex(idx)
                            bgChanger()
                        }} className="layer relative w-full border-t border-solid border-white/40 h-1/5 flex items-center text-white">
                        <p className='neue text-[48px] font-thin'><span className='text-[16px] mr-3 pl-2'>{elem.seq}</span>{elem.name}</p>
                    </div>
                })}

            </div>
        </div>
    )
}

export default page3