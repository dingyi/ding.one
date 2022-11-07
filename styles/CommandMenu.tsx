import { keyframes } from 'stitches.config'
import { globalCss } from '@stitches/react'

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
})

const fadeOut = keyframes({
  "0%": { opacity: "1" },
  "100%": { opacity: "0" },
})

const enter = keyframes({
  "0%": { opacity: "0", transform: "scale(.85) translateX(-50%)" },
  "100%": { opacity: "1", transform: "scale(1) translateX(-50%)" },
})

const exit = keyframes({
  "0%": { opacity: "1", transform: "scale(1) translateX(-50%)" },
  "100%": { opacity: "0", transform: "scale(.95) translateX(-50%)" },
})

export const CMDK = globalCss({
  '[cmdk-overlay]': {
    position: "fixed",
    inset: 0,
    backgroundColor: "$overlay",
    backdropFilter: "blur(6px)",
    '&[data-state="open"]': {
      animationName: fadeIn,
      animationDuration: "150ms",
    },
    '&[data-state="closed"]': {
      animationName: fadeOut,
      animationDuration: "200ms",
    }
  },

  '[cmdk-root]': {
    maxWidth: "640",
    width: "100%",
    background: "$contentBackground",
    borderRadius: "$4",
    overflow: "hidden",
    //padding: "$2",
    boxShadow: "inset 0 1px 0 var(--shadows-mint4), 0.5px 0.7px 1px hsl(0deg 0% 0% / 12%), 1.5px 2.3px 3.3px -0.7px hsl(166deg 100% 2% / 12%), 3.5px 5.3px 7.6px -1.3px hsl(173deg 100% 2% / 12%), 8.2px 12.4px 17.8px -2px hsl(154deg 100% 2% / 10%)",

    '&.light': {
      background: "linear-gradient(136.61deg, rgb(39, 40, 43) 13.72%, rgb(45, 46, 49) 74.3%)",
    }
  },

  '[cmdk-dialog]': {
    position: "absolute",
    transformOrigin: "0 0",
    top: "12rem",
    left: "50%",
    transform: "translateX(-50%)",
    maxWidth: 640,
    width: 580,
    '&[data-state="open"]': {
      animationName: enter,
      animationDuration: "200ms",
    },
    '&[data-state="closed"]': {
      animationName: exit,
      animationDuration: "150ms",
    },
  },

  '[cmdk-header]': {
    position: "relative",
  },

  '[cmdk-header-esc]': {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: 24,
    fontSize: "$2",
    color: "$mint9",
    cursor: "pointer",
    background: "none",
  },

  '[cmdk-input]': {
    position: "relative",
    fontSize: "$2",
    width: "100%",
    padding: "16px 24px",
    border: "none",
    outline: "none",
    color: "$content",
    background: "none",
    borderBottom: "1px solid $whiteA4",
    borderRadius: 0,
    '&::placeholder': {
      color: "$footerlink",
    }
  },

  '[cmdk-list]': {
    height: "min(300px, calc(var(--cmdk-list-height)))",
    maxHeight: 400,
    overflow: "auto",
    padding: "$2",
    overscrollBehavior: "contain",
    transition: "100ms ease",
    transitionProperty: "height",
  },

  '[cmdk-group-heading]': {
    userSelect: "none",
    fontSize: "$1",
    color: "$footerlink",
    display: "flex",
    alignItems: "center",
    marginTop: "8px",
    marginBottom: "8px",
    padding: "0 16px",
  },

  '[cmdk-item]': {
    display: "flex",
    fontSize: "$2",
    fontWeight: '$3',
    alignItems: "center",
    borderRadius: "$4",
    gap: "16px",
    contentVisibility: "auto",
    cursor: "pointer",
    height: 48,
    padding: "0 16px",
    color: "$content",
    userSelect: "none",
    willChange: "background, color",
    transition: "all 150ms ease",
    transitionProperty: "none",
    position: "relative",
    '& svg': {
      width: 16,
      height: 16,
      color: "$content",
    },
    '&[aria-selected=true]': {
      background: "$CMDKHover",
      color: "$highlightText",
      '& svg': {
        color: "$highlightText",
      },
    },
    '&[aria-disabled=true]': {
      color: "$gray8",
      cursor: "not-allowed",
    },
    '&:active': {
      transitionProperty: "background",
      background: "$numberBackground",
    }
  },

  '[cmdk-empty]': {
    display: "flex",
    fontSize: "$2",
    alignItems: "center",
    justifyContent: "center",
    height: 64,
    color: "$content",
    whiteSpace: "pre-wrap",
  },

  '[cmdk-shortcuts]': {
    display: "flex",
    marginLeft: "auto",
    gap: "8px",

    '& kbd': {
      fontSize: "$1",
      minWidth: 20,
      padding: 4,
      height: 20,
      borderRadius: "$2",
      color: "$highlightText",
      background: "$numberBackground",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",
    }
  }
})

