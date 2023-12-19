function Homepage() {
  return (
    <>
      <div className="min-h-screen flex items-center px-4">
        <section className="max-w-screen-xl mx-auto flex flex-col justify-center w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-8">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="/rafiq.jpg"
                alt="Rounded avatar"
              />
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="/rafiq.jpg"
                alt="Rounded avatar"
              />
            </div>
            <div className="font-incon text-center text-xs uppercase">
              <p>
                Welcome to my portfolio website <br />{" "}
                {`[use dekstop for better experience]`}
              </p>
            </div>
          </div>
          <div className="flex lg:justify-between justify-center items-center">
            <div className="hidden lg:block">
              <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" fill="white" />
                <line
                  x1="51"
                  y1="11"
                  x2="51"
                  y2="90"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="90"
                  y1="51"
                  x2="11"
                  y2="51"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="text-center uppercase">
              <h2 className="font-dharma font-semibold lg:text-[25rem]  text-[10rem] leading-none">hello !</h2>
            </div>
            <div className="hidden lg:block">
              <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="100" fill="white" />
                <line
                  x1="51"
                  y1="11"
                  x2="51"
                  y2="90"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="90"
                  y1="51"
                  x2="11"
                  y2="51"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Homepage;
