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
  const [initialUrl, setInitialUrl] = useState(
    "https://avatars.githubusercontent.com/u/95250838?v=4"
  );
  const [initialName, setInitialName] = useState("Gabi França");
  const [initialDescription, setInitialDescription] =
    useState("Web Development");

  function changeProfile(data: formType) {
    const { name, description, url } = data;
    setInitialName(name);
    setInitialDescription(description);
    setInitialUrl(url);
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
