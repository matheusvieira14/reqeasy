import { keyframes, styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"

export const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 },
});

export const Content = styled(Dialog.Content, {
    width: "20rem",
    position: "absolute",

    display: "flex",
    flexDirection: "column",

    top: "62px",
    right: "280px",

    borderRadius: "1rem 0 1rem 1rem",
    overflow: "auto",
    padding: "1rem 1rem 1rem 2rem",
    outline: "none",

    background: "#E0E0E0",
    boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.50)",

    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.2s forwards`,

    form: {
        display: "flex",
        alignItems: "center",
        border: "1px solid gray",
        width: "100%",
        borderRadius: "6px",

        input: {
            width: "100%",
            height: "2rem",
            padding: "10px",
            border: "none",
            borderRadius: "6px 0 0 6px",
        },

        button: {
            width: "2.5rem",
            height: "2rem",
            border: "none",
            borderRadius: "0 6px 6px 0",
        }
    }
})

export const ButtonClose = styled(Dialog.Close, {
    width: "100%",
    textAlign: "end",
    outline: "none",
    border: "none",
    background: "transparent",
    lineHeight: "0",
})