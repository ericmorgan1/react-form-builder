import React from 'react';
import { Grid } from "@mantine/core";
import EditFormElementBuilder from "./../core/EditFormElementBuilder";
import { IEditFormElement } from "./../core";

interface IEditFormBuilderProps<T extends { [key: string]: string }> {
    prefix: string;
    formElements: IEditFormElement<T>[];
    onChange: (formElement: IEditFormElement<T>, value: any) => void;
    renderer: (formElement: IEditFormElement<T>, onChange: (formElement: IEditFormElement<T>, value: any) => void) => JSX.Element | null;
}

export default function EditFormBuilder<T extends { [key: string]: string }>(props: IEditFormBuilderProps<T>) {
    return (
        <Grid columns={12}>
            {props.formElements.map((formElement, index) => {
                return (
                    <Grid.Col md={formElement.span} key={`${props.prefix}${index}`}>
                        <EditFormElementBuilder formElement={formElement} onChange={props.onChange} renderer={props.renderer} />
                    </Grid.Col>
                );
            })}
        </Grid>
    );
}
