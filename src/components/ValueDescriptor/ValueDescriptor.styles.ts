import styled from "styled-components"

const THEME = {
    primary: {
        label: '#274060',
        colorValue: '#274060',       
    },
    default: {
        label: '#274060',
        colorValue: '#0099FF',
    }
}


export const Wrapper = styled.div<{
    color: 'primary' | 'default'
    }>`
    display: flex;
    flex-direction: column;

    .Description{
        font-size: 12px;
        color: ${p => THEME[p.color].label}
    }
    div {
        font-size: 18px;
        color: ${p => THEME[p.color].colorValue};
    }
    .Value{
        font-weight: bolder;
    }

`