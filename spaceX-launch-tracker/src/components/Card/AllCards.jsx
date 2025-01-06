import { useContext } from "react";
import { CardData } from "../App";
import Card from "./Card";

const AllCards = () => {
  const spaceXLauchesData = useContext(CardData);
  return (
    <main className="card-block">
      {spaceXLauchesData.map((eachLaunch) => {
        const {
          id,
          name,
          date_local,
          rocket,
          details,
          launchpad,
          links: { webcast },
        } = eachLaunch;
        return (
          <Card
            key={id}
            name={name}
            date={date_local}
            rocket={rocket}
            details={details}
            launchSite={launchpad}
            webcast={webcast}
          />
        );
      })}
    </main>
  );
};

export default AllCards;

/*
for (let i = 0; i < spaceXLauchesData.length; i++) {
    const {
      id,
      name,
      date_local,
      rocket,
      details,
      launchpad,
      links: { webcast },
    } = spaceXLauchesData[i];
  return (
    <Card
      key={id}
      name={name}
      date={date_local}
      rocket={rocket}
      details={details}
      launchSite={launchpad}
      webcast={webcast}
    />
  );
}
*/