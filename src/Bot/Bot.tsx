import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as S from './Bot.styles';
import { BotObject } from '../App';
import { saveBots } from '../Api/BotApi';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

export interface BotProps {
  bots: BotObject[];
}

export const Bot: React.FC<BotProps> = ({
  bots,
}) => {
  const { id } = useParams();
  const parsedId = parseInt(id || '');

  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { deleteBot, editBot } = bindActionCreators(actionCreators, dispatch);

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const currentBot = bots.find(bot => bot.id == parsedId);

  function handleDeleteBot(id: number) {
    deleteBot(parsedId);
    navigate('/');
  }

  function submitEdit(data: any) {
    if (currentBot) {
      editBot({
        id: currentBot.id,
        name: data.name,
        purpose: data.purpose,
      });
      setIsEditing(false);
    }
  }

  return(
    <S.Container>
      <Link to="/">back</Link>
      <S.Header>
        Bot
      </S.Header>
      { !currentBot &&
        <S.NoBotFound>
            No Bot found
        </S.NoBotFound>
      }
      { currentBot && 
        <>
          <S.Content>
            <S.Bot>
              { !isEditing && 
              <>
                <S.BotTopContent>
                  <S.BotName>
                    {currentBot.name}
                  </S.BotName>
                  <S.ButtonContainer>
                    <S.EditButton onClick={() => setIsEditing(true)}>Edit</S.EditButton>
                    <S.DeleteButton onClick={() => handleDeleteBot(currentBot.id)}>Delete</S.DeleteButton>
                  </S.ButtonContainer>
                </S.BotTopContent>
                <S.BotPropose>
                  Purpose
                  {currentBot.purpose}
                </S.BotPropose>
              </>
              }
              {
                isEditing && 
                  // should be better create a generic component that can be used by add and edit case
                  <form onSubmit={handleSubmit(submitEdit)}>
                    <S.EditContainer> 
                      <label>
                        Name
                      </label>
                      <S.NameInput {...register('name', {required: true, value: currentBot.name})}/>
                      <label>
                        Purpose
                      </label>
                      <S.PurposeInput {...register('purpose', {required: true, value: currentBot.purpose})}/>
                      <S.ButtonContainer>
                        <S.SaveButton>Save</S.SaveButton>
                        <S.CancelButton onClick={() => setIsEditing(false)}>Cancel</S.CancelButton>
                      </S.ButtonContainer>
                    </S.EditContainer>
                  </form>
              }
            </S.Bot>
          </S.Content>
        </>
      }
    </S.Container>
  )
}