const FetchSpaceXData = async () => {
  try {
    const url = "https://api.spacexdata.com/v4/launches";
    const response = await fetch(url);
    if (!response.ok)
      throw Error(
        "Sorry, we cannot load this resource at this moment. Please check your connection."
      );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Unable to load resource.", error);
    throw new Error("Error was encountered loading this resource.");
  }
};

export default FetchSpaceXData;
