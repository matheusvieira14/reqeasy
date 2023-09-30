import { styled } from '@stitches/react'

export const ContainerHeader = styled('header', {
    height: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 4rem",
    background: "#061D4A",

    div: {
        display: "flex",
        alignItems: "center",
        gap: "1rem",

        h1: {
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "#fff"
        },

        strong: {
            fontSize: "1rem",
            fontWeight: "800",
            color: "#fff"
        },

        img: {
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "$full"
        },
    }
})