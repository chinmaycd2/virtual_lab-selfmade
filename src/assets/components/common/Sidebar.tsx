import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoPersonAddSharp, IoNotifications, IoSettings } from "react-icons/io5";
import { MdLiveHelp } from "react-icons/md";
import { PiNotebookFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import Modal from "./Modal";
import BuddyChat from "../chat/BuddyChat"
import AddBuddy from "./AddBuddy";
import Assistance from "./Assistance";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

type ModalContent = {
  title: string;
  component: React.JSX.Element | null;
};
const Sidebar = ({ setSidebartoggle }) => {
  const [select, setSelect] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({ title: "",component: null});
  function handleSelect(text:string) {
    setSelect(text);
    setModalContent(getModalContent(text));
    setIsModalOpen(true);
  }
  function getModalContent(text:string) {
    switch (text) {
      case "addbuddy":
        return { title: "Add Buddy", component: <div><AddBuddy/> </div>};
      case "assistance":
        return { title: "Assistance", component: <div><Assistance/></div> };
      case "notification":
        return { title: "Notifications", component: <div><Notification/></div> };
      case "notes":
        return { title: "Notes", component: <div>Notes Content</div> };
      case "userprofile":
        return { title: "User Profile", component: <div><UserProfile/></div> };
      case "setting":
        return { title: "Settings", component: <div>Settings Content</div> };
      default:
        return { title: "", component: null };
    }
  }

  return (
    <div>
      <div className="px-4 py-8 text-gray-600 ">
      <div className="flex justify-between border-b-2 border-blue-500 text-xl">
        <span className="  pb-1">Workbench</span>
        <span className="lg:hidden" onClick={() => setSidebartoggle(false)}>
          <IoMdCloseCircleOutline size={24} />
        </span>
      </div>
      <div className="flex flex-col gap-5 pt-5 text-lg">
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "addbuddy" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("addbuddy")}
        >
          <span className="pt-1">
            <IoPersonAddSharp size={20} />
          </span>
          <span>Add buddy </span>
        </div>
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "assistance" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("assistance")}
        >
          <span className="pt-1">
            <MdLiveHelp size={22} />
          </span>
          <span>Assistance </span>
        </div>
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "notification" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("notification")}
        >
          <span className="pt-1">
            <IoNotifications size={22} />
          </span>
          <span>Notifications</span>
        </div>
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "notes" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("notes")}
        >
          <span className="pt-1">
            <PiNotebookFill size={22} />
          </span>
          <span>Notes </span>
        </div>
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "userprofile" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("userprofile")}
        >
          <span className="pt-1">
            <CgProfile size={22} />
          </span>
          <span>User Profile</span>
        </div>
        <div
          className={`hover:bg-blue-500 hover:text-white p-2 flex gap-3 ${
            select == "setting" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleSelect("setting")}
        >
          <span className="pt-1">
            <IoSettings size={20} />
          </span>
          <span>Settings</span>
        </div>
      </div>
   
    </div>
    <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
      >
        <p>{modalContent.component}</p>
      </Modal>
    </div>

  );
};

export default Sidebar;
