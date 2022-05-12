import {useContext, useState, } from 'react';

export const AttendanceContext = createContext(undefined);

export const useAttendanceContext = () => {
  return useContext(AttendanceContext);
};

export const AttendanceContextProvider = ({ ...other }) => {
  const [attendanceList, setAttendanceList] = useState([]);

  const contextValue = useMemo(
    () => ({
      attendanceList,
      setAttendanceList,
    }),
    [attendanceList, setAttendanceList]
  );

  return <AttendanceContext.Provider value={contextValue} {...other} />;
};