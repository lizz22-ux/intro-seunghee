import { useState } from "react";
import { ProfileSection } from "./components/ProfileSection";
import { InterestSection } from "./components/InterestSection";
import { TechStackSection } from "./components/TechStackSection";
import { ThemeToggle } from "./components/ThemeToggle";
import { ClosingSection } from "./components/ClosingSection";
import { profileSchema } from "./schemas/profileSchema";
import { skillsSchema } from "./schemas/skillsSchema";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 프로필 데이터 (Zod로 검증)
  const profileData = profileSchema.parse({
    name: "백승희",
    greeting: "안녕하세요, 백승희입니다!",
    bio: "도전을 즐기는 초보 기획자",
    profileImage: "🙂",
    keywords: ["#영문과", "#DWNC 신입부원"]
  });

  // 기술 스택 데이터 (Zod로 검증)
  const skillsData = skillsSchema.parse({
    interests: [
      { 
        name: "키보드 연주", 
        image: "https://images.unsplash.com/photo-1643622067454-bcb547b23f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXlib2FyZCUyMG11c2ljJTIwcGxheWluZ3xlbnwxfHx8fDE3NzM2NTg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      { 
        name: "넷플릭스", 
        image: "https://images.unsplash.com/photo-1627873649417-c67f701f1949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4JTIwd2F0Y2hpbmclMjBtb3ZpZXxlbnwxfHx8fDE3NzM2NTg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      { 
        name: "산책하기", 
        image: "https://images.unsplash.com/photo-1634133789205-aa48216375bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwcGFyayUyMG5hdHVyZXxlbnwxfHx8fDE3NzM2NTg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      { 
        name: "자전거 타기", 
        image: "https://images.unsplash.com/photo-1678026038177-74330c556d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwYmljeWNsZSUyMHJpZGV8ZW58MXx8fHwxNzczNjU4OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    currentTools: [
      { 
        name: "Figma (Beginner)", 
        image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzM1NjkwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      { 
        name: "Github (Beginner)", 
        image: "https://images.unsplash.com/photo-1607799632518-da91dd151b38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXRodWIlMjBjb2RpbmclMjBkZXZlbG9wZXJ8ZW58MXx8fHwxNzczNjU4OTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    futureTech: [
      { 
        name: "C++", 
        image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBjcHB8ZW58MXx8fHwxNzczNjU4OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      { 
        name: "Next.js", 
        image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMG5leHRqc3xlbnwxfHx8fDE3NzM2NTg5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
        
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* 프로필 섹션 */}
          <ProfileSection profile={profileData} />

          {/* 관심사 섹션 */}
          <div className="mt-12">
            <InterestSection interests={skillsData.interests} />
          </div>

          {/* 기술 스택 섹션 */}
          <div className="mt-12">
            <TechStackSection
              currentTools={skillsData.currentTools}
              futureTech={skillsData.futureTech}
            />
          </div>

          {/* 마무리 섹션 */}
          <div className="mt-12">
            <ClosingSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;