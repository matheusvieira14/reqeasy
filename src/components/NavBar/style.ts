import { styled } from '@stitches/react'

export const ContainerNavBar = styled('div', {
    height: "100vh",
    width: "20rem",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "space-between",

    padding: "$10 4rem",
    borderRadius: "0rem 0rem 1rem 0rem",

    background: "#E0E0E0",

    ".infoMenu": {
        img: {
            marginBottom: "4rem",
            cursor: "pointer",
        },

        "& > button:last-child": {
            marginBottom: "0",
        },
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

export const BaseButton = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$3",

    fontSize: "$md",
    fontWeight: "$bold",

    color: "black",

    span: {
        overflow: "hidden",
        textOverflow: "ellipsis",

        display: "-webkit-box",
        WebkitBoxOrient: "vertical",

        WebkitLineClamp: "1",
    },

    button: {
        cursor: "pointer",
        border: "none",
        background: "transparent",
    },

    img: {
        width: "2rem",
        height: "2rem",
        borderRadius: "$full"
    },
})