import IEditFormElement from "./IEditFormElement";

export interface IEditFormElementBuilderProps<T extends { [key: string]: string }, U> {
    data: U;
    formElement: IEditFormElement<T>;       // The element to render
    onChange: (formElement: IEditFormElement<T>, value: any) => void;
    renderer: (data: U, formElement: IEditFormElement<T>, onChange: (formElement: IEditFormElement<T>, value: any) => void) => JSX.Element | null;
}

export default function EditFormElementBuilder<T extends { [key: string]: string }, U>(props: IEditFormElementBuilderProps<T, U>) {
    return props.renderer(props.data, props.formElement, props.onChange);
}