const WhatIsWoltSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 w-full bg-[#fff] bg-no-repeat bg-gradient-to-b from-[#fff] to-[#fff] bg-[length:100%_50%,100%_50%] bg-[position:0_0,0]">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left Content Box */}
        <div className="flex-1 bg-white p-10 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-woltHeader">
            What is Wolt?
          </h2>
          <p className="text-4xl font-bold mb-4 font-woltHeader">Delivered.</p>
          <p className="text-lg text-gray-600">
            Wolt makes it incredibly easy for you to discover and get what you
            want. Delivered to you – quickly, reliably, and affordably.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src="https://consumer-static-assets.wolt.com/frontpage-assets/video-cover-image-4.jpg"
            alt="Wolt Delivery"
            className="rounded-lg object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsWoltSection;
