import { useState, useEffect } from "react";

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState();

  console.log(members);

  useEffect(() => {
    async function fetchingMembers() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:5000/members");
        const resData = await response.json();
        setMembers(resData.members);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch members data",
        });
      }
      setIsFetching(false);
    }
    fetchingMembers();
  }, []);

  const classes = "text-white text-center text-4xl my-10";

  if (isFetching) {
    return (
      <div className={classes}>
        <p>Fetching ...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes}>
        <p>Something went wrong!</p>
      </div>
    );
  }

  return (
    <>
      <ol className="flex flex-col gap-3 text-xl font-bold text-white items-center">
        {members.map((member, index) => {
          return <li key={index}>{member}</li>;
        })}
      </ol>
    </>
  );
};

export default App;
