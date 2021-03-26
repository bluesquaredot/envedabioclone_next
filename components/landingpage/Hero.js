

export default function Hero(){
    return(
        <>
        <section className="flex h-screen place-content-between hero p-5">
            <div className="ml-40 mt-36 h-screen w-1/2">
                <div><h1 className="text-white font-semibold text-6xl leading-tight">Translating Nature <br /> into Medicine</h1></div>
                <div className="border-b-2 mt-14 border-green-500 pl-11 w-36"></div>
                <div className="text-2xl w-3/4 pb-5 leading-relaxed text-white mt-20">
                    <p>At Enveda, we’re harnessing the complexity of the natural world to tackle today’s biggest healthcare challenges. With breakthrough advancements in 
                        <span className="text-green-500">machine learning, computational metabolomics, and knowledge graphs</span>
                        , we’re discovering the next generation of small molecule therapeutics.</p></div>
                <div className="flex space-x-16 mt-10">
                    <button className="uppercase px-9 bg-green-500 focus:outline-none font-semibold rounded-full">learn how</button>
                    <button className="uppercase px-5 py-4  focus:outline-none rounded-full text-white border-green-400 border-2">partner with us</button>
                </div>
            </div>
            <div className="h-full stretch"><img src="/images/hero-img.png" alt="hero-img"/></div>
        </section>
        </>
    )
}   