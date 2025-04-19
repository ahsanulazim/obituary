

const Search = () => {
    return (
        <section className="bg-[url(assets/Images/bg-image.webp)] bg-cover bg-no-repeat relative py-20 px-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12"><span className="text-main">Search</span> Obituraies</h2>
            <form action="" className="text-center">
                <div className="flex gap-4 max-w-2xl flex-wrap mx-auto justify-center">
                    <input type="text" placeholder="First Name" className="input rounded-none bg-main/50" required />
                    <input type="text" placeholder="Last Name" className="input rounded-none bg-main/50" required />

                    <select defaultValue="Country" name="Country" className="select rounded-none bg-main/50">
                        <option disabled={true}>Country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                    </select>
                    <select defaultValue="State" name="State" className="select rounded-none bg-main/50">
                        <option disabled={true}>State</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Mymensingh">Mymensingh</option>
                    </select>
                    <select defaultValue="City" name="City" className="select rounded-none bg-main/50">
                        <option disabled={true}>City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Jamalpur">Jamalpur</option>
                    </select>
                    <select defaultValue="Year" name="Year" className="select rounded-none bg-main/50">
                        <option disabled={true}>Year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-md sm:btn-xl btn-wide bg-main border-0 mt-16 rounded-none">Search</button>
            </form>
        </section>
    );
};

export default Search;