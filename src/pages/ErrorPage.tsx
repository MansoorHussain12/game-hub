import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <Heading>Error</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? "This page doesn't exist."
          : "sorry, an unexpected error has occurred."}
      </Text>
    </Box>
  );
};

export default ErrorPage;
