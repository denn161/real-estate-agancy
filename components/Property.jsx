import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Box,Text,Flex,Avatar} from '@chakra-ui/react'
import {FaBed,FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../assets/house.jpg'



const Property = ({item:{rentFrequency,price,externalID,coverPhoto,rooms,title,baths,area,agency,isVerified}})=>(   

<Link href={`/property/${externalID}`} passHref>
  <Flex flexWrap={'wrap'} p='5' paddingTop={0} w='420px' justifyContent={'flex-start'} cursor='pointer'>
   <Box>
       <Image src={coverPhoto ? coverPhoto.url :defaultImage} width={400} height={260} alt='house'/>
   </Box>
   <Box w={'full'}>
       <Flex paddingTop={2} alignItems='center' justifyContent={'space-between'}>
           <Flex alignItems={'center'}>
             <Box paddingRight={3} color='green.400'>
              {isVerified&&<GoVerified/>}
             </Box>
             <Text fontWeight={'bold'} fontSize='lg'>
               AED {millify(price)}{rentFrequency&&`/${rentFrequency}`}
             </Text>
           </Flex>  
           <Box>
           <Avatar size='sm' src={agency?.logo?.url}></Avatar>  
           </Box> 
           </Flex>
           <Flex alignItems={'center'} p='1' justifyContent={'space-between'} w='250px' color='blue.400'>
               {rooms}<FaBed/> | {baths} <FaBath/> | {millify(area)} sgft <BsGridFill/>

           </Flex>
           <Text fontSize={'lg'}>
               {title.length>30?`${title.slice(0,30)}...`:title}

           </Text>
       
   </Box>
  </Flex>
</Link>


)


export default Property











// active: true
// commercialNumber: null
// createdAt: "2017-12-14T16:29:58.905025+00:00"
// externalID: "7619"
// id: 530
// licenses: []
// logo: {id: 27680213, url: 'https://bayut-production.s3.eu-central-1.amazonaws…m/image/27680213/dba9211bf0c14aedb38b40cdc7774a2f'}
// name: "Trust Tower Property"
// name_l1: "ترست تاور للعقارات"
// objectID: 530
// product: "premium"
// productScore: 2
// roles: []
// slug: "trust-tower-property-7619"
// slug_l1: "trust-tower-property-7619"
// tier: 4
// [[Prototype]]: Object
// area: 232.2576
// baths: 1
// category: (2) [{…}, {…}]
// cityLevelScore: 1
// completionStatus: "completed"
// contactName: "Ahmed Hassan Zeinhom"
// coverPhoto: {id: 197598942, externalID: '121054828', title: null, orderIndex: 0, nimaScore: 6.505567393154848, …}
// createdAt: 1648540784
// externalID: "5851885"
// extraFields: {}
// floorPlanID: null
// furnishingStatus: "unfurnished"
// geography: {lat: 24.34507, lng: 54.7519}
// hasMatchingFloorPlans: false
// hash: "005565e"
// hidePrice: false
// id: 3126332
// indyScore: 725
// indyScore_l1: 725
// isVerified: false
// keywords: (25) ['close to services', 'new', 'موقف سيارة', 'جاهزة', 'كبيرة', 'ساكن اول', 'مودرن', 'قريبه من الخدمات', 'brand new', 'اول ساكن', 'modern', 'kitchen', '2 bedroom', 'واسعة', 'جديدة', 'غرفتين', 'ready', 'مطبخ', 'حديثة', 'parking', 'ايجار جديد', 'غرفتين نوم', '2 غرفة', 'spacious', 'جديدة اول ساكن']
// location: (3) [{…}, {…}, {…}]
// objectID: "3126332"
// ownerID: 526539
// panoramaCount: 0
// permitNumber: null
// phoneNumber: {mobile: '+971524348585', whatsapp: '971524348585', proxyMobile: '+971525176321', mobileNumbers: Array(1)}
// photoCount: 9
// photoIDs: (9) [197598942, 197598943, 197598944, 197598945, 197598946, 197598947, 197598948, 197598949, 197598950]
// price: 3600
// product: "superhot"
// productLabel: "default"
// productScore: 0
// purpose: "for-rent"
// randBoostScore: 725
// randBoostScore_l1: 725
// reactivatedAt: 1648540784
// referenceNumber: "2211-Ap-R-0328"
// rentFrequency: "monthly"
// rooms: 2
// score: 100
// score_l1: 62
// slug: "brand-new-2-bedroom-extension-for-rent-in-al-shamkha-south-ner-lulu-monthly-3-600-5851885"
// slug_l1: "brand-new-2-bedroom-extension-for-rent-in-al-shamkha-south-ner-lulu-monthly-3-600-5851885"
// sourceID: 1
// state: "active"
// title: "Brand new 2 bedroom Extension for rent in Al Shamkha South ner LULU monthly 3.600"
// title_l1: "شقة في جنوب الشامخة 2 غرف 3600 درهم - 5851885"
// type: "property"
// updatedAt: 1648541319
// userExternalID: "526539"
// verification: {updatedAt: 1648540798.091097, eligible: false, status: 'unverified', verifiedAt: null}
// verifiedScore: 2
// videoCount: 0
// _geoloc: {lat: 24.34507, lng: 54.7519}
// _highlightResult: {referenceNumber: {…}, tit