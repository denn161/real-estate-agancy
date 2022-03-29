
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Layout = ({children})=>(
    <>
    <Head>
        <title>Real Estate</title>
    </Head>
    <header >
      <Box maxWidth={'1280px'} m='auto'>     
          <NavBar/>
          </Box>
        </header>
    <Box maxWidth={'1280px'} m='auto'>
     
        <main>
            {children}
        </main>
        <footer>
         <Footer/>
        </footer>

    </Box>
    </>
)

export default Layout

