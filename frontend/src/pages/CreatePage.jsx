import { Container, VStack, Heading, Box, Input, useColorModeValue, Button, useToast } from '@chakra-ui/react';
import {useState} from 'react'
import {useProductStore} from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name:"",
    price: "",
    image: "",
  });
  const toast = useToast()

  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    if (!success) {
      toast({
        "title": "Error",
        description: message,
        status: "error",
        duratiopn: 3000, //5000 or 5 sec is default
      })
    }
    else{
      toast({
        "title": "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({ name: "", price: "", image: ""});
  }
  return (
    
    <Container maxW="container.sm">
      <VStack
      spacing={8}>

        <Heading as={"h1"} size={"2x1"} textAlign={"Center"} mb={8}>Create New Product</Heading>
        <Box
        w={"full"} bg={useColorModeValue("white", "gray.800")}
        p={6} rouded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input 
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input 
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage