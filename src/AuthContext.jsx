/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext();
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [firstVisible, setFirstVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);


     const handleScroll = () => {
       const firstPositionFromTop = firstRef.current.getBoundingClientRect().top;
       const secondPositionFromTop = secondRef.current.getBoundingClientRect().top;
       const thirdPositionFromTop = thirdRef.current.getBoundingClientRect().top;

       if (firstPositionFromTop - window.innerHeight < 0) {
         setFirstVisible(true);
       }

       if (secondPositionFromTop - window.innerHeight < 0) {
         setSecondVisible(true);
       }

       if (thirdPositionFromTop - window.innerHeight < 0) {
         setThirdVisible(true);
       }
     };




  const getApi = async () => {
    try {
      const response = await axios.get("103.183.75.112/api/directory/dataList");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getApi,
    firstVisible,
    secondVisible,
    thirdVisible,
    firstRef,
    secondRef,
    thirdRef,
    handleScroll
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { AuthProvider, useAuth };
