import Image from 'next/image'

const Sales = () => {
    return (
        <section className="py-14" id='sobre'>
            <div className="flex flex-col px-4 justify-center items-center gap-14 max-w-screen-xl mx-auto md:px-8">
                <div className="items-center rounded-lg gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className='flex flex-col items-center justify-center px-4'>
                        <div className="relative z-50 flex-1 sm:hidden lg:block">
                            <Image src="/donutssale3.svg" width={500} height={200} alt="" />
                        </div>
                        <div className="absolute">
                            <Image src="/DONUT.svg" width={500} height={200} alt="" />
                        </div>
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-gray-800 font-semibold">
                            For when only a donut will do
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Our donuts are made with love
                        </p>
                        <p className="text-gray-800 text-2xl font-medium sm:text-3xl">and a whole lot of sugar.</p>
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
                </div>
            </div>
        </section>
    )
}
export default Sales;