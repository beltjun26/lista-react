import { Dispatch } from 'redux';
import { BotObject } from '../../App';
import { Action } from '../actions';
import * as botBackend from '../../Api/BotBackendApi';

export const getBots = () => {
  return async (dispatch: Dispatch<Action>) => {
    const bots = await botBackend.getBots();
    dispatch({
      type: "FETCH_BOTS",
      payload: bots,
    });
  }
}

export const addBot = (bot: Pick<BotObject, 'name' | 'purpose'>) => {
  return async (dispatch: Dispatch<Action>) => {
    const addedBot = await botBackend.addBot(bot);
    dispatch({
      type: "ADD_BOT",
      payload: addedBot,
    });
  }
}

export const editBot = (bot: BotObject) => {
  return async (dispatch: Dispatch<Action>) => {
    // editBotApi(bot);
    await botBackend.editBot(bot);
    dispatch({
      type: "EDIT_BOT",
      payload: bot,
    })
  }
}

export const deleteBot = (botId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    await botBackend.deletedBot(botId);
    // deleteBotApi(botId)
    dispatch({
      type: "DELETE_BOT",
      payload: botId,
    })
  }
}