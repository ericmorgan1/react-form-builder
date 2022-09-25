# react-form-builder
Form builder for React. Packages with TailwindCSS.

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
    function basicRenderer(formElement: IViewFormElement<BasicTypes>): JSX.Element | null {
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
    const myFormElements: IViewFormElement<BasicTypes>[] = [
        { value: "John",  type: "text",      label: "First name",  span: 6 },
        { value: "Doe",   type: "text",      label: "Last name",   span: 6 }
        { value: 25,      type: "number",    label: "Age",         span: 4 },
    ];
   ```

4. Render your form
   ```typescript
    <ViewFormBuilder 
        formElements={myFormElements} 
        prefix="myForm_" 
        renderer={basicRenderer} 
    />
   ```

## How To Use (with pre-configured package)

