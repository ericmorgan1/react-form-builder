import React from 'react';
import { Grid } from "@mantine/core";
import EditFormElementBuilder from "./../core/EditFormElementBuilder";
import { IEditFormElement } from "./../core";

interface IEditFormBuilderProps<T extends { [key: string]: string }, U> {
    data: U;
    prefix: string;
    formElements: IEditFormElement<T>[];
    onChange: (formElement: IEditFormElement<T>, value: any) => void;
    renderer: (data: U, formElement: IEditFormElement<T>, onChange: (formElement: IEditFormElement<T>, value: any) => void) => JSX.Element | null;
}

export default function EditFormBuilder<T extends { [key: string]: string }, U>(props: IEditFormBuilderProps<T, U>) {
    return (
        <Grid columns={12}>
            {props.formElements.map((formElement, index) => {
                return (
                    <Grid.Col md={formElement.span} key={`${props.prefix}${index}`}>
                        <EditFormElementBuilder data={props.data} formElement={formElement} onChange={props.onChange} renderer={props.renderer} />
                    </Grid.Col>
                );
            })}
        </Grid>
    );
}
