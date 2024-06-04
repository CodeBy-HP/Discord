import { HashtagIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";

const Channel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
    navigate(`/channels/${id}`);
  };

  return (
    <div
      onClick={setChannel}
      className="font-medium flex items-center cursor-pointer
       hover:bg-discord_channelHoverBg 
    rounded-md hover:text-white"
    >
      <HashtagIcon className="h-5 mr-2" />
      {channelName}
    </div>
  );
};

export default Channel;
