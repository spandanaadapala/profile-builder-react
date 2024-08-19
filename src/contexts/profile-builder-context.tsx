import { createContext, useContext } from "react";

const ProfileBuilderContext = createContext("");

export const profileBuilderContext = () => {
  const context = useContext(ProfileBuilderContext);
  return context ?? "required profile builder context";
};
export default ProfileBuilderContext;
