import eyeMask from "../../../images/view.png";

const Item = (props) => {
  return (
    <>
      <div className="projects">
      <svg className="projects__image-viev" width="100" height="58" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M86.2534 15.4207C66.1706 -4.66205 33.4966 -4.66205 13.4139 15.4207L0 28.8329L13.7466 42.5795C23.7872 52.62 36.9764 57.642 50.1672 57.642C63.3581 57.642 76.5456 52.6217 86.5878 42.5795L100.002 29.1657L86.2534 15.4207ZM84.1976 40.191C65.4324 58.9545 34.9003 58.9545 16.1351 40.191L4.77703 28.8329L15.8024 17.8075C34.5676 -0.955968 65.0997 -0.955968 83.8649 17.8075L95.223 29.1657L84.1976 40.191Z" fill="white"/>
      <path d="M48.2635 15.436C41.7432 15.436 36.4392 20.7401 36.4392 27.2604C36.4392 28.1928 37.1959 28.9496 38.1284 28.9496C39.0608 28.9496 39.8176 28.1928 39.8176 27.2604C39.8176 22.6033 43.6064 18.8144 48.2635 18.8144C49.1959 18.8144 49.9527 18.0577 49.9527 17.1252C49.9527 16.1928 49.1976 15.436 48.2635 15.436Z" fill="white"/>
      <path d="M49.9527 6.98999C37.8446 6.98999 27.9932 16.8413 27.9932 28.9494C27.9932 41.0576 37.8446 50.9089 49.9527 50.9089C62.0608 50.9089 71.9121 41.0576 71.9121 28.9494C71.9121 16.8413 62.0625 6.98999 49.9527 6.98999ZM49.9527 47.5305C39.7078 47.5305 31.3716 39.1944 31.3716 28.9494C31.3716 18.7045 39.7078 10.3684 49.9527 10.3684C60.1976 10.3684 68.5338 18.7045 68.5338 28.9494C68.5338 39.1944 60.1993 47.5305 49.9527 47.5305Z" fill="white"/>
      </svg>

        {/* <img className="projects__image-viev" src={eyeMask} alt="viev" /> */}
        <img className="projects__image" src={props.src} alt="pictures" />
      </div>
    </>
  );
};

export default Item;
