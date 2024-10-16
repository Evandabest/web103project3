import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

interface EventProps {
  Id: number;
  Title: string;
  Leader: string;
  BadgeNum: number;
  Link: string;
}

export default function Component({ Id, Title, Leader, BadgeNum, Link }: EventProps) {
  const navigate = useNavigate();

  const gotoEvent = (id: number) => {
    navigate(`/events/${id}`);
  };

  return (
    <div 
      className="w-full max-w-sm overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl hover:scale-105"
      onClick={() => gotoEvent(Id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && gotoEvent(Id)}
      aria-label={`View details for ${Title}`}
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-pink-400 to-pink-600">
        {Link ? (
          <img 
            src={Link} 
            alt={`${Title} location`}
            className="object-cover w-full h-full"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=300&width=400";
              e.currentTarget.alt = "Placeholder image";
            }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white">
            <MapPin size={48} />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">
            {Title}
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="text-sm font-medium text-gray-800">
          Gym Leader: <span className="font-semibold">{Leader}</span>
        </div>
        <div className="text-sm font-medium text-gray-800">
          Gym <span className="font-semibold">#{BadgeNum}</span>
        </div>
      </div>
    </div>
  );
}