import styled from 'styled-components'

export const Container = styled.li`
  display: grid;
  grid:
    'thumbnail thumbnail' auto
    'avatar title' auto
    '. info' auto / 48px 1fr;

  width: 100%;
  padding: 8px;
  min-width: 258px;

  #thumbnail {
    grid-area: thumbnail;

    padding-bottom: 8px;
    width: 100%;
  }

  #avatar {
    grid-area: avatar;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }

  #title {
    grid: title;

    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 1.4rem;

    color: ${({ theme }) => theme.colors.secondary};
  }

  #info {
    grid-area: info;

    display: flex;
    align-items: center;

    font-size: 1.2rem;
  }

  @media screen and (min-width: 810px) {
    width: max(50%, 250px);
  }

  @media screen and (min-width: 1070px) {
    width: max(33.33%, 250px);
  }

  @media screen and (min-width: 1333px) {
    width: max(25%, 250px);
  }

  @media screen and (min-width: 1850px) {
    width: max(16.66%, 250px);
  }
`
