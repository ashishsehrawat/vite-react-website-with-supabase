import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  gradientColor: string;
  isActive: boolean;
  setActiveService: (index: number | null) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  Icon,
  gradientColor
}) => {
  return (
    <div className="relative p-1 rounded-xl overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientColor} opacity-60`}></div>
      <div className="absolute inset-0.5 bg-indigo-950 rounded-lg"></div>
      
      <div className="relative p-6 h-full flex flex-col">
        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center mb-4`}>
          <Icon size={28} className="text-white" />
        </div>
        
        <h3 className="text-xl font-serif font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;