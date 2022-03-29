
import Link from "next/link"
import Image from "next/image"
import {Flex,Text,Button,Box} from '@chakra-ui/react'
import { BASE_URL,fetchApi,PROPERTY_LIST_FOR_SALE,PROPERTY_LIST_FOR_RENT } from "../utils"
import Property from "../components/Property"


export const Banner =({purpose,title1,title2,descr1,descr2,linkName,buttonText,imageUrl})=>(

  <Flex flexWrap={'wrap'} justifyContent='center' alignItems={'center'} m={'10'}>
    <Image src={imageUrl} width={500} height={300} alt='banner'  />
    <Box p={5}>
      <Text color={'gray.500'} fontSize='sm' fontWeight={'medium'}>
      {purpose}
      </Text>
      <Text  fontSize='3xl' fontWeight={'bold'} >
      {title1}<br/>{title2}
      </Text>
      <Text  fontSize='lg' paddingTop={3} paddingBottom={3} color='blue.700' >
        {descr1}<br/>{descr2}
      </Text>
      <Button fontSize='xl'  >
     <Link href={linkName}>{buttonText}</Link>
      </Button>

    </Box>
  </Flex>
)

export default function Home({propertiesForSale,propertiesForRent}) {
  return (
    <Box>      
      <Banner
       purpose={'Rent A Home'}
        title1={'Rental Homes for'} 
        title2={'Everyone'}
        descr1={'Exploer Apartments,Villas,Homes'}
        descr2={'and more'} 
        buttonText={'Exploer Renting'}
        linkName={'/search/?children=for-rent'}
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'/>
         
         <Flex flexWrap={'wrap'}>
         {propertiesForRent.map((item)=><Property item={item} key={item.id}/>)}
         </Flex>         
         <Banner
       purpose={'BAY A  Home'}
       title1={'Find,Buy&&Own Your'} 
       title2={'Dream Home'}
        descr1={'Exploer Apartments,Villas,Homes'}
        descr2={'and more'} 
        buttonText={'Exploer Baying'}
        linkName={'/search/?children=for-sale'}
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />  
        <Flex flexWrap={'wrap'}>
        {propertiesForSale.map((item)=><Property item={item} key={item.id}/>)}
         </Flex>
    
    
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=6020&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=6020&purpose=for-rent&hitsPerPage=6`);
  console.log({})
  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}


