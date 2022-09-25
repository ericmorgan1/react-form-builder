import IEditFormElement from "./IEditFormElement";

export interface IEditFormElementBuilderProps<T extends { [key: string]: string }> {
    formElement: IEditFormElement<T>;
    onChange: (formElement: IEditFormElement<T>, value: any) => void;
    renderer: (formElement: IEditFormElement<T>, onChange: (formElement: IEditFormElement<T>, value: any) => void) => JSX.Element | null;
}

export default function EditFormElementBuilder<T extends { [key: string]: string }>(props: IEditFormElementBuilderProps<T>) {
    return props.renderer(props.formElement, props.onChange);
}