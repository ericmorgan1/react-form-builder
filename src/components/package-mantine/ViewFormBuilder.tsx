import React from 'react';
import { Grid } from "@mantine/core";
import ViewFormElementBuilder from "./../core/ViewFormElementBuilder";
import { IViewFormElement } from "./../core";

interface IViewFormBuilderProps<T extends { [key: string]: string }> {
    prefix: string;
    formElements: IViewFormElement<T>[];
    renderer: (formElement: IViewFormElement<T>) => JSX.Element | null;
}

export default function ViewFormBuilder<T extends { [key: string]: string }>(props: IViewFormBuilderProps<T>) {
    return (
        <Grid columns={12}>
            {props.formElements.map((formElement, index) => {
                return (
                    <Grid.Col md={formElement.span} key={`${props.prefix}${index}`}>
                        <ViewFormElementBuilder formElement={formElement} renderer={props.renderer} />
                    </Grid.Col>
                );
            })}
        </Grid>
    );
}
