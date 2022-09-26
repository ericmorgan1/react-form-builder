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

1. Import the package
```typescript
import { Core, Mantine } from 'react-form-element-builder';
```

2. Create an object containing the data you want
```typescript
const [myData, setMyData] = useState<any>({ firstName: "John", lastName: "Doe" });
const viewFormElements: Core.IViewFormElement<Mantine.BasicViewTypes>[] = [
    { value: myData.firstName,          type: "text",       label: "First name",            span: 6 },
    { value: myData.lastName,           type: "text",       label: "Last name",             span: 6 }
];
```

3. Display the data
```tsx
<div style={{ width: "100%" }}>
  <Mantine.ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={Mantine.MantineViewRenderer} />
</div>
      
<Mantine.EditFormBuilder prefix="editform_"
    formElements={editFormElements}
    onChange={(formElement, value) => {
        setMyData({ ...myData, [formElement.propertyName]: value });
    }}
    renderer={Mantine.MantineEditRenderer}
/>
```


