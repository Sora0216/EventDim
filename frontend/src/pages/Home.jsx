function Home() {
  return (
    <>
      <div className="border-2 bg-blue-100 h-screen bg-cover relative">
        <h1 className="absolute" id="main-title">
          Hello World
        </h1>

        <video autoPlay muted loop>
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
