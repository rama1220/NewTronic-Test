import { useAuth } from "../AuthContext";
import { useState, useEffect } from "react";

export default function Header() {
  const { getApi, firstRef, secondRef, thirdRef, handleScroll, Scrollbar } = useAuth();
  const [navActive, setNavactive] = useState(false);
  const [burger, setBurger] = useState(false);
  const [data, setData] = useState([]);
  const { playlist, logo } = data?.[0] || {};
  const logoSrc = logo || "";

  const toggleNavActive = () => {
    setNavactive(!navActive);
    setBurger(!burger);
  };
    const handleLiClick = (ref) => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    };

  useEffect(() => {
    try {
      getApi().then((responseData) => {
        setData(responseData.data);
      });
    } catch (error) {
      console.log(error);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getApi, handleScroll]);

  return (
    <>
      <header>
        <nav>
          <div className="logo" onClick={Scrollbar}>
            <img src={logoSrc} alt="" />
          </div>
          <ul className={`nav-right ${navActive ? "nav-active" : ""}`}>
            {playlist?.map((item, index) => (
              <li key={item.id} onClick={() => handleLiClick(index === 0 ? firstRef : index === 1 ? secondRef : thirdRef)}>
                <a>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={`burger ${burger ? "toggle-burger" : ""}`} onClick={toggleNavActive}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </header>
    </>
  );
}
