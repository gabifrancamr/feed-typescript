import { formType } from "@/components/Siderbar";
import { ReactNode, createContext, useState } from "react";
import { toast } from "sonner";

interface ProfileContextType {
  initialUrl: string;
  initialName: string;
  initialDescription: string;
  changeProfile: (data: formType) => void
}

export const ProfileContext = createContext({} as ProfileContextType);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [initialUrl, setInitialUrl] = useState(() => {
    const savedUrl = localStorage.getItem('profile_url');
    return savedUrl ? savedUrl : "https://avatars.githubusercontent.com/u/95250838?v=4";
  });

  const [initialName, setInitialName] = useState(() => {
    const savedName = localStorage.getItem('profile_name');
    return savedName ? savedName : "Gabi França";
  });

  const [initialDescription, setInitialDescription] = useState(() => {
    const savedDescription = localStorage.getItem('profile_description');
    return savedDescription ? savedDescription : "Web Development";
  });

  function changeProfile(data: formType) {
    const { name, description, url } = data;
    setInitialName(name);
    setInitialDescription(description);
    setInitialUrl(url);

    localStorage.setItem('profile_name', name);
    localStorage.setItem('profile_description', description);
    localStorage.setItem('profile_url', url);

    toast.success("Alterações salvas");
  }

  return (
    <ProfileContext.Provider
      value={{
        initialDescription,
        initialName,
        initialUrl,
        changeProfile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
