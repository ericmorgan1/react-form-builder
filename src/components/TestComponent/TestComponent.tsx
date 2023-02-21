import React, { useState } from 'react';
import { IViewFormElement, IEditFormElement } from '../core';
import { ViewFormBuilder, BasicViewTypes, MantineViewRenderer } from '../package-mantine';
import { EditFormBuilder, BasicEditTypes, MantineEditRenderer } from '../package-mantine';

interface IMyData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
    mailingAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    companyName: string;
    entityType: string;
    website: string;
}

export default function TestComponent() {
    const [myData, setMyData] = useState<IMyData>({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "555-555-5555",
        emailAddress: "test@gmail.com",
        mailingAddress: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
        country: "USA",
        companyName: "Test Company",
        entityType: "llc",
        website: "https://www.test.com",
    });

    const viewFormElements: IViewFormElement<IMyData, BasicViewTypes>[] = [
        { getValue: (data: IMyData) => data.firstName,          type: "text",       label: "First name",            span: 6 },
        { getValue: (data: IMyData) => data.lastName,           type: "text",       label: "Last name",             span: 6 },
        { getValue: (data: IMyData) => data.phoneNumber,        type: "tel",        label: "📞 Phone",              span: 6 },
        { getValue: (data: IMyData) => data.emailAddress,       type: "email",      label: "✉️ Email",              span: 6 },
        { getValue: (data: IMyData) => data.mailingAddress,     type: "text",       label: "🏠 Mailing address",    span: 12 },
        { getValue: (data: IMyData) => data.city,               type: "text",       label: "City",                  span: 6 },
        { getValue: (data: IMyData) => data.state,              type: "text",       label: "State",                 span: 2 },
        { getValue: (data: IMyData) => data.zipCode,            type: "text",       label: "Zip code",              span: 4 },
        { getValue: (data: IMyData) => data.country,            type: "text",       label: "Country",               span: 12 },
        { getValue: (data: IMyData) => null,                    type: "divider",    label: "",                      span: 12 },
        { getValue: (data: IMyData) => data.companyName,        type: "text",       label: "Company name",          span: 12 },
        { getValue: (data: IMyData) => data.entityType,         type: "text",       label: "Entity type",           span: 12 },
        { getValue: (data: IMyData) => null,                    type: "divider",    label: "",                      span: 12 },
        { getValue: (data: IMyData) => data.website,            type: "url",        label: "Website",               span: 12 },
    ];

    const editFormElements: IEditFormElement<IMyData, BasicEditTypes>[] = [
        { getValue: (data: IMyData) => data.lastName,         type: "text",             label: "Last name",           placeholder: "Last name",       propertyName: "lastName",      disabled: false, span: 6, required: true },
        { getValue: (data: IMyData) => data.firstName,        type: "text",             label: "First name",          placeholder: "First name",      propertyName: "firstName",      disabled: false, span: 6, required: true },
        { getValue: (data: IMyData) => data.phoneNumber,      type: "tel",              label: "📞 Phone",            placeholder: "Phone",           propertyName: "phoneNumber",    disabled: false, span: 6 },
        { getValue: (data: IMyData) => data.emailAddress,     type: "email",            label: "✉️ Email",             placeholder: "Email",           propertyName: "emailAddress",   disabled: false, span: 6 },
        { getValue: (data: IMyData) => data.mailingAddress,   type: "text",             label: "🏠 Mailing address",  placeholder: "Mailing address", propertyName: "mailingAddress", disabled: false, span: 12 },
        { getValue: (data: IMyData) => data.city,             type: "text",             label: "City",                placeholder: "City",            propertyName: "city",           disabled: false, span: 6 },
        { getValue: (data: IMyData) => data.state,            type: "state",            label: "State",               placeholder: "State",           propertyName: "state",          disabled: false, span: 2 },
        { getValue: (data: IMyData) => data.zipCode,          type: "text",             label: "Zip code",            placeholder: "Zip code",        propertyName: "zipCode",        disabled: false, span: 4 },
        { getValue: (data: IMyData) => data.country,          type: "country",          label: "Country",             placeholder: "Country",         propertyName: "country",        disabled: false, span: 12 },
        { getValue: (data: IMyData) => null,                  type: "divider",     label: "", placeholder: "", propertyName: "", disabled: false, span: 12 },
        { getValue: (data: IMyData) => data.companyName,      type: "text",             label: "Company name",        placeholder: "Company name",    propertyName: "companyName",    disabled: false, span: 12 },
        { getValue: (data: IMyData) => data.entityType,       type: "businessEntity",   label: "Entity type",         placeholder: "Entity type",     propertyName: "entityType",     disabled: false, span: 12 },
        { getValue: (data: IMyData) => null,                  type: "divider",     label: "", placeholder: "", propertyName: "", disabled: false, span: 12 },
        { getValue: (data: IMyData) => data.website,          type: "text",             label: "Website",             placeholder: "Website",         propertyName: "website",        disabled: false, span: 12 },
    ];

    return (
        <div>
            <div>Test Component</div>
            
            <div style={{ width: "100%" }}>
                <ViewFormBuilder<IMyData, BasicViewTypes> prefix="viewform_" data={myData} formDefintion={viewFormElements} renderer={MantineViewRenderer} />
            </div>

            <hr />
            <hr />
            
            <div style={{ width: "100%" }}>
                <EditFormBuilder<IMyData, BasicEditTypes> prefix="editform_"
                    data={myData}
                    formDefinition={editFormElements}
                    onChange={(formElement, value, data: IMyData) => {
                        setMyData({ ...myData, [formElement.propertyName]: value });
                    }}
                    renderer={MantineEditRenderer}
                />
            </div>
        </div>
    )
}