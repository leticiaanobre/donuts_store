import Image from 'next/image'
import { useEffect, useState } from 'react'

const Hero = () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "Sobre", path: "javascript:void(0)" },
        { title: "Produtos", path: "javascript:void(0)" },
        { title: "Preços", path: "javascript:void(0)" }
    ]

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <Image
                    src="/donutful..svg"
                    width={120}
                    height={50}
                    alt="Float UI logo"
                />
            </a>
            <div className="md:hidden">
                <button className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
    )

    return (
        <div className='relative min-h-screen w-full'>
            <header>
                <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                    <Brand />
                </div>
                <nav className={`md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}>
                    <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                        <Brand />
                        <div className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                {navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-700 hover:text-gray-900">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                                <a href="javascript:void(0)" className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                                    Sign in
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
    <div className="flex flex-col items-center justify-center">
        <div className='absolute z-50'>
            <Image 
                src={'/donutshome.svg'} 
                alt='donuts home image' 
                layout="responsive"
                width={450} 
                height={100} 
                className="w-[70%] max-w-[450px] sm:w-[50%] md:w-[40%] lg:w-[30%]"
            />
        </div>
        <div className='relative'>
            <Image 
                src={'/2023.svg'} 
                alt='2023 image'
                layout="responsive"
                width={900} 
                height={100} 
                className="w-[80%] max-w-[900px] sm:w-[60%] md:w-[50%] lg:w-[40%]"
            />
        </div>
    </div>
</section>

        </div>
    )
}

export default Hero;
