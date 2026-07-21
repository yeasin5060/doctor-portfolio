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
                            আমার চিকিৎসা সেবাসমূহ
                        </h2>

                        <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-3xl mx-auto leading-7">
                            আধুনিক চিকিৎসা, সঠিক রোগ নির্ণয় এবং রোগীকেন্দ্রিক স্বাস্থ্যসেবার মাধ্যমে
                            ডায়াবেটিস, উচ্চ রক্তচাপ, হৃদরোগ, থাইরয়েডসহ বিভিন্ন শারীরিক সমস্যার
                            উন্নত চিকিৎসা প্রদান করা হয়।
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceBanner;