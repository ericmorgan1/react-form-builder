
// Defines a type for building view-only elements. 
// You should template with a `type` that contains different data types you want to support.
// Example: 
//      type MyTypes = { "text" : "", "boolean": "" }
//      IViewFormElement<IMyData, MyTypes>
export default interface IViewFormElement<T, S> {
    getValue:       (data: T) => any;
    type:           keyof S;
    label:          string;
    span:           number;
}