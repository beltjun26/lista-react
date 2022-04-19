import { BotObject } from "../App";

export function getBots(): BotObject[] {
  
  const botsJSON = localStorage.getItem('bots');
  return botsJSON ? JSON.parse(botsJSON) : []
}

export function saveBots(bots: BotObject[]): void {
  const botsJSON = JSON.stringify(bots);
  localStorage.setItem('bots', botsJSON);
}

export function deleteBotApi(botId: number): void {
  const bots = getBots();
  const newBots = bots.filter(bot => bot.id !== botId);
  saveBots(newBots);
}

export function editBotApi(bot: BotObject): void {
  const bots = getBots();
  const newBots = bots.map(iterateBot => iterateBot.id === bot.id ? bot : iterateBot);
  saveBots(newBots);
}

export function addBot(bot: Pick<BotObject, 'name' | 'purpose'>): BotObject {
  const bots = getBots();

  const randomID = Math.floor(Math.random() * 1000000);
  const newBot = {...bot, id: randomID};
  bots.push(newBot);
  saveBots(bots);

  return newBot;
}

