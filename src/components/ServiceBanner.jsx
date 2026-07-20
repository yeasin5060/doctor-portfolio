import dna from "../assets/dna.png";

const ServiceBanner = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative bg-[#dfe9ff] rounded-[28px] overflow-hidden py-12">
                    {/* DNA Image */}
                    <img
                        src={dna}
                        alt="DNA"
                        className="absolute top-0 left-0 w-24 md:w-28"
                    />
                    {/* Content */}
                    <div className="text-center">

                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                            Health & Wellness Services
                        </h2>
                        <p className="mt-3 text-gray-500 text-sm md:text-base">
                            Comprehensive care designed to keep you healthy,
                            active, and confident.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;