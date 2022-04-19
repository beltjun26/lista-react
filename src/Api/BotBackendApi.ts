import axios from "axios";
import { BotObject } from "../App";

const backendDomain = process.env.REACT_APP_BACKEND_DOMAIN;
const backendPort = process.env.REACT_APP_BACKEND_PORT;

const backendUrl = `http://${backendDomain}:${backendPort}`;

export function getBots(): Promise<BotObject[]> {
  return axios.get(`${backendUrl}/bots`)
    .then(response => response.data.bots);
}

export function addBot(bot: Pick<BotObject, 'name' | 'purpose'>): Promise<BotObject> {
  return axios.post(`${backendUrl}/bots`, {
    name: bot.name,
    purpose: bot.purpose,
  }).then(response => {
    return {
      id: response.data.id,
      name: response.data.name,
      purpose: response.data.purpose,
    }
  });
}

export async function deletedBot(botId: number): Promise<number> {
  return axios.delete(`${backendUrl}/bots/${botId}`)
    .then(response => {
      return response.data.id;
    })
}

export async function editBot(bot: BotObject): Promise<BotObject> {
  return axios.put(`${backendUrl}/bots/${bot.id}`, {
    name: bot.name,
    purpose: bot.purpose,
  }).then(response => {
      return {
        id: response.data.id,
        name: response.data.name,
        purpose: response.data.purpose,
      }
    })
}