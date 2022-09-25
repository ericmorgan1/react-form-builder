import React from 'react';
import { Anchor } from "@mantine/core";

interface ITelephoneAnchorProps {
    phoneNumber: string;
    display: string;
}
export default function TelephoneAnchor(props: ITelephoneAnchorProps) {
    // Remove every character that isn't a number...
    const phoneNumber = props.phoneNumber.replace(/\D/g, "");

    return <Anchor underline={false} href={`tel:${phoneNumber}`}>{props.display}</Anchor>
}