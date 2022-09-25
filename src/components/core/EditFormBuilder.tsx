import React from "react";
import IEditFormElement from "./IEditFormElement";
import EditFormElementBuilder from "./EditFormElementBuilder";

interface IEditFormBuilderProps<T extends { [key: string]: string }> {
    prefix: string;
    formElements: IEditFormElement<T>[];
    onChange: (formElement: IEditFormElement<T>, value: any) => void;
    renderer: (formElement: IEditFormElement<T>, onChange: (formElement: IEditFormElement<T>, value: any) => void) => JSX.Element | null;
}

export default function EditFormBuilder<T extends { [key: string]: string }>(props: IEditFormBuilderProps<T>) {
    return (
        <div className="grid grid-cols-12">
            {/* Include all col-spans so Tailwind will include them when it scans */}
            <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 " />

            {props.formElements.map((formElement, index) => {
                return (
                    <div className={`col-span-${formElement.span}`} key={`${props.prefix}${index}`}>
                        <EditFormElementBuilder formElement={formElement} onChange={props.onChange} renderer={props.renderer} />
                    </div>
                );
            })}
        </div>
    );
}