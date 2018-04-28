import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import { Box, Button, Flex, Text } from "src/common";

const renderButtonRow = () => (
  <Flex mt={4} alignItems="center" flexWrap="wrap">
    <Box flex={2} mb={2} mr={2}>
      <Text color="muted">[some left control]</Text>
    </Box>
    <Flex flex={1} mb={2}>
      <Button flex={1}>Cancel</Button>
      <Button ml={3} flex={1}>
        Add
      </Button>
    </Flex>
  </Flex>
);

storiesOf("Buttons", module)
  .add("Default styling", withInfo()(() => <Button>Default Button</Button>))
  .add(
    "In a row",
    withInfo("It's common to put buttons and a control within a row.")(
      renderButtonRow
    )
  );
