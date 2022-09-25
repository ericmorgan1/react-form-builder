import React from "react";
import { Text, Anchor, Checkbox, Divider, ColorSwatch } from "@mantine/core";
import { DatePicker, TimeInput, TimeRangeInput } from '@mantine/dates';
import { IViewFormElement } from "../core";
import { BasicViewTypes } from ".";
import TelephoneAnchor from "./TelephoneAnchor";

export default function MantineViewRenderer(formElement: IViewFormElement<BasicViewTypes>): JSX.Element | null {
    
    let el = null;
    switch(formElement.type)
    {
        case "text":
          el = 
              <>
              <Text weight={700}>{formElement.label}</Text>
              <Text>{formElement.value ?? "-"}</Text>
              </>
          break;

        case "boolean":
          el = <Checkbox value={formElement.value ?? false} 
          disabled
          label={formElement.label} />;
          break;

        case "tel":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.value
                    ? <TelephoneAnchor display={formElement.value ?? "-"} phoneNumber={formElement.value ?? ""} />
                    : <Text>-</Text>
                }
                </>
          break;

        case "email":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.value
                    ? <Anchor href={`mailto:${formElement.value ?? ""}`}>{formElement.value ?? "-"}</Anchor>
                    : <Text>-</Text>                
                }
                </>
          break;

        case "date":
          el = <DatePicker value={formElement.value ?? null}
            disabled
            label={formElement.label} placeholder={formElement.label} />;
          break;

        case "time":
          el = <TimeInput value={formElement.value ?? null}
            format="12" disabled
            label={formElement.label} placeholder={formElement.label} />;
          break;

          case "timerange":
            el = <TimeRangeInput value={formElement.value ?? [null, null]}
              format="12" disabled
              label={formElement.label} placeholder={formElement.label} />;
            break;

          case "url":
            el =
                <>
                <Text weight={700}>{formElement.label}</Text>
                {formElement.value
                    ? <Anchor target="_blank" href={formElement.value ?? ""}>{formElement.value ?? "-"}</Anchor>
                    : <Text>-</Text>
                }
                </>
          break;

          case "color":
              el = <ColorSwatch color={formElement.value ?? ""} />
            break;


        case "divider":
          el = <Divider variant="dashed" style={{ marginTop: "5px", marginBottom: "5px" }} />
          break;
    }

    return el;
}