
// Defines a type for building editable elements. 
// You should template with a `type` that contains different data types you want to support.
// Example: 
//      type MyTypes = { "text" : "", "boolean": "" }
//      IEditFormElement<MyTypes>
export default interface IEditFormElement<T extends { [key: string]: string }> {
    value:          any;
    type:           keyof T;
    propertyName:   string;
    label:          string;
    placeholder:    string;
    span:           number;
    disabled:       boolean;
    required?:      boolean;
}