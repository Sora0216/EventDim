function Home() {
  return (
    <>
      <div class="border-2 bg-blue-100 bg-cover relative">
        <h1 class="absolute" id="main-title">
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
