import styled from 'styled-components';
import {createGlobalStyle} from "styled-components" 

export {InJs,StyledProps,Extending,GlobalCss}

//CSS-in-JS
const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;
function InJs() {
  return (
    <>
      <MyHeader>Welcome!</MyHeader>
    </>
  )
}

// Props in Styled Components
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`
function StyledProps() {
  return (
    <div>
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
    </div>
  );
}

// Extending Styles
const Tombol = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;
const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;
const SuccessButton = styled(Button)`
  background-color: #28a745;
`;
function Extending() {
  return (
    <div>
      <PrimaryButton>Primary</PrimaryButton>
      <SuccessButton>Success</SuccessButton>
    </div>
  );
}

// Global Styles
const GlobalStyle = createGlobalStyle`
  h1 {
    color: white;
    background-color: purple;
    font-family: Arial, sans-serif;
  }

  .myparagraph {
    font-family: courier, monospace;
    color: blue;
  }
`;

function GlobalCss() {
  return (
    <>
      <GlobalStyle />
      <h1>Welcome!</h1>
      <p className="myparagraph">This paragraph is styled with global styles.</p>
    </>
  );
}