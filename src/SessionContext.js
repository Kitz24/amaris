// SessionContext.js
import React, { createContext, useState } from 'react';

export const SessionContext = createContext(null); // Export SessionContext as named export

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
