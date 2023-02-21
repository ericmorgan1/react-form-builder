import IEditFormElement from "./IEditFormElement";

export type OnChange<T, S> = (formElement: IEditFormElement<T, S>, value: any, data: T) => void;

export interface IEditFormElementBuilderProps<T, S> {
    formElement: IEditFormElement<T, S>;
    data: T; 
    onChange: OnChange<T, S>;
    renderer: (formElement: IEditFormElement<T, S>, data: T, onChange: OnChange<T, S>) => JSX.Element | null;
}

export default function EditFormElementBuilder<T, S>(props: IEditFormElementBuilderProps<T, S>) {
    return props.renderer(props.formElement, props.data, props.onChange);
}