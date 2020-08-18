import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  color: var(--white);
  height: 80vh;

  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;

  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  margin-bottom: 50px;
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h2`
  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  line-height: 1;
  margin-bottom: 32px;
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`
  background-color: var(--white);
  border: 0;
  border-radius: 4px;
  color: var(--black);
  cursor: pointer;
  display: none;
  font-weight: bold;
  outline: none;
  padding: 16px 24px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    display: block;
  }
`;
