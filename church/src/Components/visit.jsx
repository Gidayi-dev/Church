function Visit() {
  return (
    <div className="mt-8 mx-auto text-gray-800">
      {/* Section Title */}
      <h1 className="text-center text-5xl font-extrabold text-gray-700 mb-10">
        Visit Us
      </h1>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row items-start gap-12 px-8 py-10 w-11/12 lg:w-3/4 mx-auto bg-gray-100 rounded-lg shadow-lg">
        {/* Service Information */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-indigo-700">
            10:30 - 11:30 A.M.
          </h2>
          <h2 className="text-2xl font-medium">Worship Service</h2>
          <h2 className="text-2xl font-medium">Nangoga P.A.G Church</h2>
          <h2 className="text-2xl font-medium">Funyula, Nangoga</h2>
          <h2 className="text-2xl font-medium">Busia</h2>
        </div>

        {/* Additional Information */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-indigo-700">
              Parking on-site
            </h2>
            <p className="text-xl text-gray-600">
              There is on-site parking space, open for free parking.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-indigo-700">Kids Church</h2>
            <p className="text-xl text-gray-600">
              Recharge knowing your children are in caring hands. Drop them off
              at Kids Church and watch them grow in their relationship with God
              while you enjoy a fulfilling worship experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
