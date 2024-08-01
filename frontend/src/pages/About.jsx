function About() {
  return (
    <>
      <div class="flex flex-col items-center p-[30px]">
        <img class="w-1/4 m-[10px]" src="https://placehold.co/200" />
        <h1 class=" w-1/2 text-center text-7xl m-[10px]">
          CREATING EVENTS WITH A PURPOSE!
        </h1>
        <p class="w-1/2 m-[10px] text-2xl">
          Not only do we love planning events, but we also love to give back to
          our community and we use our events as a voice to activate a mission.
          If we're not helping raise funds through our events, then we're giving
          ten percent back to a local nonprofit of our choice. It takes a
          community!
        </p>
        <button class="bg-blue-400 inline-block px-6 py-2 border-2 border-blue-600 text-gray-900 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-[200px] h-[50px]">
          Tell Me More!
        </button>
      </div>
    </>
  );
}

export default About;
