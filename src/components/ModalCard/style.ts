import { keyframes, styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"

export const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 },
});

export const Content = styled(Dialog.Content, {
    width: "12rem",
    position: "absolute",

    top: "55px",
    right: "40px",

    borderRadius: "1rem 0 1rem 1rem",
    overflow: "auto",
    padding: "1rem 1rem 1rem 2rem",
    outline: "none",

    background: "#E0E0E0",
    boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.50)",

    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.2s forwards`,

    "& > button:last-child": {
        marginBottom: "0",
    },

    '&::-webkit-scrollbar': {
        width: '0.375rem',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$gray600',
        borderRadius: '62.4375rem',
    },
})

export const ButtonMenu = styled("button", {
    display: "flex",
    alignItems: "center",
    gap: "$3",

    border: "none",
    cursor: "pointer",
    marginBottom: "$4",

    fontSize: "$md",
    fontWeight: "$bold",
    lineHeight: "0",

    color: "black",
    background: "transparent",

    position: "relative",

    "&:hover": {
        color: "#2F80ED",
    },

    variants: {
        active: {
            true: {
                "&::before": {
                    content: '',

                    width: "0.25rem",
                    height: "1.5rem",

                    position: "absolute",
                    top: "50%",
                    left: "-10px",

                    transform: "translateY(-50%)",
                    transition: " opacity 0.3s ease",

                    opacity: "1",
                    borderRadius: "$full",

                    background: "#2F80ED",
                },
                color: "#2F80ED"
            },
        },
    },
})

export const ButtonClose = styled(Dialog.Close, {
    width: "100%",
    textAlign: "end",
    outline: "none",
    border: "none",
    background: "transparent",
    lineHeight: "0"
})