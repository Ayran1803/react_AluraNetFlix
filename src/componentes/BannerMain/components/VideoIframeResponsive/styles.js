import styled from 'styled-components';

export const VideoContainer = styled.div`
  padding-top: 56.25%;
  position: relative;
  width: 100%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  bottom: 0;
  height: 100%;
  left: 0;
  right: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
