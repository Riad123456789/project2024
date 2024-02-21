
import { PiShoppingCart } from "react-icons/pi";
import { GiSelfLove } from "react-icons/gi";
import { RiSearch2Line } from "react-icons/ri";
const Section2 = () => {
    return (
        <div className="my-14 mt-16 max-w-6xl mx-auto">
            <h1 className="text-center text-4xl">NEW PRODUCTS</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-9 md:gap-5 lg:gap-16 mt-10  ">

                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px]">
                            <img src="https://i.ibb.co/FYTK1NH/4a138584-3cac-4341-88b5-b05057948e85.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Split Cinnamon</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            190$ - 255$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center">
                            <img src="https://i.ibb.co/10s02rV/f5e9cb80-3fbe-486a-8288-d77b29f151dc.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Cloves</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            60$ - 90$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px]  object-center">
                            <img src="https://i.ibb.co/qJLhyt2/455f0dde-4f3f-4367-a957-5d346022fa52.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Turmeric Finger</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>

                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center">
                            <img src="https://i.ibb.co/1KGGzhC/c67f6053-1347-4099-b479-d0353d959967.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Teja Dry Red Chilli</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center ">
                            <img src="https://i.ibb.co/RNWmJzL/e9d892a7-0f5d-4dfa-af47-24846a57b24f.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000 " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">cumin seeds</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center ">
                            <img src="https://i.ibb.co/ch0fw3w/ee635573-6d93-4aab-bd87-cbf8ad4e551d-1.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000 " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Black Pepper</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>

                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center ">
                            <img src="https://i.ibb.co/8mv9344/d1afbfcead46c28068bdee0955cfc5f5.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000 " />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Green Cardamom</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px]">
                            <img src="https://i.ibb.co/FYTK1NH/4a138584-3cac-4341-88b5-b05057948e85.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Split Cinnamon</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            190$ - 255$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px]">
                            <img src="https://i.ibb.co/FYTK1NH/4a138584-3cac-4341-88b5-b05057948e85.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Split Cinnamon</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            190$ - 255$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center">
                            <img src="https://i.ibb.co/10s02rV/f5e9cb80-3fbe-486a-8288-d77b29f151dc.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Cloves</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            60$ - 90$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center">
                            <img src="https://i.ibb.co/qJLhyt2/455f0dde-4f3f-4367-a957-5d346022fa52.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Turmeric Finger</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>


                <div className="card  bg-base-100 border w-80 lg:w-60 mx-auto rounded-sm shadow-lg relative group  ">
                    <figure className="px-5 pt-6 ">
                        <div className="h-[180px] lg:h-[130px] object-center">
                            <img src="https://i.ibb.co/1KGGzhC/c67f6053-1347-4099-b479-d0353d959967.jpg" alt="none" className="group-hover:scale-110 group-hover:rounded-lg duration-1000" />
                        </div>
                    </figure>
                    <div className="card-body items-center text-center  ">
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 top-0 opacity-0 group-hover:opacity-100  group-hover:top-24 duration-700  ">
                            <PiShoppingCart size={25} color="white"></PiShoppingCart>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 opacity-0 group-hover:opacity-100  group-hover:bottom-36 duration-700  ">
                            <GiSelfLove size={15} color="white"></GiSelfLove>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 left-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <RiSearch2Line size={10} color="white"></RiSearch2Line>
                        </div>
                        <div
                            className="absolute border rounded-full  bg-lime-600 p-2 bottom-0 right-[70px] opacity-0 group-hover:opacity-100  group-hover:bottom-[160px] duration-700  ">
                            <PiShoppingCart size={10} color="white"></PiShoppingCart>
                        </div>
                        <h2 className="card-title font-sans ">Teja Dry Red Chilli</h2>
                        <div className="rating rating-xs py-4">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions">
                            160$ - 190$
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Section2;