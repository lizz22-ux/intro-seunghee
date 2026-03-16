import { Profile } from "../schemas/profileSchema";

interface ProfileSectionProps {
  profile: Profile;
}

export function ProfileSection({ profile }: ProfileSectionProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-6 py-12">
      <div className="text-8xl mb-4">
        {profile.profileImage}
      </div>
      
      <h1 className="text-3xl font-bold">
        {profile.greeting}
      </h1>
      
      <p className="text-xl text-gray-600 dark:text-gray-300">
        {profile.bio}
      </p>
      
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {profile.keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}
