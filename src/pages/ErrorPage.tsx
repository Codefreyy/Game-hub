import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';

interface ErrorResponse {
    data: string;
    error: Error;
    internal: boolean;
    status: number;
    statusText: string
}
const ErrorPage = () => {
   const error=  useRouteError() as ErrorResponse
  return (
    <>
    <NavBar></NavBar>
    <Box padding={5}>
    <Heading>Opps</Heading>
    <Text>{isRouteErrorResponse(error) ? 'This Page does not exist': 'An unexpected error'}</Text>
    </Box>
  
    </>
    )
}

export default ErrorPage