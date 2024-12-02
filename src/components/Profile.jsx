import { useContext } from "react";
import { DataContext } from "../context/Context";

export const Profile = () => {
  const { localizedData } = useContext(DataContext);
  const info = localizedData.info;
  return (
    <div className=" mt-5 pb-20 ">
      <div className="flex flex-col container ">
        <div className="mx-auto mt-10 ">
          <h2 className="text-4xl mb-10">{localizedData.profileHeader}</h2>
        </div>
        <div className="flex container place-content-around">
          <div className="my-auto max-w-lg rounded-2xl px-10 py-10 mx-auto shadow-[10px_10px_2px_rgb(82,82,82)]">
            <h3 className="font-light mb-5 text-2xl font-playfair text-[#EA2678]">
              {localizedData.profile}
            </h3>
            <div className="flex flex-col gap-5">
              {info.map((item, index) => (
                <div className="max-w-md text-lg" key={index}>
                  <strong className="font-semibold">{item.name}:</strong>{" "}
                  {item.value}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl flex flex-col gap-5">
            <h3 className="font-playfair text-2xl font-light leading-8">
              {localizedData.aboutTitle}
            </h3>
            <div className="text-lg font-light">{localizedData.about}</div>
            <div className="text-lg font-light">{localizedData.about2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
