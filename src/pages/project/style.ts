import { styled } from "@stitches/react";

export const ContainerProject = styled("div", {
    main: {
        display: "flex",

        section: {
            paddingBottom: "2rem"
        }
    }
})

export const SectionTwo = styled("section", {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    padding: "2rem 4rem 2rem 2rem",

    ".infoHeader": {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "1rem",

        h1: {
            fontSize: "2rem"
        },
    },

    select: {
        width: "100%",
        padding: "0.70rem",
        color: 'black',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: "none",
        border: '1px solid #061D4A',
    },

    textarea: {
        height: "100%",
        padding: "0.70rem",
        color: 'black',
        borderRadius: '6px',
        fontSize: '1rem',
        outline: "none",
        border: '1px solid #061D4A',
        resize: "none"
    }
})