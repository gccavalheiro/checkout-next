import * as S from './Main.styles';

export function Main({ title = 'Next boilerplate' }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
};

