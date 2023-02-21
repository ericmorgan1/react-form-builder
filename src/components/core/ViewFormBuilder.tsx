import React from "react";
import IViewFormElement from "./IViewFormElement";
import ViewFormElementBuilder from "./ViewFormElementBuilder";

interface IViewFormBuilderProps<T, S> {
    prefix: string;
    data: T;
    formDefintion: IViewFormElement<T, S>[];
    renderer: (formElement: IViewFormElement<T, S>, data: T) => JSX.Element | null;
}

export default function ViewFormBuilder<T, S>(props: IViewFormBuilderProps<T, S>) {
    return (
        <div className="grid grid-cols-12">
            {/* Include all col-spans so Tailwind will include them when it scans */}
            <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 " />

            {props.formDefintion.map((formElement, index) => {
                return (
                    <div className={`col-span-${formElement.span}`} key={`${props.prefix}${index}`}>
                        <ViewFormElementBuilder formElement={formElement} data={props.data} renderer={props.renderer} />
                    </div>
                );
            })}
        </div>
    );
}