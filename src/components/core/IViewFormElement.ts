
// Defines a type for building view-only elements. 
// You should template with a `type` that contains different data types you want to support.
// Example: 
//      type MyTypes = { "text" : "", "boolean": "" }
//      IViewFormElement<MyTypes>
export default interface IViewFormElement<T extends { [key: string]: string }> {
    value:          any;
    type:           keyof T;
    label:          string;
    span:           number;
}