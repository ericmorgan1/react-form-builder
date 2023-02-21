import React from 'react';
import { Grid } from "@mantine/core";
import ViewFormElementBuilder from "./../core/ViewFormElementBuilder";
import { IViewFormElement } from "./../core";

interface IViewFormBuilderProps<T, S> {
    prefix: string;
    data: T;
    formDefintion: IViewFormElement<T, S>[];
    renderer: (formElement: IViewFormElement<T, S>, data: T) => JSX.Element | null;
}

export default function ViewFormBuilder<T, S>(props: IViewFormBuilderProps<T, S>) {
    return (
        <Grid columns={12}>
            {props.formDefintion.map((formElement, index) => {
                return (
                    <Grid.Col md={formElement.span} key={`${props.prefix}${index}`}>
                        <ViewFormElementBuilder formElement={formElement} data={props.data} renderer={props.renderer} />
                    </Grid.Col>
                );
            })}
        </Grid>
    );
}
