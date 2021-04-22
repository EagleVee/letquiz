/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import OpacityBackButton from "../App/Components/Button/OpacityBackButton";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Log when clicked", () => {
  const onClick = jest.fn();
  act(() => {
    render(<OpacityBackButton onClick={onClick} />, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=OpacityBackButton]");
  expect(button.innerHTML).toBe("Clicked");


  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onClick).toHaveBeenCalledTimes(6);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(7);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(8);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(9);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(10);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    for (let i = 0; i < 5; i++) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onClick).toHaveBeenCalledTimes(15);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(16);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(17);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(18);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(19);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
  /////////////////////////////////////////
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(20);
  expect(button.innerHTML).toBe("Clicked");
  /////////////////////////////////////////
});