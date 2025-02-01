import React, { useState } from 'react';
import ChatList from '../components/ChatList';
import Chats from '../components/Chats';
import { useTheme } from '../Context/ThemeContext';


function Messages() {
    const { theme, toggleTheme } = useTheme();
  const [select, setSelect] = useState(0);
  const [showChat, setShowChat] = useState(false); // New state to toggle visibility

  return (
    <div className={`flex w-full h-full pt-20 ${theme === 'dark' ? 'bg-black': 'bg-white'}`}>
      <div className='w-full sm:hidden'>
        {!showChat && (
          <ChatList select={select} setSelect={setSelect} setShowChat={setShowChat}  />
        )}
        {showChat && (
          <Chats select={select} setShowChat={setShowChat} />
        )}
      </div>
      <div className='sm:flex md:w-full  hidden'>

        <ChatList select={select} setSelect={setSelect} setShowChat={setShowChat} />
        <Chats select={select} setShowChat={setShowChat} />
      </div>
    </div>
  );
}

export default Messages;
