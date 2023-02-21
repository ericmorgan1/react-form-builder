import React from "react";
import IEditFormElement from "./IEditFormElement";
import EditFormElementBuilder from "./EditFormElementBuilder";

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
        <div className="grid grid-cols-12">
            {/* Include all col-spans so Tailwind will include them when it scans */}
            <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 " />

            {props.formDefinition.map((formElement, index) => {
                return (
                    <div className={`col-span-${formElement.span}`} key={`${props.prefix}${index}`}>
                        <EditFormElementBuilder<T, S> data={props.data} formElement={formElement} onChange={props.onChange} renderer={props.renderer} />
                    </div>
                );
            })}
        </div>
    );
}