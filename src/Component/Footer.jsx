import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
export default function Footer() {
  const { getApi} = useAuth();
  const [data, setData] = useState([]);
  const { logo } = data?.[0] || {};

     useEffect(() => {
       try {
         getApi().then((responseData) => {
           setData(responseData.data);
         });
       } catch (error) {
         console.log(error);
       }
     }, [getApi]);
  return (
    <>
      <footer>
        <div className="ft-bar">
          <img src={logo} alt="" />
          <span>&copy; 2023. All Rights Reserved. Ramadhan</span>
        </div>
      </footer>
    </>
  );
}
