import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Routes } from "react-router-dom"
import { Route } from "react-router"
import { Initial } from "./components/initial"

export const App = () => (
  <ChakraProvider theme={theme}>
	<main>
		<Routes>
			<Route path="/" element={<Initial />} />
			<Route path="/*" element={<Initial />} />
		</Routes>
	</main>
  </ChakraProvider>
)
