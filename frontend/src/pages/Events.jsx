function Events() {
  const dummyData = [
    {
      time: "9:20 AM - 9: 40 AM",
      date: "August 1",
      day: "1st",
      name: "Event Number 1",
      venue: "Majestic Theater, 1925 Elm St",
      location: "Dallas, TX",
    },
    {
      time: "10:20 AM - 10: 40 AM",
      date: "August 2",
      day: "2nd",
      name: "Event Number 2",
      venue: "Majestic Theater, 1925 Elm St",
      location: "Dallas, TX",
    },
    {
      time: "10:20 AM - 10: 40 AM",
      date: "August 2",
      day: "2nd",
      name: "Event Number 2",
      venue: "Majestic Theater, 1925 Elm St",
      location: "Dallas, TX",
    },
  ];

  return (
    <>
      {dummyData.map((data) => {
        return (
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div class="p-8 flex items-center">
              <div class="pr-4">
                <p class="text-4xl font-bold">{data.day}</p>
              </div>
              <div>
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {data.date}
                </div>
                <p class="mt-2 text-gray-500 text-sm">{data.time}</p>
                <p class="mt-2 text-gray-500">{data.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Events;
