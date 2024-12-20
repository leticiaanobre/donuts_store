import Image from 'next/image'

const SecondSection = () => {
    return (
        <section className="py-14">
            <div className="flex flex-col px-4 justify-center items-center gap-14 max-w-screen-xl mx-auto md:px-8">
                <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                    <div className="max-w-xl space-y-3 md:mx-auto">
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Assorted Donuts
                        </p>
                        <p className="text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                <div className=" items-center rounded-lg gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-gray-800 font-semibold">
                            Freshly made donuts every day!
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Donuts so delicious you’ll be
                        </p>
                        <p className="text-gray-800 text-2xl font-medium sm:text-3xl">coming back for more!</p>
                        <p className="mt-3 text-gray-600">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <a href="javascript:void(0)" className="inline-flex border border-blue-200 rounded-xl py-2 px-4 gap-x-1 items-center text-gray-500 hover:text-orange-600 hover:border-orange-600 duration-150 font-medium">
                            Explore more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className='flex flex-col justify-start items-center'>
                        <div className="flex flex-col justify-start items-center sm:hidden lg:block absolute">
                            <Image 
                                src="/donutsabout2.svg" 
                                width={500} 
                                height={200} 
                                alt="" 
                                className="w-[70%]  sm:w-[60%] md:w-[60%] lg:w-[80%]"
                                />
                        </div>
                        <div className="flex-1 sm:hidden lg:block relative translate-x-[-30%] translate-y-[40%] z-50">
                            <Image src="/card.svg" width={500} height={100} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SecondSection;