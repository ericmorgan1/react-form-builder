# react-form-builder
Form builder for React. Packages with TailwindCSS.

## Installation
1. Install TailwindCSS per the instructions here: https://tailwindcss.com/docs/guides/create-react-app
2. `npm install react-form-element-builder --save`
3. Add an empty div somewhere with the TailwindCSS classes so they get included:
```tsx
<div className="grid grid-cols-12 col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 "></div>
```
## How to Use (from scratch)
1. Create a `type` specifying which datatypes you want to support.
   ```typescript
    export type BasicTypes = {
        "text":         "";
        "boolean":      "";
        "tel":          "";
        "email":        "";
        "date":         "";
        "time":         "";
        "timerange":    "";
        "url":          "";
        "color":        "";
        "divider":      "";
    }
   ```

2. Create a renderer that renders each datatype that you specified.
   ```typescript
    import { Core } from "react-form-element-builder";

    function basicRenderer(formElement: Core.IViewFormElement<BasicTypes>): JSX.Element | null {
        let el = null;
        switch(formElement.type)
        {
            case "text":
            el = 
                <>
                <span>{formElement.label}</span>
                <span>{formElement.value ?? "-"}</span>
                </>
            break;

            case "boolean":
            el = 
                <>
                <span>{formElement.label}</span>
                <input type="checkbox" value={formElement.value ?? false} />;
                </>
            break;

            ...
        }

        return el;
    }
   ```

3. Create an object for all the properties you want in your form
   ```typescript
    const myFormElements: Core.IViewFormElement<BasicTypes>[] = [
        { value: "John",  type: "text",      label: "First name",  span: 6 },
        { value: "Doe",   type: "text",      label: "Last name",   span: 6 }
        { value: 25,      type: "number",    label: "Age",         span: 4 },
    ];
   ```

4. Render your form
   ```typescript
    <Core.ViewFormBuilder 
        formElements={myFormElements} 
        prefix="myForm_" 
        renderer={basicRenderer} 
    />
   ```

## How To Use (with pre-configured package)
To use a preconfigured package (such as the Mantine package), follow these instructions:

    ```typescript
    import { Core, Mantine } from 'react-form-element-builder';

    const [myData, setMyData] = useState<any>({ name: "John" });
    const viewFormElements: Core.IViewFormElement<Mantine.BasicViewTypes>[] = [
        { value: myData.name, type: "text", label: "Name", span: 6 }
    ];
    const editFormElements: Core.IEditFormElement<Mantine.BasicEditTypes>[] = [
        { value: myData.name, type: "text", label: "Name", placeholder: "Name", propertyName: "name", disabled: false, span: 6, required: true }
    ];

    <Mantine.ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={Mantine.MantineViewRenderer} />
    <Mantine.EditFormBuilder prefix="editform_"
        formElements={editFormElements}
        onChange={(formElement, value) => {
            setMyData({ ...myData, [formElement.propertyName]: value });
        }}
        renderer={Mantine.MantineEditRenderer}
    />





    import { IViewFormElement, IEditFormElement } from '../core';
    import { ViewFormBuilder, BasicViewTypes, MantineViewRenderer } from '../package-mantine';
    import { EditFormBuilder, BasicEditTypes, MantineEditRenderer } from '../package-mantine';

    const [myData, setMyData] = useState<any>({ name: "John" });
    const viewFormElements: IViewFormElement<BasicViewTypes>[] = [
        { value: myData.name, type: "text", label: "Name", span: 6 }
    ];
    const editFormElements: IEditFormElement<BasicEditTypes>[] = [
        { value: myData.name, type: "text", label: "Name", placeholder: "Name", propertyName: "name", disabled: false, span: 6, required: true }
    ];

    <ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={MantineViewRenderer} />
    <EditFormBuilder prefix="editform_"
        formElements={editFormElements}
        onChange={(formElement, value) => {
            setMyData({ ...myData, [formElement.propertyName]: value });
        }}
        renderer={MantineEditRenderer}
    />
    ```

## Test
- `yarn storybook`

## Build/Publish

### Rollup
* `yarn rollup`

### Publish/Deploy
* Increment version
* `yarn rollup`
* `yarn storybook` (make sure everything looks ok)
* `npm publish`
* `yarn build-storybook`
* Publish the static files to plasmafhir.com/plasma-fhir-react-components

## Issues
- Error: Could not resolve entry module (dist/esm/types/index.d.ts).
  - https://github.com/alexeagleson/template-react-component-library/issues/2