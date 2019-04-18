import React from 'react';
import { Card, Flex, Text } from 'rebass';

export default function Friend(props) {
    return (
        <Flex>
            <Card width={[256, 320]} mx="auto" p={2} variant="basic">
                <Text>{props.data.name}</Text>
                <Text>{props.data.age}</Text>
                <Text>{props.data.email}</Text>
            </Card>
        </Flex>
    );
}
