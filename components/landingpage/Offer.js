import CarouselComp from '../landingpage/Carousel'
const Offer=()=>{

    return(
        <div className="p-20 bg-gray-200">
            <div className="place-items-center pt-10">
                <div className="px-20 space-x-48 flex">
                    <div className="p-10">
                        <h3 className="font-semibold text-xl">WHAT WE OFFER</h3>
                        <div className="w-20 mt-5 mb-5 border-black border-b-2"></div>
                        <div className=" text-6xl font-medium leading-snug">The Next Generation<br/> of Small Molecules</div>
                    </div>
                    <p className="text-2xl pl-10 w-1/2 leading-normal tracking-wider font-medium">Our technologies systematize discovery of first-in-class small molecules and novel targets for complex diseases. By probing novel chemical space and mechanisms of action, we are breaking the status quo for challenging diseases with a need for effective treatments, such as fibrosis or neurodegeneration.</p>
                </div>

                <div className="flex pl-10 pr-10">
                    
                    <div className="p-20 w-1/2">
                        <video autoPlay loop muted className="rounded-t-3xl w-screen">
                            <source src="/videos/abstract.mp4" type="video/mp4" />
                        </video> 
                        <div className="bg-black text-white py-14 px-16 rounded-b-3xl">
                            <h3 className="text-xl font-medium tracking-wider pb-5 ">LICENSING</h3>
                            <div className="border-b-2 border-green-500 w-20 mb-14"></div>
                            <p className="font-semibold leading-loose ">Using our end-to-end discovery capabilities, we are actively developing multiple leads towards IND-enabling studies and validating target candidates discovered through our platform. Get in touch to learn more about our pipeline and explore opportunities to expand your portfolio.</p>
                        </div>
                    </div>
                    <div className="p-20 w-1/2">
                        <video autoPlay loop muted className="rounded-t-3xl">
                            <source src="/videos/globe.mp4" type="video/mp4" />
                        </video> 
                        <div className="bg-black text-white py-14 px-16 rounded-b-3xl">
                            <h3 className="text-xl font-medium tracking-wider pb-5 ">DISCOVERY PLATFORM</h3>
                            <div className="border-b-2 border-green-500 w-20 mb-14"></div>
                            <p className="font-semibold leading-loose ">We are building tailor-made multi-omics datasets across inflammatory, fibrotic, and neurological diseases to power discovery campaigns on our platform. Partner with us to rapidly bolster your early-stage pipeline.</p>
                        </div>
                    </div>
                </div>
            </div>        
            <CarouselComp />
            <button className="focus:outline-none"></button>
        </div>
    )
}

export default Offer;