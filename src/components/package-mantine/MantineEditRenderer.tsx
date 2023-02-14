import React from "react";
import { TextInput, NumberInput, Checkbox, Divider, ColorInput, DEFAULT_THEME } from "@mantine/core";
import { DatePicker, TimeInput, TimeRangeInput } from '@mantine/dates';
import { IEditFormElement } from "../core";
import { BasicEditTypes } from ".";
import StateSelect from "./StateSelect";
import CountrySelect from "./CountrySelect";
import EntitySelect from "./EntitySelect";

export default function MantineEditRenderer<T extends BasicEditTypes, U>(
    data: U,
    formElement: IEditFormElement<T>, 
    onChange: (formElement: IEditFormElement<T>, value: any) => void): JSX.Element | null {

    let el = null;
    switch(formElement.type)
    {
        case "text":
          el = <TextInput value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value); }} />;
          break;

        case "boolean":
          el = <Checkbox checked={formElement.value ?? false}
            label={formElement.label} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.checked); }} />;
          break;

        case "tel":
          el = <TextInput type="tel" value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value); }} />;
          break;

        case "email":
          el = <TextInput type="email" value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { onChange(formElement, event.target.value); }} />;
          break;

        case "date":
          el = <DatePicker value={formElement.value ? new Date(formElement.value) : null}
            clearable
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: Date | null) => { onChange(formElement, value ? value.getTime() : null); }} />;
          break;

        case "time":
          el = <TimeInput value={formElement.value ? new Date(formElement.value) : null}
            format="12" clearable
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: Date | null) => { onChange(formElement, value ? value.getTime() : null); }} />;
          break;

          case "timerange":
            const t1 = (formElement.value && formElement.value[0]) ? new Date(formElement.value[0]) : null;
            const t2 = (formElement.value && formElement.value[1]) ? new Date(formElement.value[1]) : null;

            el = <TimeRangeInput value={[t1, t2]}
              format="12" clearable
              label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
              onChange={(value: [Date | null, Date | null]) => { 
                const t1 = (value && value[0]) ? value[0].getTime() : null;
                const t2 = (value && value[1]) ? value[1].getTime() : null;
                onChange(formElement, [t1, t2]); 
              }} />;
            break;

        case "number":
          el = <NumberInput value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: number | undefined) => { onChange(formElement, value); }} />;
          break;

        case "state":
          el = <StateSelect value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value); }} />;
          break;

        case "country":
          el = <CountrySelect value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value); }} />;
          break;

        case "businessEntity":
          el = <EntitySelect value={formElement.value ?? ""}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value) => { onChange(formElement, value); }} />;
          break;

        case "color":
          el = <ColorInput value={formElement.value ?? ""}
            disallowInput withPicker={false}
            label={formElement.label} placeholder={formElement.placeholder} disabled={formElement.disabled} required={formElement.required}
            onChange={(value: string) => { onChange(formElement, value); }}
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