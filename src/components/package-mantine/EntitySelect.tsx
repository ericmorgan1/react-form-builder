import React from "react";
import { Select } from "@mantine/core";

interface IEntitySelectProps {
    value?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    onChange: (value: string) => void;
}
export default function EntitySelect(props: IEntitySelectProps) {
    const data = [
        { value: "individual", label: "Individual" },
        { value: "corporation", label: "Corporation" },
        { value: "llc", label: "Limited Liability Company" },
        { value: "partnership", label: "Partnership" },
        { value: "limitedPartnership", label: "Limited Partnership" },
        { value: "jointVenture", label: "Joint Venture" },
        { value: "soleProprietorship", label: "Sole Proprietorship" },
        { value: "trust", label: "Trust" },
        { value: "estate", label: "Estate" },
        { value: "other", label: "Other" }
    ];

    return (
        <Select
            label="Entity type"
            placeholder="Entity type"
            searchable
            disabled={props.disabled}
            required={props.required}
            value={props.value}
            data={data}
            onChange={props.onChange}
        />
    );
}
