import { Wrench, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SkillItem } from "../schemas/skillsSchema";

interface TechStackSectionProps {
  currentTools: SkillItem[];
  futureTech: SkillItem[];
}

export function TechStackSection({ currentTools, futureTech }: TechStackSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* 현재 사용 가능한 툴 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-bold">사용 가능한 툴</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {currentTools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md">
                <ImageWithFallback
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 배우고 싶은 기술 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="w-6 h-6 text-orange-600 dark:text-orange-400" />
          <h2 className="text-2xl font-bold">배우고 싶은 기술</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {futureTech.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 shadow-md">
                <ImageWithFallback
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}