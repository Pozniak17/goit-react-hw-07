import styled from "styled-components";

export const ContactItem = styled.li`
  background-color: ${(props) => props.theme.colors.white};
  margin-bottom: ${(props) => props.theme.spacing(2)}; //10px
  border: ${(props) => props.theme.borders.normal} white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: ${(props) => props.theme.radii.middle}; //8px
  box-shadow: ${(props) => props.theme.shadows.standart};
  border: 2px solid #9200ab;
`;

export const Button = styled.button`
  padding: 5px;

  /* margin-left: ${(props) => props.theme.spacing(2)}; //10px */
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.radii.middle}; //8px

  border: ${(props) => props.theme.borders.normal} grey;
  cursor: pointer;
  &:hover {
    background-color: navy;
    color: ${(props) => props.theme.colors.white};
  }
`;

export const Text = styled.span`
  font-weight: 700;
`;

export const Number = styled.span`
  font-style: italic;
`;
