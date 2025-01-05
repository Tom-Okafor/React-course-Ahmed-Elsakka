import { useState, useEffect } from "react";

const UserDetails = () => {
  const [details, setDetails] = useState({
    inputValue: "",
    userData: "",
    error: "",
  });
  const updateDetails = (event) => {
    setDetails((prevDetails) => {
      return { ...prevDetails, inputValue: event.target.value };
    });
  };
  const { inputValue, userData, error } = details;

  useEffect(() => {
    inputValue &&
      (async () => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${inputValue}`
          );
          console.log(response);
          if (!response.ok) {
            throw new Error("Not valid input", error);
          }
          const data = await response.json();
          setDetails((prevDetails) => {
            return { ...prevDetails, userData: data };
          });
        } catch (error) {
          console.error("Not found", error);
          setDetails((prevDetails) => {
            return {
              ...prevDetails,
              userData: "",
              error: "User not found. Please, enter a valid input.",
            };
          });
        }
      })();
  }, [inputValue]);

  return (
    <div className="userdetails">
      <input type="text" value={inputValue} onChange={updateDetails} />
      {userData && inputValue ? (
        <>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>User Name:</strong> {userData.username}
          </p>
          <p>
            <strong>User Email:</strong> {userData.email}
          </p>
        </>
      ) : error && inputValue ? (
        <p>{error}</p>
      ) : (
        <h3>Please input a value</h3>
      )}
    </div>
  );
};

export default UserDetails;
