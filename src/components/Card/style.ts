import { styled } from '@stitches/react'

export const ContainerCard = styled('div', {
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2rem",
    background: "#E0E0E0",
    borderRadius: "0.3125rem",
    marginTop: "2rem",
})

export const InfoHeader = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    marginBottom: "2rem",

    ".infoProject": {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",

        h2: {
            fontSize: "1.5rem",
            fontWeight: "800",
            color: "black"
        },

        span: {
            fontSize: "0.875rem",
            fontWeight: "800",
            color: "black"
        }
    }
});

export const InfoFooter = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",

    p: {
        overflow: "hidden",
        textOverflow: "ellipsis",

        display: "-webkit-box",
        WebkitBoxOrient: "vertical",

        WebkitLineClamp: "2",
    }
});

export const StyledHr = styled("hr", {
    border: "0",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    margin: "1rem 0",
    variants: {
        priority: {
            high: {
                borderColor: "red",
            },
            medium: {
                borderColor: "yellow",
            },
            low: {
                borderColor: "green",
            },
        },
    },
    defaultVariants: {
        priority: "medium",
    },
});