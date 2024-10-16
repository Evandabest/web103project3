import React from 'react';

interface LocationProps {
  Id: number;
  Name: string;
  Type: string;
  Leader: string;
  BadgeNum: number;
  Link: string;
}

const Location: React.FC<LocationProps> = ({ Id, Name, Type, Leader, BadgeNum, Link }) => {
  return (
    <div className="w-64 h-48 overflow-hidden rounded shadow-md">
      <div className="relative bg-pink-300 h-3/4">
        <img 
          src={Link} 
          alt={`${Name} Gym`} 
          className="object-cover w-full h-full"
        />
        <div className="absolute text-xl font-bold text-black bottom-2 left-2">
          {Name}
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-1 bg-gray-200 h-1/4">
        <div className="text-sm">
          Gym Leader: {Leader}
        </div>
        <div className="text-sm">
          Gym #{BadgeNum}
        </div>
      </div>
    </div>
  );
};

export default Location;