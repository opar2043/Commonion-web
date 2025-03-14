import React from 'react';

const Card = ({ car }) => {
  const { Title, Date, Location, Description, image } = car;

  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden w-full  mx-auto">
      <figure className="relative w-full h-28">
        <img
          src={image || 'https://i.ibb.co.com/0WhXD74/banner.jpg'}
          alt={Title}
          className="w-full h-full object-cover rounded"
        />
      </figure>
      <div className="py-2 px-2 mt-2">
        <h2 className="text-lg font-bold text-left text-gray-800">{Title}</h2>
        <p className="text-left text-gray-600 text-sm mt-1">{Description}</p>
        <div className="mt-1 text-left text-gray-500">
          <p className="text-sm">
            <strong>Date:</strong> {Date}
          </p>
          <p className="text-sm">
            <strong>Location:</strong> {Location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
