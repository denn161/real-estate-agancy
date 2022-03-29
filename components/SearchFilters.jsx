

import {useEffect,useState} from 'react'
import { Flex,Select,Box,Text,Input,Spinner,Icon,Button} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {MdCancel} from 'react-icons/md'
import Image from 'next/image'
import { filterData,getFilterValues } from '../utils/filterData'
import { BASE_URL, fetchApi } from '../utils'

import noresult from '../assets/noresult.svg'


const SearchFilters = ()=>{

const [filters] =useState(filterData)

const [searchTerm,setSearchTerm]=useState('')


const [locationData,setLocationData]=useState()

const [loading,setLoading]=useState(false)

const [showLocations, setShowLocations] = useState(false);

const router = useRouter()


const searchProperty=(filterValues)=>{   

    const path = router.pathname;

    const{query}=router

    const values = getFilterValues(filterValues)

    values.forEach((item)=>{
       if(item.value&&filterValues?.[item.name]){
        query[item.name]=item.value
       }
      
    })

    router.push({pathname:path,query})
   
}

useEffect(()=>{
  
   if(searchTerm!==''){
    const fetchData = async()=>{
        
      try {
        setLoading(true)
        const data= await fetchApi(`${BASE_URL}/auto-complete?query=${searchTerm}&hitsPerPage=10`)
         setLoading(false)
         setLocationData(data?.hits) 
          
      } catch (error) {
          console.log(error)
          setLoading(false)
          
      }
   
 }

  fetchData()

   }  
  
},[searchTerm]) 

  return(
        <Flex bg={'gray.100'} flexWrap='wrap' p='4' justifyContent={'center'}>
        {filters.map((item,index)=>
        <Box key={index}>
            <Select onChange={(e)=>searchProperty({[item.queryName]:e.target.value})}
             placeholder={item.placeholder}
             w='fit-content'
             p='2'
            
            >
            {item?.items?.map(({name,value})=>
            <option key={name} value={value}>{name}</option>
             )}    
          </Select>

        </Box>
        )} 
       <Flex flexDir={'column'}>
           <Button border={'1px'} marginTop='5' bg={'gray.200'} onClick={()=>setShowLocations(!showLocations)}>  
           Search Location
           </Button>
           {showLocations&&(
             <Flex pos={'relative'} flexDir='column' paddingTop={'2'}>
              <Input 
                placeholder='Type Here'
                value={searchTerm}
                w='300px'
                focusBorderColor='gray.300'
                onChange={(e) => setSearchTerm(e.target.value)}/>
                 {searchTerm !== '' && (
              <Icon
                as={MdCancel}
                pos='absolute'
                cursor='pointer'
                right='5'
                top='5'
                zIndex='100'
                onClick={() => setSearchTerm('')}
              />
            )} 
           {loading && <Spinner margin='auto' marginTop='3' />}             

            {showLocations&&(
                <Box height={'300px'} overflow='auto'>
                  {locationData?.map((location)=>
                  <Box
                    key={location.id}
                    onClick={()=>{
                        searchProperty({locationExternalIDs: location.externalID })
                        setShowLocations(false)
                        setSearchTerm(location.name)
                    }}
                  
                  > 

                    <Text cursor='pointer'
                     bg='gray.200' p='2'
                      borderBottom='1px'
                       borderColor='gray.100'>{location.name}</Text>  
                  </Box>                
                )}

                {!loading&&!locationData?.length&&searchTerm!==''&&(
                    <Box justifyContent={'center'}
                      alignItems='center'
                      flexDir={'column'}
                      gap='5'
                      marginTop={'5'}
                      marginBottom='5'>
                    <Image src={noresult} alt='icons'/>
                     <Text fontWeight={'bold'} fontSize='lg' marginTop={'3'}>
                     Waiting to search!
                     </Text>

                    </Box>

                )}
                </Box>
            )}     
              
             </Flex>
           )}
       </Flex>

        </Flex>
    )
}


export default SearchFilters

