import { getBots } from "../../Api/BotApi";
import { BotObject } from "../../App";
import { Action } from "../actions";

const initialState = getBots();

export const botsReducer = (state: BotObject[] = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_BOTS":
      return action.payload;
    case "ADD_BOT":
      // Looks like i need to deconstruct this so redux detects there's a change in state as
      // compared to just using state.push
      return [...state, action.payload];
    case "EDIT_BOT":
      const payloadBot = action.payload;
      return state.map(bot => bot.id === payloadBot.id ? payloadBot : bot);
    case "DELETE_BOT":
      return state.filter(bot => bot.id !== action.payload);
    default:
      return state;
  }
}