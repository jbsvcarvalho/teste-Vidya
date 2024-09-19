"use client"
import React from "react";
import { IconType } from "react-icons";

import {
  ButtonCustoms,
  Container,
  IconWrapper,
  ListItemText,
} from "./ButtonCart.styles";
import colors from "@/utils/color";

interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  filter: boolean;
  text?: number | string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const ButtonCart: React.FC<ListItemProps> = ({
  backgroundColor = colors.primary,
  border = "5px",
  color = "white",
  size = "small",
  filter,
  text,
  icon: Icon,
  type = "button",
  ...props
}) => {
  return (
    <Container>
      <ButtonCustoms
        backgroundColor={backgroundColor}
        size={size}
        border={border}
        type={type}
        {...props}
      >
        {Icon && (
          <IconWrapper size={size} color={color}>
            {Icon && <Icon />}
          </IconWrapper>
        )}
        {text && (
          <ListItemText
            backgroundColor={backgroundColor}
            size={size}
            color={color}
            filter={filter}
          >
            {text}
          </ListItemText>
        )}
      </ButtonCustoms>
    </Container>
  );
};

export default ButtonCart;