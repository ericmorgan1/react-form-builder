import IViewFormElement from "./IViewFormElement";

export interface IViewFormElementBuilderProps<T extends { [key: string]: string }> {
    formElement: IViewFormElement<T>;
    renderer: (formElement: IViewFormElement<T>) => JSX.Element | null;
}

export default function ViewFormElementBuilder<T extends { [key: string]: string }>(props: IViewFormElementBuilderProps<T>) {
    return props.renderer(props.formElement);
}