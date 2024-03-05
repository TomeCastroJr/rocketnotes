import styled from "styled-components";
import notebook from '../../assets/notebook.png'

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    
    background-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700};
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1{
        font-size: 48px;
        color: ${ ({ theme }) => theme.COLORS.ORANGE};
    }

    > h2{
        font-size: 24px;
        margin: 35px 0;
    }

    > p{
        font-size: 14px;
        color: ${ ({ theme}) => theme.COLORS.GRAY_100 };
    }

    > button:nth-of-type(2){
        margin-top: 40px;
    }
    >a{
        background: none;
        color: ${ ({ theme }) => theme.COLORS.ORANGE};
        border: none;
        font-size: 20px;
        margin-top: 20px;
    }
`

export const Background = styled.div`
    flex: 1;
    background-image: url(${notebook});
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
`