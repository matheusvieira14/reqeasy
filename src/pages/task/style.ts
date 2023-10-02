import { styled } from "@stitches/react";

export const ContainerTask = styled("div", {
    main: {
        display: "flex",
        paddingBottom: "2rem"
    }
})

export const SectionTwo = styled("section", {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    padding: "2rem 4rem 0rem 2rem",

    ".infoHeader": {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        marginBottom: "1rem",

        h1: {
            fontSize: "2rem"
        },
    },

    ".createTask": {
        display: "flex",
        gap: "1rem",

        select: {
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
    },

    ".task": {
        height: "100%",
        overflowY: "auto",
        paddingRight: "1rem",

        h1: {
            marginBottom: "1rem"
        }
    }
})

export const CheckboxContainer = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    marginBottom: "0.75rem",
    background: "#e0e0e0",
    border: "1px solid #061D4A",
    boxShadow: "0px 2px 0.5rem rgba(0, 0, 0, 0.06)",
    borderRadius: "0.5rem",

    "& div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.5rem"
    }
});

export const CheckboxInput = styled("input", {
    width: "1.25rem",
    height: "1.25rem",
});

export const CheckboxLabel = styled("label", {
    fontFamily: "Roboto",
    fontSize: "0.875rem",
    lineHeight: "140%",
});

export const ButtonTaks = styled("button", {
    background: "transparent",
    border: "none",
    color: "black",

    "&:hover": {
        color: "red",
    },
});

export const StyledSpan = styled("span", {
    width: "1rem",
    height: "1rem",
    border: "0",
    borderRadius: "50%",
    variants: {
        priority: {
            high: {
                background: "red",
            },
            medium: {
                background: "yellow",
            },
            low: {
                background: "green",
            },
        },
    },
    defaultVariants: {
        priority: "medium",
    },
});