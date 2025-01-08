import { shuffleIndex } from "../constants";

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
        : { ...state };
    case "Start Game":
      return { ...state, gameStarted: true };
    case "Restart Game":
      return { ...state, gameStarted: false };
    case "Game Started":
      return { ...state, currentSeconds: state.currentSeconds + 1 };
    case "Game Reset":
      return { ...state, currentSeconds: 0, gameStarted: false };
    case "Matches Complete":
      return {
        ...state,
        // clickedCardIndex: [],
        // image: null,
        // haveTwoCardsBeenClicked: false,
        currentSeconds: 0,
        gameStarted: false,
        matchesMade: 0,
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
      };
    case "Clear Clicked Card Index":
      return { ...state, clickedCardIndex: [] };
    case "Reshuffle Card":
      return {
        ...state,
        SHUFFLED_INDEX: shuffleIndex(),
      };
  }
}
