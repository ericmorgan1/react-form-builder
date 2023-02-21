import React from 'react';
import { Grid } from "@mantine/core";
import EditFormElementBuilder from "./../core/EditFormElementBuilder";
import { IEditFormElement } from "./../core";

export type OnChange<T, S> = (formElement: IEditFormElement<T, S>, value: any, data: T) => void;

interface IEditFormBuilderProps<T, S> {
    prefix: string;
    data: T;
    formDefinition: IEditFormElement<T, S>[];
    onChange: OnChange<T, S>;
    renderer: (formElement: IEditFormElement<T, S>, data: T, onChange: OnChange<T, S>) => JSX.Element | null;
}

export default function EditFormBuilder<T, S>(props: IEditFormBuilderProps<T, S>) {
    return (
        <Grid columns={12}>
            {props.formDefinition.map((formElement, index) => {
                return (
                    <Grid.Col md={formElement.span} key={`${props.prefix}${index}`}>
                        <EditFormElementBuilder data={props.data} formElement={formElement} onChange={props.onChange} renderer={props.renderer} />
                    </Grid.Col>
                );
            })}
        </Grid>
    );
}
