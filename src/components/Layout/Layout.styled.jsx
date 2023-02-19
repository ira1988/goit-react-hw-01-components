import styled from '@emotion/styled';
const Layout = styled.div`
  padding: 20px;
`;
const ContentWrapper = styled.div`
  display: flex;
  width: 1100px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  border: 2px solid black;

  padding: 20px;
  margin: auto;
`;

const Cart = styled.div`
  width: 500px;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
  background: wheat;
`;
export { Cart, Layout, ContentWrapper };
