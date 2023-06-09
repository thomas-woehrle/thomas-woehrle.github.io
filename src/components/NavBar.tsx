import { useEffect, useState } from "react";
import Name from "./Name";
import {
  Button,
  ButtonGroup,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

export interface ButtonInfo {
  value: string;
  link: string;
}

interface Props {
  activeButton: string;
  buttons: ButtonInfo[];
  onNavbarClick: (button: string) => void;
}

const NavBar = ({ activeButton, buttons, onNavbarClick }: Props) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const BREAKPOINT = 768;

  useEffect(() => {
    const handleResize = () => {
      // console.log(
      //   "handleResize called. setWidth: ",
      //   windowWidth,
      //   ", currentWidth: ",
      //   window.innerWidth
      // );
      if (
        (window.innerWidth >= BREAKPOINT && windowWidth < BREAKPOINT) ||
        (window.innerWidth < BREAKPOINT && windowWidth >= BREAKPOINT)
      ) {
        console.log(window.innerWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <HStack padding={6} paddingLeft={8} justifyContent="space-between">
      <Name
        activeButton={buttons[0]}
        onNameClick={() => {
          onNavbarClick(buttons[0].value);
        }}
      />
      {windowWidth < BREAKPOINT ? (
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bgColor={"gray.50"}
          >
            Menu
          </MenuButton>
          <MenuList bgColor={"gray.50"}>
            {buttons.map((button) => (
              <MenuItem
                key={button.value}
                fontWeight={"semibold"}
                bgColor={button.value === activeButton ? "teal" : "gray.50"}
                borderRadius={"lg"}
                color={button.value === activeButton ? "gray.50" : "gray.900"}
                onClick={() => {
                  onNavbarClick(button.value);
                  navigate(button.link);
                }}
              >
                {button.value}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      ) : (
        <ButtonGroup
          bgColor={"gray.50"}
          borderRadius={"lg"}
          width={"sm"}
          padding={2}
          variant="ghost"
          size={"lg"}
          colorScheme={"teal"}
        >
          {buttons.map((button) => (
            <Button
              key={button.value}
              width={button.value === activeButton ? "100%" : "auto"}
              border={button.value === activeButton ? "1px" : "0px"}
              borderColor={"teal"}
              onClick={() => {
                onNavbarClick(button.value);
                navigate(button.link);
              }}
            >
              {button.value}
            </Button>
          ))}
        </ButtonGroup>
      )}
    </HStack>
  );
};

export default NavBar;
