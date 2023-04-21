import React, { useState, useEffect } from "react";
import './chat.scss';

import Fab from '@mui/material/Fab';
import ChatIcon from '@mui/icons-material/Chat';
import Drawer from '@mui/material/Drawer';

const ChatFab = () => {
    const [state, setState] = useState(false);
    const [isDesktop, setDesktop] = useState(true);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setDesktop(false);
            } else {
                setDesktop(true);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const drawerContentDesktop = (
        <div style={{ 
            width: '30vw',
            height: '100vh',
            display: 'flex'
        }}>
            <p style={{ margin: 'auto', textAlign: 'center' }}>This is a preview for the upcoming chatbox</p>
        </div>
    );

    const drawerContentMobile = (
        <div style={{ 
            width: '90vw',
            height: '100vh',
            display: 'flex'
        }}>
            <p style={{ margin: 'auto', textAlign: 'center' }}>This is a preview for the upcoming chatbox</p>
        </div>
    )

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState(open);
      };

    return (
        <div className="chatfab">
            <Fab
                variant="extended"
                className="fab"
                onClick={toggleDrawer(true)}
            >
                <ChatIcon sx={{ mr: 1 }} />
                Chat
            </Fab>
            <Drawer
                open={state}
                onClose={toggleDrawer(false)}
            >
                {isDesktop ? drawerContentDesktop : drawerContentMobile}
            </Drawer>
        </div>
    );
}

export default ChatFab;
