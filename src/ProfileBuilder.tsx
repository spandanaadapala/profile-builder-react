import ProfileBuilderComponent from "./components/ProfileBuilderComponent";
import ProfileBuilderContext from "./contexts/profile-builder-context";

const ProfileBuilder = () => {
  return (
    <ProfileBuilderContext.Provider value={"profile"}>
      <ProfileBuilderComponent />
    </ProfileBuilderContext.Provider>
  );
};

export default ProfileBuilder;
