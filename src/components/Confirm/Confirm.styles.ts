import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    background-color: #F3F8FA;
    color: #274060;
    width: 229px;
    
`
export const Choice = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const Title = styled.h2` 
  font-size: 18px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
`