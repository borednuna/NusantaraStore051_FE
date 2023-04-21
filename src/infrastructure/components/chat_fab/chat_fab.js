import React from "react";
import './chat_fab.scss';

import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';

const ChatFab = () => {
  return (
    <div className="chatfab">
        <Fab variant="extended" className="fab">
            <ChatIcon sx={{ mr: 1 }} />
            Chat
        </Fab>
    </div>
  );
}

export default ChatFab;
