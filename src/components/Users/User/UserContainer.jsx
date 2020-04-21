import React, { useState } from 'react';
import User from './User';

const UserContainer = (props) => {
   const [writeMode, setWriteMode] = useState(false);

   const toggleWriteMod = (writeModeValue) => {
      setWriteMode(writeModeValue);
   };

   return <User
      writeMode={writeMode}
      openWriteBox={() => { toggleWriteMod(true) }}
      cancelWriting={() => { toggleWriteMod(false) }}
      {...props} />
}

export default UserContainer;