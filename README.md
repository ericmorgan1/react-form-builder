# react-form-builder
Form builder for React. Packages with TailwindCSS.

## Installation
`npm install react-form-element-builder --save`

## View-Only Form Usage (Basic)
1. Import the package(s) you'd like to use.
```typescript
import { Core, Mantine } from "react-form-element-builder";
```

2. Create an array of `ViewFormElements` thatfor the data you want to display
```typescript
const [myData, setMyData] = useState<any>({ first: "John", last: "Smith" });
const viewFormElements: Core.IViewFormElement<Mantine.BasicViewTypes>[] = [
    { value: myData.first, type: "text", label: "First", span: 6 },
    { value: myData.last, type: "text", label: "Last", span: 6 },
];
```

3. Render the form with the `ViewFormBuilder`
```typescript
<Mantine.ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={Mantine.MantineViewRenderer} />
```

## Editable Form Usage (Basic)
1. Import the package(s) you'd like to use
```typescript
import { Core, Mantine } from "react-form-element-builder";
```

2. Create an array of `EditFormElements` thatfor the data you want to display
```typescript
const [myData, setMyData] = useState<any>({ first: "John", last: "Smith" });
const editFormElements: Core.IEditFormElement<Mantine.BasicEditTypes>[] = [
    { 
      value: myData.first, type: "text", label: "First", placeholder: "First", 
      propertyName: "first", disabled: false, span: 6, required: true 
    },

    { 
      value: myData.last, type: "text", label: "Last", placeholder: "Last", 
      propertyName: "last", disabled: false, span: 6, required: true 
    },
];
```

3. Render the form with the `EditFormBuilder`
```typescript
<Mantine.ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={Mantine.MantineViewRenderer} />
```

## Data Types
Change the `type` of data for the form elements to control how they will be rendered or edited.

## Complete Example (Basic)
```typescript
import { useState } from "react";
import { Core, Mantine } from "react-form-element-builder";

export default function Home() {
  const [myData, setMyData] = useState<any>({ first: "John", last: "Smith" });
  const viewFormElements: Core.IViewFormElement<Mantine.BasicViewTypes>[] = [
    { value: myData.first, type: "text", label: "Name", span: 6 }
  ];

  const editFormElements: Core.IEditFormElement<Mantine.BasicEditTypes>[] = [
    { 
      value: myData.first, type: "text", label: "First", placeholder: "First", 
      propertyName: "first", disabled: false, span: 6, required: true 
    },

    { 
      value: myData.last, type: "text", label: "Last", placeholder: "Last", 
      propertyName: "last", disabled: false, span: 6, required: true 
    },
  ];  

  return (
    <div>
        <Mantine.ViewFormBuilder 
            prefix="viewform_" 
            formElements={viewFormElements} 
            renderer={Mantine.MantineViewRenderer} 
        />

        <Mantine.EditFormBuilder 
            prefix="editform_"
            formElements={editFormElements}
            onChange={(formElement, value) => {
                setMyData({ ...myData, [formElement.propertyName]: value });
            }}
            renderer={Mantine.MantineEditRenderer}
        />
    </div>
  )
}
```

## Usage (Advanced)
1. Create a `type` specifying which datatypes you want to support.
```typescript
import { BasicViewTypes } from "react-form-element-builder";

export type MyBasicTypes = BasicViewTypes & {
    "myCustomType": "";
}
```

2. Create a renderer that renders each datatype that you specified. If you want to reuse existing types, you can simply handle the new types you added and fallback to the preconfigured package for everything else.
```typescript
import { Core } from "react-form-element-builder";

function basicRenderer(formElement: Core.IViewFormElement<BasicTypes>): JSX.Element | null {
    let el = null;
    switch(formElement.type)
    {
        case "myCustomType":
        el = 
            <>
            <span>{formElement.label}</span>
            <span>{formElement.value ?? "-"}</span>
            </>
        return el;

        // Add additional types here
    }

    // Fallback to MantineViewRender for everything else...
    return Mantine.MantineViewRenderer(formElement);
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

4. Render your form and specify the renderer you want to use
```typescript
import { editRenderer } from "./../components/editRenderer";

<Core.ViewFormBuilder 
    formElements={myFormElements} 
    prefix="myForm_" 
    renderer={basicRenderer} 
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