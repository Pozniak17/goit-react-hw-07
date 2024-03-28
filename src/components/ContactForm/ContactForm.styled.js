import { styled } from "styled-components";

export const FormContainer = styled.form`
  border-radius: 8px;
  border: 2px solid #9200ab;
  background-color: ${(props) => props.theme.colors.white};
  margin-top: ${(props) => props.theme.spacing(3)}; //15px
  margin-bottom: ${(props) => props.theme.spacing(3)}; //15px
  padding: 12px;

  box-shadow: ${(props) => props.theme.shadows.standart};
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin-bottom: ${(props) => props.theme.spacing(3)}; //15px
  width: 200px;
  border: ${(props) => props.theme.borders.normal} gray;
`;

export const Button = styled.button`
  padding: 5px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.middle};
  border: ${(props) => props.theme.borders.normal} grey;
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: ${(props) => props.theme.colors.white};
  }
`;
