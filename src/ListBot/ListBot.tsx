import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BotObject } from '../App';
import { AddBot } from '../Bot/AddBot/AddBot';
import * as S from './ListBot.styles';

export interface ListBotProps {
  bots: BotObject[]
}

export const ListBot: React.FC<ListBotProps> = ({
  bots
}) => {
  
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();

  function handleClick(id: number) {
    navigate(`/bot/${id}`);
  }

  return (
    <S.Container>
      <S.Header>
        Bot List
      </S.Header>

      { isAdding &&
        <AddBot close={() => setIsAdding(false)}/>
      }
      { !isAdding && 
        <S.Content>
          <S.AddBotButton onClick={() => setIsAdding(true)}>Add Bot</S.AddBotButton>
          { !bots && <p>Empty</p>}
          { bots && 
            <>
              {bots.map( bot => 
                <S.Bot onClick={() => handleClick(bot.id)} key={bot.id}>
                  <S.BotName>
                    {bot.name}
                  </S.BotName>
                </S.Bot>
              )}
            </>
          }
        </S.Content>
      }
    </S.Container>
  )
}