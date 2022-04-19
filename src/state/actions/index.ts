import { BotObject } from "../../App";


export interface GetBotsAction {
  type: "FETCH_BOTS",
  payload: BotObject[],
}

export interface AddBotAction {
  type: "ADD_BOT",
  payload: BotObject;
}

export interface EditBotAction {
  type: "EDIT_BOT",
  payload: BotObject;
}

export interface DeleteBotAction {
  type: "DELETE_BOT",
  payload: number,
}

export type Action = GetBotsAction | AddBotAction | EditBotAction | DeleteBotAction;