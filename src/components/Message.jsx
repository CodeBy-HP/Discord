import React from "react";
import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";
import { auth, db } from "../firebase";
import { TrashIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { deleteDoc, doc } from "firebase/firestore";

function Message({ id, message, timestamp, name, email, photoURL }) {
  const channelId = useSelector(selectChannelId);
  const [user] = useAuthState(auth);

  const handleDeleteMessage = async () => {
    if (channelId && id) {
      try {
        const messageDocRef = doc(db, "channels", channelId, "messages", id);
        await deleteDoc(messageDocRef);
      } catch (error) {
        console.error("Error deleting message: ", error);
      }
    }
  };

  return (
    <div className="flex items-center p-1 pl-5 my-5 mr-2
     hover:bg-discord_messageBg group">
      {photoURL ? (
        <img
          src={photoURL}
          alt=""
          className="h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl"
        />
      ) : (
        <UserCircleIcon className="h-10 rounded-full cursor-pointer mr-3 
        hover:shadow-2xl text-gray-500" />
      )}
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium">
          <span className="hover:underline text-white text-sm cursor-pointer">
            {name}
          </span>
          <span className="text-discord_messageTimestamp text-xs">
            {moment(timestamp?.toDate()).format("lll")}
          </span>
        </h4>
        <p className="text-sm text-discord_message">{message}</p>
      </div>
      {user?.email === email && (
        <div
          className="hover:bg-discord_deleteIcon p-1 ml-auto rounded-sm
           text-discord_deleteIcon hover:text-white cursor-pointer"
          onClick={handleDeleteMessage}
        >
          <TrashIcon className="h-5 hidden group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Message;
