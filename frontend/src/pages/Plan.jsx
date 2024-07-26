function Plan() {
  const username = "Peter";

  const colors = ["blue", "yellow", "red"];

  return (
    <>
      <h2>This is the Plan page</h2>

      <p>Hello, {username}!</p>

      <ul>
        {colors.map(function (color) {
          return <li>{color}</li>;
        })}
      </ul>
    </>
  );
}

export default Plan;
