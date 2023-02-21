import React from "react";
import { TextInput, NumberInput, Checkbox, Divider, ColorInput, DEFAULT_THEME } from "@mantine/core";
import { DatePicker, TimeInput, TimeRangeInput } from '@mantine/dates';
import { IEditFormElement } from "../core";
import { BasicEditTypes } from ".";
import StateSelect from "./StateSelect";
import CountrySelect from "./CountrySelect";
import EntitySelect from "./EntitySelect";

export type OnChange<T, S> = (formElement: IEditFormElement<T, S>, value: any, data: T) => void;

export default function MantineEditRenderer<T, S extends BasicEditTypes>(formElement: IEditFormElement<T, S>, data: T, onChange: OnChange<T, S>): JSX.Element | null {

    let el = null;
    switch(formElement.type)
    {
        case "text":
          el = <TextInput value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value, data); }} />;
          break;

        case "boolean":
          el = <Checkbox checked={formElement.getValue(data) ?? false}
            label={formElement.label} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.checked, data); }} />;
          break;

        case "tel":
          el = <TextInput type="tel" value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value, data); }} />;
          break;

        case "email":
          el = <TextInput type="email" value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value, data); }} />;
          break;

        case "date":
          el = <DatePicker value={formElement.getValue(data) ? new Date(formElement.getValue(data)) : null}
            clearable
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: Date | null) => { onChange(formElement, value ? value.getTime() : null, data); }} />;
          break;

        case "time":
          el = <TimeInput value={formElement.getValue(data) ? new Date(formElement.getValue(data)) : null}
            format="12" clearable
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: Date | null) => { onChange(formElement, value ? value.getTime() : null, data); }} />;
          break;

          case "timerange":
            const t1 = (formElement.getValue(data) && formElement.getValue(data)[0]) ? new Date(formElement.getValue(data)[0]) : null;
            const t2 = (formElement.getValue(data) && formElement.getValue(data)[1]) ? new Date(formElement.getValue(data)[1]) : null;

            el = <TimeRangeInput value={[t1, t2]}
              format="12" clearable
              label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
              onChange={(value: [Date | null, Date | null]) => { 
                const t1 = (value && value[0]) ? value[0].getTime() : null;
                const t2 = (value && value[1]) ? value[1].getTime() : null;
                onChange(formElement, [t1, t2], data); 
              }} />;
            break;

        case "number":
          el = <NumberInput value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: number | undefined) => { onChange(formElement, value, data); }} />;
          break;

        case "state":
          el = <StateSelect value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value, data); }} />;
          break;

        case "country":
          el = <CountrySelect value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value, data); }} />;
          break;

        case "businessEntity":
          el = <EntitySelect value={formElement.getValue(data) ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value, data); }} />;
          break;

        case "color":
          el = <ColorInput value={formElement.getValue(data) ?? ""}
            disallowInput withPicker={false}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: string) => { onChange(formElement, value, data); }}
            swatches={[
              ...DEFAULT_THEME.colors.gray,
              ...DEFAULT_THEME.colors.red,
              ...DEFAULT_THEME.colors.pink,
              ...DEFAULT_THEME.colors.grape,
              ...DEFAULT_THEME.colors.violet,
              ...DEFAULT_THEME.colors.indigo,
              ...DEFAULT_THEME.colors.blue,
              ...DEFAULT_THEME.colors.cyan,
              ...DEFAULT_THEME.colors.teal,
              ...DEFAULT_THEME.colors.green,
              ...DEFAULT_THEME.colors.lime,
              ...DEFAULT_THEME.colors.yellow,
              ...DEFAULT_THEME.colors.orange,
            ]}
        />
        break;

        case "divider":
          el = <Divider variant="dashed" style={{ marginTop: "5px", marginBottom: "5px" }} />
          break;
    }

    return el;
}