import { useContext, useState } from "react";
import { CardData } from "../App";
import Card from "./Card";

const AllCards = () => {
  const spaceXLauchesData = useContext(CardData);

  const launchBatch = spaceXLauchesData.filter(
    (_, index) => index >= 0 && index < 20
  );

  return (
    <main className="card-block">
      {launchBatch.map((eachLaunch) => {
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
      {spaceXLauchesData
        .filter((_, index) => index < Math.ceil(spaceXLauchesData.length / 10))
        .map((_, index) => {
          return <button key={index}>{index + 1}</button>;
        })}
    </main>
  );
};

export default AllCards;
