import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
export default function Content() {
  const { getApi, firstVisible, secondVisible, thirdVisible, firstRef, secondRef, thirdRef, handleScroll } = useAuth();
  const [data, setData] = useState([]);
  const { playlist, banner, title, description } = data?.[0] || {};
  const firstPlaylistItem = playlist?.[0];
  const secondPlaylistItem = playlist?.[1];
  const thirdPlaylistItem = playlist?.[2];
  const firstPlaylistUrl = firstPlaylistItem ? firstPlaylistItem.url : "";
  const secondPlaylistUrl = secondPlaylistItem ? secondPlaylistItem.url : "";



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
      <section id="hero">
        <div className="hero">
          <img src={banner} alt="banner" />
          <div className="hero-text">
            <div className="title-hero">
              <h1>{title}</h1>
            </div>
            <div className="desc-hero">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="daftarPustaka" className={`section ${firstVisible ? "visibility" : ""}`} ref={firstRef}>
        <div className="box-image">
          <img src={firstPlaylistUrl} alt="" />
        </div>
        <div className="text-content">
          <h2>{firstPlaylistItem?.title}</h2>
          <h3>{firstPlaylistItem?.description}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste nisi incidunt beatae unde tempora debitis! Pariatur, quam iure accusantium consequuntur corporis necessitatibus natus dignissimos praesentium atque minima
            reiciendis fugiat optio temporibus impedit veniam provident cupiditate aut nesciunt velit. Blanditiis non ullam ea repellat nobis omnis eligendi optio quod in aut, beatae facilis, necessitatibus aliquid et ratione debitis
            similique consequatur dolores provident libero voluptatibus maiores voluptatum, corporis alias. Voluptas vitae, et alias perspiciatis, ad debitis odit veniam autem recusandae corrupti, blanditiis repellat in. Repellat magni
            quisquam exercitationem consequuntur voluptas. Repellat dolor itaque, numquam doloremque illum odit neque ut iusto dolorum!.
          </p>
        </div>
      </section>
      <section id="MobileApp" className={`section ${secondVisible ? "visibility" : ""}`} ref={secondRef}>
        <div className="box-mobile">
          <img src={secondPlaylistUrl} alt="" />
        </div>
        <div className="text-mobile">
          <div className="quote">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16">
              <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
            </svg>
          </div>
          <div className="desc-mobile">
            <h2>{secondPlaylistItem?.title}</h2>
            <h3>{secondPlaylistItem?.description}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste nisi incidunt beatae unde tempora debitis! Pariatur, quam iure accusantium consequuntur corporis necessitatibus natus dignissimos.</p>
          </div>
        </div>
      </section>
      <section id="Responsibilitas" className={`section ${thirdVisible ? "visibility" : ""}`} ref={thirdRef}>
        <div className="text-respons">
          <h2>{thirdPlaylistItem?.title}</h2>
          <h3>{thirdPlaylistItem?.description}</h3>
        </div>
        <div className="content-video">
          <iframe src={thirdPlaylistItem?.url} title="Vimeo Video" />
        </div>
      </section>
    </>
  );
}
