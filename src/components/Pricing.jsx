
const Pricing = (props) => {

    const { recommend, plan, price, icon, icTitle } = props;

    return (
        <div className="card rounded-none bg-base-100 w-96 shadow-sm">
            <figure className="px-5 py-5 bg-common flex-col">
                <div className="bg-[#32A7B2] p-4 rounded-md">
                    <img src={icon} alt={icTitle} className="max-w-9" />
                </div>
                <h3 className="text-2xl text-white">{plan}</h3>
                <h3 className="font-bold text-2xl text-white">{price}</h3>
            </figure>
            <div className="card-body items-center text-center">
                <p className="text-silent">Static post on Facebook and Instragram</p>
                <p className="text-silent">FB Boosting - 1 Day</p>
                <p className="text-silent">Publication on Website</p>

                <div className="card-actions mt-9">
                    <button className={`btn px-10 py-6 ${recommend ? "bg-gradient-to-r text-white from-main to-common" : "border-silent text-main bg-transparent hover:bg-silent hover:text-white"} hover:text-second`}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;