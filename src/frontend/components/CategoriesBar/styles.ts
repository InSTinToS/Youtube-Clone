import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

interface ArrowButtonProps {
  visible: boolean
}

interface CategoryProps {
  selected: boolean
}

interface ContainerProps {
  sidebarOpen: boolean
  ulWidth?: number
}

export const Categories = styled.div`
  &,
  ul {
    display: flex;
    align-items: center;

    height: 100%;
  }
`

export const Shadow = styled.div`
  width: 100%;
  opacity: 0.9;
  filter: blur(4px);
  height: calc(100% - 4px);
  border-radius: 16px 0 0 16px;

  background-color: ${({ theme }) => theme.colors.quinary};
`

const ArrowButton = styled.button.attrs({
  type: 'button'
})<ArrowButtonProps>`
  position: absolute;
  top: 50%;
  z-index: 1;

  display: ${({ visible }) => (visible ? 'block' : 'none')};

  width: 56px;
  height: 100%;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;

    width: 16px;
    height: 16px;
    transform: translate(-50%, -50%);

    fill: ${({ theme }) => theme.colors.secondary};
  }
`

export const LeftArrow = styled(ArrowButton)`
  left: -10px;
  transform: rotate(180deg) translateY(50%);
`

export const RightArrow = styled(ArrowButton)`
  right: 10px;
  transform: translateY(-50%);
`

export const Category = styled(motion.li)<CategoryProps>`
  white-space: nowrap;

  :last-child {
    margin-right: 24px;
  }

  :first-child {
    margin-left: 24px;
  }

  + li {
    margin-left: 12px;
  }

  button {
    height: 32px;
    padding: 0px 12px;
    border-radius: 16px;

    color: ${({ theme, selected }) =>
      selected ? theme.colors.quaternary : theme.colors.secondary};
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.secondary : theme.colors.quaternary};
  }
`

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  top: 56px;
  left: 0px;

  margin: 0;
  height: 56px;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.quinary};
  border-top: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.tertiary};

  @media screen and (min-width: 800px) {
    ${({ sidebarOpen }) => css`
      width: ${`calc(100vw - ${sidebarOpen ? '240px' : '72px'})`};
      left: ${sidebarOpen ? 240 : 72}px;
    `}
  }
`
