import { styled } from "@stitches/react";

export const ContainerSingIn = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#FAFAFA",
    gap: "1rem",
    position: "relative",

    img: {
        maxWidth: "100%",
        height: "100vh",
    },

    ".box": {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }
})

export const Form = styled("form", {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2rem",

    ".formHeader": {
        display: "flex",
        flexDirection: "column",
        gap: "0.50rem"
    },

    ".inputWrapper": {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
    }

})