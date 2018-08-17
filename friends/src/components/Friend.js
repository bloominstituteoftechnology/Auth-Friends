import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


const Form = styled.div`

    display: flex;
    max-width: 525px;
    width: 100%;
    height: 300px;
    border: 1px solid gray;
    border-radius: 40px;
    flex-direction: column;
    margin: 20px 0;
    background-color: rgba(255, 255,255, 0.8);
    align-items: center;
    justify-content: center;
    > p {

    }
`
const Name = styled.div`

        >h2 {
            font-size: 2.4rem;
            font-weight: bold;
            letter-spacing: 0.22rem;
            color: #FF9500;
        }
`
const Age = styled.div`

    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    padding: 5px 0;
    margin: 5px 0;
    
`
const ButtonWrap = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 40px;
    

    >button {
        border-radius: 40px;
        width: 50px;
        height: 50px;
    }

`

const Friend = (props) => {
    return(
        <Form>
            <Name>
                <h2>{props.name}</h2>
            </Name>
            <Age>
                <h3>Age: {props.age}</h3>
            </Age>
            <div className="email">
                <h3>{props.email}</h3>
            </div>
            <ButtonWrap>
            <button onClick={props.delete}>Delete</button>
            <button onClick={props.update}>Update</button>
            </ButtonWrap>
        </Form>
    );
}

export default connect(null)(Friend);