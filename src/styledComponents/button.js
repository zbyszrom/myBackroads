import styled from "styled-components";

export const Button = styled.button`
    
    margin-left: 1rem;
    background: transparent; 
    border: 2px solid var(--primary);
      a {
        color: var(--primary);
      }
      &:hover {
        background: var(--primary);  
        a {
          color: white; 
        }
      }
`