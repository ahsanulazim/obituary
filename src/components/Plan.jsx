import Pricing from "./Pricing";
import Rocket from "../assets/Images/Frame.svg";
import Badge from "../assets/Images/Badge.svg";
import Badge2 from "../assets/Images/Badge(2).svg";

const Plan = () => {
    return (
        <section className="bg-liter py-20" data-theme="light">
            <div className="max-w-[1380px] mx-auto px-4">
                <div className="text-center mb-12 text-silent">
                    <h2 className="text-3xl md:text-4xl font-bold"><span className="text-common">Plans</span> & Price</h2>
                    <h4 className="font-bold text-xl">Let the memory of your loved one be a happy one</h4>
                    <p>Leaves an afterglow of smiles when even in their after life with one of our affortable packeages</p>
                </div>
                <div className="flex min-[1220px]:justify-between gap-4 flex-wrap justify-center">
                    <Pricing plan={"Basic"} price={"$50 USD"} icon={Rocket} icTitle={"Rocket"} />
                    <Pricing recommend={true} plan={"Plus"} price={"$150 USD"} icon={Badge} icTitle={"Badge"} />
                    <Pricing plan={"Premium"} price={"$250 USD"} icon={Badge2} icTitle={"Badge"} />
                </div>
            </div>
        </section>
    );
};

export default Plan;