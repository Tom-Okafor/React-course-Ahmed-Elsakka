import { CREATE_SHUFFLED_IMAGE_COLLECTION } from "../constants";

export function CardReducer(state, action) {
  switch (action.type) {
    case "Card Click":
      return state.gameStarted
        ? {
            ...state,
            clickedCardIndex: [...state.clickedCardIndex, action.payload.index],
            haveTwoCardsBeenClicked: state.clickedCardIndex.length
              ? true
              : false,
            image: state.image ? state.image : action.payload.image,
            matchesMade:
              state.image === action.payload.image
                ? state.matchesMade++
                : state.matchesMade,
            hasMatchBeenMade:
              state.image === action.payload.image ? true : false,
          }
        : {
            ...state,
            alert: "Sorry, you must click the start button before you begin.",
          };
    case "Start Game":
      return {
        ...state,
        gameStarted: true,
        alert: "Game started! You better get to matching.",
      };
    case "Restart Game":
      return {
        ...state,
        gameStarted: false,
        alert:
          "Click the start button and then click on the cards to flip them over and find the matching pairs.",
      };
    case "Game Started":
      return { ...state, currentSeconds: state.currentSeconds + 1 };
    case "Game Reset":
      return {
        ...state,
        clickedCardIndex: [],
        image: null,
        haveTwoCardsBeenClicked: false,
        hasMatchBeenMade: false,
        matchesMade: 0,
        gameStarted: false,
        currentSeconds: 0,
      };
    case "Matches Complete":
      return {
        ...state,
        currentSeconds: 0,
        gameStarted: false,
        fastestSeconds:
          state.fastestSeconds === 0
            ? state.currentSeconds
            : state.fastestSeconds > state.currentSeconds
            ? state.currentSeconds
            : state.fastestSeconds,
      };
    case "Clear Matched Cards":
      return { ...state, matchedCards: [] };
    case "Two Cards Clicked":
      return {
        ...state,
        image: null,
        matchedCards: state.hasMatchBeenMade
          ? [...state.matchedCards, ...state.clickedCardIndex]
          : state.matchedCards,
        haveTwoCardsBeenClicked: false,
        hasMatchBeenMade: false,
        alert:
          state.alert === `${state.totalMatchesNeeded - 1} matches made.`
            ? `All matches made. Start again and try to beat your fastest time.`
            : state.matchesMade === 1
            ? `${state.matchesMade} match made.`
            : `${state.matchesMade} matches made.`,
        failedMatch: !state.hasMatchBeenMade ? [...state.clickedCardIndex] : [],
      };
    case "Clear Clicked Card Index":
      return { ...state, clickedCardIndex: [] };
    case "Clear Failed Match":
      return { ...state, failedMatch: [] };
    case "Reshuffle Card":
      return {
        ...state,
        SHUFFLED_IMAGES: CREATE_SHUFFLED_IMAGE_COLLECTION(state.level),
      };
    case "Clear Matches Made":
      return {
        ...state,
        matchesMade: 0,
        alert:
          "Click the start button and then click on the cards to flip them over and find the matching pairs.",
      };
    case "Start New Level":
      return {
        ...state,
        level: action.payload,
        SHUFFLED_IMAGES: CREATE_SHUFFLED_IMAGE_COLLECTION(action.payload),
      };
    case "Update Total Matches Needed":
      return {
        ...state,
        totalMatchesNeeded:
          state.level === "easy" ? 4 : state.level === "intermediate" ? 6 : 8,
      };
  }
}
