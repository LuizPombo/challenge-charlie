import styled from "styled-components";

export const Form = styled.form`
  width: 40%;
  display: flex;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 80%;
  background-color: rgba(242, 241, 242, 0.6);
  height: 30px;
  font-size: 15px;
  padding: 5px;
  border-radius: 5px 0px 0px 0px;
  border: 1px solid #8c8885;
`;
export const Button = styled.button`
  width: 20%;
  border: 1px solid #8c8885;
  border-radius: 0px 5px 0px 0px;
  font-size: 15px;
  cursor: pointer;
`;
