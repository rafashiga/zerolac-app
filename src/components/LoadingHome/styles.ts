import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  .info-container {
    width: 100%;

    @media (min-width: ${props => props.theme.screen.desktop}) {
      width: 50%;
    }
  }

  .image-loading {
    width: 200px;
    height: 300px;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media (min-width: ${props => props.theme.screen.desktop}) {
      width: 400px;
      height: 520px;
      margin: 0;
    }
  }

  .title-loading {
    width: 400px;
    height: 2.5rem;
    margin-bottom: 1rem;
  }

  .text-loading {
    width: 100%;
    height: 1.5rem;
    margin-bottom: 1rem;

    &:last-child {
      width: 50%;
    }
  }

  @media (min-width: 900px) {
    width: 65%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`
