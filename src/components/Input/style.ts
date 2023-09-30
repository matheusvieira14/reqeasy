import { styled } from '@stitches/react'

export const ContainerInput = styled('div', {
    width: '100%',
    border: '1px solid #061D4A',
    borderRadius: '6px',
    fontFamily: 'Roboto',
    fontSize: '1rem',

    display: "flex",
    alignItems: "center",

    paddingLeft: "0.80rem",

    input: {
        width: '100%',
        padding: '0.70rem',
        color: 'black',
        border: 'none',
        borderRadius: '6px',
        fontFamily: 'Roboto',
        fontSize: '1rem',
        outline: "none",

        "&::placeholder": {
            fontFamily: 'Roboto',
            fontSize: '.85rem',
            fontWeight: "400"
        }
    },
})