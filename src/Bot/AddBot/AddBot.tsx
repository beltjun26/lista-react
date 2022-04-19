import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import * as S from './AddBot.styles';

export interface AddBotProps {
  close: () => void;
}

export const AddBot: React.FC<AddBotProps> = ({
  close,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const { addBot } = bindActionCreators(actionCreators, dispatch);

  function handleCancel() {
    close();
  }

  function submit(data: any) {
    addBot({
      name: data.name,
      purpose: data.purpose,
    })
    close();
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <S.Container>
        <S.Label>Name</S.Label>
        <S.Input {...register('name', { required: true })}/>
        {errors.name?.type === 'required' && <S.Error>Name is required</S.Error>}
        <S.Label>Purpose</S.Label>
        <S.Input {...register('purpose', { required: true })}/>
        {errors.purpose?.type === 'required' && <S.Error>Purpose is required</S.Error>}
        <S.ButtonContainer>
          <button>Add</button>
          <button onClick={handleCancel}>cancel</button>
        </S.ButtonContainer>
      </S.Container>
      </form>
  )
}