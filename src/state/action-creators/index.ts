import { Dispatch } from 'redux';
import { BotObject } from '../../App';
import { Action } from '../actions';
import * as botBackend from '../../Api/BotBackendApi';
import * as localStorage from '../../Api/LocalStorageApi'

const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN;
const backendPort = process.env.REACT_APP_BACKEND_PORT;

const hasBackendUrl = backendPort && backendDomain;
const api = hasBackendUrl ? botBackend : localStorage;

export const getBots = () => {
  return async (dispatch: Dispatch<Action>) => {
    const bots = await api.getBots();
    dispatch({
      type: "FETCH_BOTS",
      payload: bots,
    });
  }
}

export const addBot = (bot: Pick<BotObject, 'name' | 'purpose'>) => {
  return async (dispatch: Dispatch<Action>) => {
    const addedBot = await api.addBot(bot);
    dispatch({
      type: "ADD_BOT",
      payload: addedBot,
    });
  }
}

export const editBot = (bot: BotObject) => {
  return async (dispatch: Dispatch<Action>) => {
    await api.editBot(bot);
    dispatch({
      type: "EDIT_BOT",
      payload: bot,
    })
  }
}

export const deleteBot = (botId: number) => {
  return async (dispatch: Dispatch<Action>) => {
    await api.deleteBot(botId);
    dispatch({
      type: "DELETE_BOT",
      payload: botId,
    })
  }
}