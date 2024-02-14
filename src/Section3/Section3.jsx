

const Section3 = () => {
    return (
        <div className="my-16">
            <div style={{
                backgroundImage: `url("https://i.ibb.co/1RsvcB3/riad.jpg")`,
                backgroundRepeat: "no-repeat"
                , backgroundSize: "cover",
                backgroundPosition: "center"
            }}
                className="w-full h-[360px] md:h-[420px] ">
                <div className=" bg-gradient-to-r from-[black] to-[#433e3e] opacity-60 w-full h-full pt-8">
                    <p className="text-white text-[55px]  md:text-[100px] text-center  ">The Only Place</p>
                    <p className="text-white text-2xl md:text-4xl text-center pt-2 font-serif">TO GO FOR SPICES</p>
                    <p className="text-white text-xs text-center pt-5 font-serif md:w-[550px] mx-auto px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A incidunt voluptas impedit provident quia optio aperiam quas dolorum pariatur ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quibusdam delectus  praesentium fuga ipsum nemo!</p>
                    <div className="  mt-6 w-32 mx-auto ">
                    <button type="button" className="text-black bg-gradient-to-r  from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-sans  ">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;