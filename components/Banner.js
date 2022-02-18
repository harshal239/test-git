import Header from "./Header";

export default function Banner() {
  return (
    <div className="overflow-hidden relative banner">
      <video
        className="absolute left-0 top-0"
        src="/images/banner_video.m4v"
        loop
        muted
        autoPlay
        poster="/images/banner_poster.JPG"
        disablePictureInPicture
      />
      <Header variant="home" logoColor="white" />
      <h1 className="marquee_text absolute top-1/4 text-white font-bold hidden md:block">
        INTEGRITY. PASSION. INNOVATION.
      </h1>
      <div className="absolute bottom-9 left-6 md:left-12">
        <p className="mt-28 text-white max-w-2/5 font-bold md:font-normal desc-text">
          The One Stop Solution for Your Digital Needs. Delivered by passionate
          developers.
        </p>
        <a href="#main" className="scroll-arrow">
          <img
            className="mt-9 cursor-pointer w-10 h-10 md:w-14 md:h-14 md:mt"
            src="/images/arrow.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
