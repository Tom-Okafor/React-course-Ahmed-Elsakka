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
  }
}
