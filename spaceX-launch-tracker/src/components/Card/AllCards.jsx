import { useContext, useState, useEffect } from "react";
import { CardData } from "../App";
import Card from "./Card";
import Button from "../Button";

const AllCards = () => {
  const spaceXLauchesData = useContext(CardData);
  const cardsPerPage = 10;
  const buttons = spaceXLauchesData
    .filter(
      (_, index) => index < Math.ceil(spaceXLauchesData.length / cardsPerPage)
    )
    .map((_, index) => {
      return (
        <Button
          key={index}
          clickFunction={() => {
            updatePageControls(index);
          }}
          value={index + 1}
        />
      );
    });

  const [pageControls, setPageControls] = useState({
    startPoint: 0,
    endPoint: 10,
    pageButtons: buttons.map((button, index) => {
      if (index === 0) {
        return (
          <Button
            key={index}
            className="active"
            clickFunction={() => {
              updatePageControls(index);
            }}
            value={index + 1}
          />
        );
      }
      return button;
    }),
    launchBatch: spaceXLauchesData.filter(
      (_, index) => index >= 0 && index < 10
    ),
  });
  const { startPoint, endPoint, pageButtons, launchBatch } = pageControls;

  function updatePageControls(index) {
    scrollTo({ left: 0, top: 0, behavior: "smooth" });
    setPageControls((previousControls) => {
      return {
        ...previousControls,
        startPoint: index * cardsPerPage,
        endPoint: index * cardsPerPage + cardsPerPage,
        pageButtons: buttons.map((button, i) => {
          if (i === index) {
            return (
              <Button
                key={index}
                className="active"
                clickFunction={() => {
                  updatePageControls(index);
                }}
                value={index + 1}
              />
            );
          }
          return button;
        }),
      };
    });
  }
  
  useEffect(() => {
    setPageControls((previousControls) => {
      return {
        ...previousControls,
        launchBatch: spaceXLauchesData.filter(
          (_, index) =>
            index >= previousControls.startPoint &&
            index < previousControls.endPoint
        ),
      };
    });
  }, [startPoint, endPoint, spaceXLauchesData]);

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
      {pageButtons}
    </main>
  );
};

export default AllCards;
