import { Music } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SkillItem } from "../schemas/skillsSchema";

interface InterestSectionProps {
  interests: SkillItem[];
}

export function InterestSection({ interests }: InterestSectionProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <Music className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        <h2 className="text-2xl font-bold">관심사</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md">
              <ImageWithFallback
                src={interest.image}
                alt={interest.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {interest.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}