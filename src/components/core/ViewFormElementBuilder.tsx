import IViewFormElement from "./IViewFormElement";

export interface IViewFormElementBuilderProps<T, S> {
    formElement: IViewFormElement<T, S>;
    data: T;
    renderer: (formElement: IViewFormElement<T, S>, data: T) => JSX.Element | null;
}

export default function ViewFormElementBuilder<T, S>(props: IViewFormElementBuilderProps<T, S>) {
    return props.renderer(props.formElement, props.data);
}