import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    color: ${theme.colors.white};
    width: 100%;
    height: 100vh;
    padding: ${theme.sizes['16px']};
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.sizes['40px']};
  `}
`
