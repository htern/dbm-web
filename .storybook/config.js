import React from "react";

import { configure, addDecorator } from "@storybook/react";

import { Provider as ThemeProvider } from "rebass";

import theme from "themes/dbm";

const stories = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  stories.keys().forEach(filename => stories(filename));
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
