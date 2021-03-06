import { useContext } from "react"
import Image from "next/image"
import {Box,Flex,Icon} from '@chakra-ui/react'
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


function LeftArrow  () {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Flex justifyContent='center' alignItems='center' marginRight='1'>
        <Icon
          as={FaArrowAltCircleLeft}
          onClick={()=> scrollPrev()}
          fontSize='2xl'
          cursor='pointer'
          d={['none','none','none','block']}
        />
      </Flex>
    );
  }

  function RightArrow () {
    const { scrollNext } = useContext(VisibilityContext);
  
  
    return (
      <Flex justifyContent='center' alignItems='center' marginLeft='1'>
        <Icon
          as={FaArrowAltCircleRight}
          onClick={()=>scrollNext()}
          fontSize='2xl'
          cursor='pointer'
          d={['none','none','none','block']}
      />
      </Flex>
    );
  }

const ImageScrollBar =({photos})=>(

  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
  {photos.map((photo) => (
    <Box key={photo.id} width='910px' itemId={photo.id} overflow='hidden' p='1'>
      <Image alt="imageSlide" placeholder="blur" blurDataURL={photo.url} src={photo.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
    </Box>
  ))}
</ScrollMenu>
)

export default ImageScrollBar