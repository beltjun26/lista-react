import { BotObject } from "../App";

export async function getBots(): Promise<BotObject[]> {
  const botsJSON = localStorage.getItem('bots');
  return botsJSON ? JSON.parse(botsJSON) : []
}

export async function addBot(bot: Pick<BotObject, 'name' | 'purpose'>): Promise<BotObject> {
  const bots = await getBots();

  // generate random ID for bot
  const randomID = Math.floor(Math.random() * 1000000);
  const newBot = {...bot, id: randomID};
  bots.push(newBot);
  saveBots(bots);

  return newBot;
}

export async function deleteBot(botId: number): Promise<number> {
  const bots = await getBots();

  const newBots = bots.filter(bot => bot.id !== botId);
  saveBots(newBots);

  return botId;
}

export async function editBot(bot: BotObject): Promise<BotObject> {
  const bots = await getBots();

  const newBots = bots.map(iterateBot => iterateBot.id === bot.id ? bot : iterateBot);
  saveBots(newBots);

  return bot
}


function saveBots(bots: BotObject[]): void {
  const botsJSON = JSON.stringify(bots);
  localStorage.setItem('bots', botsJSON);
}




