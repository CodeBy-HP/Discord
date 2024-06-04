import React from "react";
import ServerIcon from "./ServerIcon";
import {
  ChevronDownIcon,
  PlusIcon,
  MicrophoneIcon,
  PhoneIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import Channel from "./Channel";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./Chat";

function Home() {
  const [user] = useAuthState(auth);
  const [channelsSnapshot, loading, error] = useCollection(
    collection(db, "channels")
  );

  const handleAddChannel = async () => {
    const channelName = prompt("Enter the channel name");
    if (channelName) {
      try {
        await addDoc(collection(db, "channels"), { channelName });
        alert("Channel added successfully!");
      } catch (e) {
        console.error("Error adding channel: ", e);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="flex flex-col space-y-3 bg-discord_serversBg
       p-3 min-w-max"
      >
        <div className="server-default hover:bg-discord_purple">
          <img src="discord-png.webp" alt="Discord" className="h-5" />
        </div>
        <hr className="border-gray-700 border w-8 mx-auto" />
        <ServerIcon image="pcboi.webp" />
        <ServerIcon image="images.png" />
        <ServerIcon image="boi2.jpg" />
        <ServerIcon image="channels4_profile.jpg.webp" />
        <div className="server-default hover:bg-discord_green group">
          <PlusIcon
            className="text-discord_green h-7
           group-hover:text-white"
          />
        </div>
      </div>
      <div className="bg-discord_channelsBg flex flex-col min-w-max">
        <h2
          className="flex text-white font-bold text-sm items-center
          justify-between border-b border-gray-800 p-4
          hover:bg-discord_serverNameHoverBg cursor-pointer"
        >
          Official PaPa server... <ChevronDownIcon className="h-5 ml-2" />
        </h2>
        <div
          className="text-discord_channel flex-grow 
        overflow-y-scroll scrollbar-hide"
        >
          <div className="flex items-center p-2 mb-2">
            <ChevronDownIcon className="h-3 mr-2" />
            <h4 className="font-semibold">Channels</h4>
            <PlusIcon
              className="h-6 ml-auto cursor-pointer hover:text-white"
              onClick={handleAddChannel}
            />
          </div>
          {loading ? (
            <p>Loading channels...</p>
          ) : error ? (
            <p>Error loading channels: {error.message}</p>
          ) : (
            <div className="flex flex-col space-y-2 px-2 mb-4">
              {channelsSnapshot?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div>
          )}
        </div>
        <div
          className="bg-discord_userSectionBg p-2 flex
         justify-between items-center space-x-8"
        >
          <div className="flex items-center p-2 border-t border-gray-800">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="h-10 rounded-full cursor-pointer"
                onClick={() => auth.signOut()}
              />
            ) : (
              <div
                className="h-10 w-10 rounded-full bg-gray-500 flex items-center 
              justify-center cursor-pointer"
                onClick={() => auth.signOut()}
              >
                <span className="text-white text-xs">
                  {user?.displayName?.charAt(0)}
                </span>
              </div>
            )}
            <h4 className="text-white text-xs font-medium ml-2">
              {user?.displayName}{" "}
              <span className="text-discord__userSectionText block">
                #{user?.uid.substring(0, 4)}
              </span>
            </h4>
          </div>
          <div className="text-gray-400 flex items-center">
            <div className="hover:bg-discord__iconHoverBg p-2 rounded-md">
              <MicrophoneIcon className="h-5 icon " />
            </div>
            <div className="hover:bg-discord__iconHoverBg p-2 rounded-md">
              <PhoneIcon className="h-5 icon" />
            </div>
            <div className="hover:bg-discord__iconHoverBg p-2 rounded-md">
              <CogIcon className="h-5 icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-discord_chatBg flex-grow">
        <Chat />
      </div>
    </div>
  );
}

export default Home;
