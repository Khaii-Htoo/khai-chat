// Avatar.tsx
import React from "react";

interface AvatarProps {
  avatar: string;
  online?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ avatar, online }) => {
  return (
    <div className="relative">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-lg font-semibold shadow-lg">
        {avatar}
      </div>
      {online && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default Avatar;
