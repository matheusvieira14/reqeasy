import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        background: "$gray80",
        color: "$gray800"
    },

    "body, input, textarea, button": {
        fontFamily: "$default",
        fontWeight: "$regular"
    },

})