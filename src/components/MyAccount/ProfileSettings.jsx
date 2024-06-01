import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/profile.png";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const ProfileSettings = () => {
  return (
    <div>
      <section>
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

        <div className="flex items-center gap-5">
          <img
            src={profile}
            alt="profile"
            className=" w-16 h-16 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer">
              <FontAwesomeIcon icon={faCloudArrowUp} /> Upload New Image
            </p>
            <p className="text-xs">JPG, GIF or PNG. Max size of 800Kb</p>
          </div>
        </div>

        <hr className="border-t-0 border-b border-gray-300 my-5 w-2/3" />

        <form className="w-2/3 flex flex-col gap-4 font-semibold text-sm">
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                className="p-2 border w-full border-blue-200 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                name="phone"
                id="phone"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <hr className="border-t-0 border-b border-gray-300 mt-7 w-full" />

          <h2 className="text-lg font-semibold">Password Details</h2>

          <div className="flex flex-col gap-2 w-1/2">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="oPassword">Old Password</label>
              <input
                type="oPassword"
                name="oPassword"
                id="oPassword"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="nPassword">New Password</label>
              <input
                type="nPassword"
                name="nPassword"
                id="nPassword"
                className="p-2 border border-blue-200 rounded-md focus:outline-none"
              />
            </div>
          </div>

          <hr className="border-t-0 border-b border-gray-300 mt-7 w-full" />

          <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-3 rounded-full text-white font-semibold border-none">
            Save Profile
          </button>
        </form>
      </section>
    </div>
  );
};

export default ProfileSettings;
