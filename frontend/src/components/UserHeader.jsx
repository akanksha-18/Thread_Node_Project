import { VStack ,Box, Flex,Text, Link} from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import {BsInstagram} from 'react-icons/bs'
import {CgMoreO} from 'react-icons/cg'


const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={"start"}>
       <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text fontSize={"2xl"}>
                Mark Zuckerberg

            </Text>
         <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} fontWeight={"full"}>markzuckerberg</Text>
            <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>threads.net</Text>
        </Flex>   
        </Box>
        <Box>
            <Avatar name='Mark-Zuckerberg'
            src='/zuck-avatar.png'
            size={"xl"}
            />
            
        </Box>
       </Flex>
       <Text>Co-founder,executive chairmen and CEO of Meta Platform</Text>
    <Flex w={"full"} justifyContent={"space-between"}>
    <Flex gap={2} align={"center"}>
    <Text color={"gray.light"}>3.2k Followers</Text>
    <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
    <Link color={"gray.light"}>instagram.com</Link>
    </Flex>
    <Flex>
        <Box className='icon-container'>
            <BsInstagram size={24} cursor={"pointer"}/>
        </Box>
        <Box className='icon-container'>
            <CgMoreO size={24} cursor={"pointer"}/>
        </Box>
    </Flex>
    </Flex>
    </VStack>
  )
}

export default UserHeader
