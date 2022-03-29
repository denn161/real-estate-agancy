
import {useState} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {BsFilter} from 'react-icons/bs'
import {Flex,Box,Text,Icon} from '@chakra-ui/react'
import SearchFilters from '../components/SearchFilters'
import Property from '../components/Property'
import noresult from '../assets/noresult.svg'
import { BASE_URL, fetchApi } from '../utils'


const Search =({properties})=>{

const [searchFilter,setSearchFilter]=useState(false)

const router =useRouter()

    return(
        <>
        <Box borderRadius={'md'}>
            <Flex cursor={'pointer'}
             bg='gray.100' 
             p='2'
             borderBottom={'1px'}
             borderColor='gray.200'
             fontSize={'lg'}
             fontWeight='black'
             justifyContent={'center'}
             borderRadius='md'
             alignItems={'center'}
              >
                <Text>
                    Search Property By Filters
                </Text>
                <Icon paddingLeft={2} w='7'as={BsFilter}
                 onClick={()=>setSearchFilter((prevFilters)=>!prevFilters)} />

            </Flex>
           {searchFilter&& <SearchFilters/>} 
           <Text fontSize={'2xl'} fontWeight='bold'marginTop={'5'} marginBottom='5' >
           Properties {router.query.purpose}
           </Text>
           <Flex flexWrap={'wrap'}>
           {properties.map((item)=><Property item={item} key={item.id}/>)}

           </Flex>

           {properties.length===0 &&(
               <Flex justifyContent='center'
                flexDir='column'
                 alignItems='center'
                  marginTop='5'
                   marginBottom='5'
                   >
                <Image src={noresult} alt='iconsSvg'/>
                <Text fontSize='xl' marginTop='3'>No Result Found.</Text>

               </Flex>
           )}

        </Box>
        </>
    )
}

export async function getServerSideProps({query}){

    const purpose = query.purpose||'for-rent'
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '6020';
    const categoryExternalID = query.categoryExternalID || '4';


    const data = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  
  export default Search;
  
















