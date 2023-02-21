
// Defines a type for building editable elements. 
// You should template with a `type` that contains different data types you want to support.
// Example: 
//      type MyTypes = { "text" : "", "boolean": "" }
//      IEditFormElement<IMyData, MyTypes>
export default interface IEditFormElement<T, S> {
    getValue:       (data: T) => any;
    type:           keyof S;
    propertyName:   string;
    label:          string;
    placeholder:    string;
    span:           number;
    disabled:       boolean;
    required?:      boolean;
}