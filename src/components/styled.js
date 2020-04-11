import styled from "styled-components";

export const Button = styled.button`
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);    
    transition: var(--transition);
    cursor: pointer;
    border: 2px solid var(--primary);
    padding: 1rem 1.5rem;
`
export const Submit = styled.input.attrs({type: 'submit', value: 'Submit'})`
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    transition: var(--transition);
    cursor: pointer;
    border: 2px solid var(--primary);
    padding: 1rem; 
    background: var(--primary);
    color: white;
    &:hover {
      background: transparent;      
      color: var(--primary);  
  }
  
`