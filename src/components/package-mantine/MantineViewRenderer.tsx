import React from "react";
import { Text, Anchor, Checkbox, Divider, ColorSwatch } from "@mantine/core";
import { DatePicker, TimeInput, TimeRangeInput } from '@mantine/dates';
import { IViewFormElement } from "../core";
import { BasicViewTypes } from ".";
import TelephoneAnchor from "./TelephoneAnchor";

export default function MantineViewRenderer<T, S extends BasicViewTypes>(formElement: IViewFormElement<T, S>, data: T): JSX.Element | null {
    
    let el = null;
    switch(formElement.type)
    {
        case "text":
          el = 
              <>
              <Text weight={700}>{formElement.label}</Text>
              <Text>{formElement.getValue(data) ?? "-"}</Text>
              </>
          break;

        case "boolean":
          el = <Checkbox value={formElement.getValue(data) ?? false} 
          disabled
          label={formElement.label} />;
          break;

        case "tel":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.getValue(data)
                    ? <TelephoneAnchor display={formElement.getValue(data) ?? "-"} phoneNumber={formElement.getValue(data) ?? ""} />
                    : <Text>-</Text>
                }
                </>
          break;

        case "email":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.getValue(data)
                    ? <Anchor href={`mailto:${formElement.getValue(data) ?? ""}`}>{formElement.getValue(data) ?? "-"}</Anchor>
                    : <Text>-</Text>                
                }
                </>
          break;

        case "date":
          el = <DatePicker value={formElement.getValue(data) ?? null}
            disabled
            label={formElement.label} placeholder={formElement.label} />;
          break;

        case "time":
          el = <TimeInput value={formElement.getValue(data) ?? null}
            format="12" disabled
            label={formElement.label} placeholder={formElement.label} />;
          break;

          case "timerange":
            el = <TimeRangeInput value={formElement.getValue(data) ?? [null, null]}
              format="12" disabled
              label={formElement.label} placeholder={formElement.label} />;
            break;

          case "url":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.getValue(data)
                    ? <Anchor target="_blank" href={formElement.getValue(data) ?? ""}>{formElement.getValue(data) ?? "-"}</Anchor>
                    : <Text>-</Text>
                }
                </>
          break;

          case "color":
              el = <ColorSwatch color={formElement.getValue(data) ?? ""} />
            break;


        case "divider":
          el = <Divider variant="dashed" style={{ marginTop: "5px", marginBottom: "5px" }} />
          break;
    }

    return el;
}