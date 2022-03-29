
import {Box,Flex,Text,Spacer,Avatar} from '@chakra-ui/react'
import {FaBed,FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import ImageScrollBar from '../../components/ImageScrollBar'
import {BASE_URL,fetchApi} from '../../utils'


const PropertyDetails =({propertyDetails:{price,area,rentFrequency,rooms,title,agency,isVerified,description,type,purpose,furnishingStatus,amenities,photos,baths}})=>(
    
    <Box maxWidth={'1000px'}
       margin='auto' p='4'
       >
    {photos&&<ImageScrollBar photos={photos}/>}        
     <Box w={'full'} p='6'>
     <Flex paddingTop='2' alignItems='center'>
        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
        <Text fontWeight='bold' fontSize='lg'>
          AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
       </Box>
       <Box marginTop={'2'}>
         <Text fontSize={'lg'} fontWeight='bold' marginBottom={'2'}>
            {title}
         </Text>
         <Text lineHeight='2' color='gray.600' dangerouslySetInnerHTML={{__html:description}}></Text>
       </Box>
       <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
      <Flex justifyContent='space-around' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Type:</Text>
        <Text fontWeight='bold'>{type}</Text>
      </Flex>
      <Flex justifyContent='space-around' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Purpose:</Text>
        <Text fontWeight='bold'>{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent='space-around' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text>Furnishing Status:</Text>
          <Text fontWeight='bold'>{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities.length!==0&&<Text fontSize='2xl' fontWeight='black' marginTop='5'>Amenties:</Text>}
      <Flex
      flexWrap={'wrap'}>
        {amenities.map((item)=>
          item?.amenities?.map((amenity)=>
            <Text key={amenity.text} fontWeight='bold' color={'blue.400'} fontSize={'14'} p='2' bg='gray.200' m='1' borderRadius='5'>
                    {amenity.text}
            </Text>

          )
        )}
      </Flex>

    </Box>

    </Box>




)

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${BASE_URL}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
  }




