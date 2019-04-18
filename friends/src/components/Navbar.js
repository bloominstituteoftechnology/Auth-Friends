import React from 'react';
import { Flex, Text, Box, Link } from 'rebass'

export default function Navbar() {
    return (
        <div>
            <Flex px={2} color="white" bg="black" alignItems="center">
                <Text p={2} fontWeight="bold">
                    Friends
                </Text>
                <Box mx="auto" />
                <Link href="#!" p={2} color="white">
                    Profile
                </Link>
            </Flex>
        </div>
    );
}
