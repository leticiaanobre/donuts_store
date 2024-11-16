import Image from "next/image";

const Produtos = () => {

    const posts = [
        {
            title: "Blueberry Confetti",
            desc: "R$ 9.00",
            img: "/product1.jpg",
            href: "javascript:void(0)"
        },
        {
            title: "Strawberry Confetti",
            desc: "R$ 12.00",
            img: "/product2.jpg",
            href: "javascript:void(0)"
        },
        {
            title: "Cream Peanut",
            desc: "R$ 10.00",
            img: "/product3.jpg",
            href: "javascript:void(0)"
        },
    ]
    
    return (
        <section className="flex flex-col items-center justify-center mx-auto px-4 max-w-screen-xl md:px-8" id='produtos'>
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Take a doughnut break
                </h1>
            </div>
            <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <div className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <Image src={items.img} alt={items.title}  width={300} height={200} className="w-full  h-[330px] object-cover rounded-t-md" />
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-xl mt-1">{items.desc}</p>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
            <a href="javascript:void(0)" className="inline-flex mt-12 border border-blue-200 rounded-xl py-2 px-4 gap-x-1 items-center text-gray-500 hover:text-orange-600 hover:border-orange-600 duration-150 font-medium">
                Explore more
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
            </a>
        </section>
    )
}
 export default Produtos;