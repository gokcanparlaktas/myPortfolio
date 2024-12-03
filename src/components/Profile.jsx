import { useContext } from "react";
import { DataContext } from "../context/Context";

export const Profile = () => {
  const { localizedData } = useContext(DataContext);
  const info = localizedData.info;
  return (
    <div className=" mt-5 pb-20">
      <div className="flex flex-col container">
        <div className="mx-auto mt-10">
          <h2 className="text-4xl mb-10">{localizedData.profileHeader}</h2>
        </div>
        <div className="flex container place-content-around">
          <div className="my-auto max-w-xs mx-auto">
            <h3 className="font-bold mb-5">{localizedData.profile}</h3>
            <div className="flex flex-col gap-5">
              {info.map((item, index) => (
                <div className="max-w-md" key={index}>
                  <strong>{item.name}:</strong> {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl flex flex-col gap-5">
            <h3 className="font-bold text-2xl">{localizedData.aboutTitle}</h3>
            <div className="text-lg">{localizedData.about}</div>
            <div className="text-lg">{localizedData.about2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
