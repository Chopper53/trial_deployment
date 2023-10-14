/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { VuesaxLinearArrowCircleRight103 } from "../../icons/VuesaxLinearArrowCircleRight103";
import { VuesaxLinearArrowCircleRight54 } from "../../icons/VuesaxLinearArrowCircleRight54";
import { VuesaxLinearArrowCircleRight97 } from "../../icons/VuesaxLinearArrowCircleRight97";
import "./style.css";

export const Buttons = ({
  content,
  size,
  type,
  stateProp,
  style,
  className,
  text = "Button",
  icon = <VuesaxLinearArrowCircleRight103 className="vuesax-linear-arrow" color="white" />,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    content: content || "text",
    size: size || "small",
    type: type || "primary",
    state: stateProp || "default",
    style: style || "light",
  });

  return (
    <button
      className={`buttons ${state.content} type-${state.type} state-${state.state} ${state.size} ${state.style} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
    >
      {["text-icon", "text"].includes(state.content) && <div className="button">{text}</div>}

      {state.content === "text-icon" && <>{icon}</>}

      {state.content === "icon" && state.size === "small" && (
        <VuesaxLinearArrowCircleRight54
          className={`${
            state.state === "focused"
              ? "class"
              : state.state === "disabled" && state.type === "outliine"
              ? "class-2"
              : "class-3"
          }`}
          color={
            (state.state === "default" && state.style === "light" && state.type === "outliine") ||
            (state.state === "default" && state.style === "light" && state.type === "secondary") ||
            (state.state === "default" && state.type === "text-only") ||
            (state.state === "focused" && state.style === "light" && state.type === "outliine") ||
            (state.state === "focused" && state.style === "light" && state.type === "secondary") ||
            (state.state === "focused" && state.type === "text-only") ||
            (state.state === "hover" && state.style === "light" && state.type === "outliine") ||
            (state.state === "hover" && state.style === "light" && state.type === "secondary") ||
            (state.state === "hover" && state.type === "text-only")
              ? "#784DC7"
              : (state.state === "default" && state.style === "dark" && state.type === "negative") ||
                (state.state === "default" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "default" && state.style === "dark" && state.type === "secondary")
              ? "#292929"
              : (state.state === "hover" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "hover" && state.style === "dark" && state.type === "secondary") ||
                (state.state === "pressed" && state.style === "light" && state.type === "outliine") ||
                (state.state === "pressed" && state.style === "light" && state.type === "secondary") ||
                (state.state === "pressed" && state.type === "text-only")
              ? "#361F61"
              : (state.state === "disabled" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "disabled" && state.style === "dark" && state.type === "text-only") ||
                (state.state === "disabled" && state.style === "light")
              ? "#737373"
              : state.state === "pressed" && state.style === "dark" && state.type === "outliine"
              ? "#E9DFFC"
              : (state.state === "default" && state.style === "light" && state.type === "negative") ||
                (state.state === "focused" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "focused" && state.style === "dark" && state.type === "secondary")
              ? "#0F0324"
              : "white"
          }
        />
      )}

      {state.content === "icon" && state.size === "medium" && (
        <VuesaxLinearArrowCircleRight97
          className={`${
            state.state === "focused"
              ? "class-4"
              : state.state === "disabled" && state.type === "outliine"
              ? "class-5"
              : "class-6"
          }`}
          color={
            (state.state === "default" && state.style === "light" && state.type === "outliine") ||
            (state.state === "default" && state.style === "light" && state.type === "secondary") ||
            (state.state === "default" && state.type === "text-only") ||
            (state.state === "focused" && state.style === "light" && state.type === "outliine") ||
            (state.state === "focused" && state.style === "light" && state.type === "secondary") ||
            (state.state === "focused" && state.type === "text-only") ||
            (state.state === "hover" && state.style === "light" && state.type === "outliine") ||
            (state.state === "hover" && state.style === "light" && state.type === "secondary") ||
            (state.state === "hover" && state.type === "text-only")
              ? "#784DC7"
              : (state.state === "default" && state.style === "dark" && state.type === "negative") ||
                (state.state === "default" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "default" && state.style === "dark" && state.type === "secondary")
              ? "#292929"
              : (state.state === "hover" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "hover" && state.style === "dark" && state.type === "secondary") ||
                (state.state === "pressed" && state.style === "light" && state.type === "outliine") ||
                (state.state === "pressed" && state.style === "light" && state.type === "secondary") ||
                (state.state === "pressed" && state.type === "text-only")
              ? "#361F61"
              : state.state === "pressed" && state.style === "dark" && state.type === "outliine"
              ? "#E9DFFC"
              : (state.state === "default" && state.style === "light" && state.type === "negative") ||
                (state.state === "focused" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "focused" && state.style === "dark" && state.type === "secondary")
              ? "#0F0324"
              : (state.state === "disabled" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "disabled" && state.style === "dark" && state.type === "text-only") ||
                (state.state === "disabled" && state.style === "light")
              ? "#737373"
              : "white"
          }
        />
      )}

      {state.content === "icon" && state.size === "large" && (
        <VuesaxLinearArrowCircleRight103
          className="vuesax-linear-arrow"
          color={
            (state.state === "default" && state.style === "light" && state.type === "outliine") ||
            (state.state === "default" && state.style === "light" && state.type === "secondary") ||
            (state.state === "default" && state.type === "text-only") ||
            (state.state === "focused" && state.style === "light" && state.type === "outliine") ||
            (state.state === "focused" && state.style === "light" && state.type === "secondary") ||
            (state.state === "focused" && state.type === "text-only") ||
            (state.state === "hover" && state.style === "light" && state.type === "outliine") ||
            (state.state === "hover" && state.style === "light" && state.type === "secondary") ||
            (state.state === "hover" && state.type === "text-only")
              ? "#784DC7"
              : (state.state === "default" && state.style === "dark" && state.type === "negative") ||
                (state.state === "default" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "default" && state.style === "dark" && state.type === "secondary")
              ? "#292929"
              : (state.state === "hover" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "hover" && state.style === "dark" && state.type === "secondary") ||
                (state.state === "pressed" && state.style === "light" && state.type === "outliine") ||
                (state.state === "pressed" && state.style === "light" && state.type === "secondary") ||
                (state.state === "pressed" && state.type === "text-only")
              ? "#361F61"
              : state.state === "pressed" && state.style === "dark" && state.type === "outliine"
              ? "#E9DFFC"
              : (state.state === "default" && state.style === "light" && state.type === "negative") ||
                (state.state === "focused" && state.style === "dark" && state.type === "outliine") ||
                (state.state === "focused" && state.style === "dark" && state.type === "secondary")
              ? "#0F0324"
              : (state.state === "disabled" && state.style === "light" && state.type === "negative") ||
                (state.state === "disabled" && state.style === "light" && state.type === "primary") ||
                (state.state === "disabled" && state.style === "light" && state.type === "rounded") ||
                (state.state === "disabled" && state.style === "light" && state.type === "secondary") ||
                (state.state === "disabled" && state.style === "light" && state.type === "square") ||
                (state.state === "disabled" && state.type === "outliine") ||
                (state.state === "disabled" && state.type === "text-only")
              ? "#737373"
              : "white"
          }
        />
      )}
    </button>
  );
};

function reducer(state, action) {
  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "primary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "primary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "rounded"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "rounded",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "square"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "square",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "secondary"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "secondary",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "outliine"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "outliine",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "text-only"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "text-only",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "small",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "small",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "medium",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text",
          size: "large",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text",
          size: "large",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "text-icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "text-icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "small",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "small",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "medium",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "medium",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "default" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_enter":
        return {
          content: "icon",
          size: "large",
          state: "hover",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "hover" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "mouse_leave":
        return {
          content: "icon",
          size: "large",
          state: "default",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text-icon" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text-icon",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "small" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "small",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "medium" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "medium",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "light" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "light",
          type: "negative",
        };
    }
  }

  if (
    state.content === "text" &&
    state.size === "large" &&
    state.state === "focused" &&
    state.style === "dark" &&
    state.type === "negative"
  ) {
    switch (action) {
      case "click":
        return {
          content: "text",
          size: "large",
          state: "pressed",
          style: "dark",
          type: "negative",
        };
    }
  }

  return state;
}

Buttons.propTypes = {
  content: PropTypes.oneOf(["text", "icon", "text-icon"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["rounded", "secondary", "negative", "square", "primary", "text-only", "outliine"]),
  stateProp: PropTypes.oneOf(["default", "focused", "pressed", "hover", "disabled"]),
  style: PropTypes.oneOf(["dark", "light"]),
  text: PropTypes.string,
};
