import React, { useState } from 'react';
import { IViewFormElement, IEditFormElement } from '../core';
import { ViewFormBuilder, BasicViewTypes, MantineViewRenderer } from '../package-mantine';
import { EditFormBuilder, BasicEditTypes, MantineEditRenderer } from '../package-mantine';

export default function TestComponent() {
    const [myData, setMyData] = useState<any>({
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

    const viewFormElements: IViewFormElement<BasicViewTypes>[] = [
        { value: myData.firstName,          type: "text",       label: "First name",            span: 6 },
        { value: myData.lastName,           type: "text",       label: "Last name",             span: 6 },
        { value: myData.phoneNumber,        type: "tel",        label: "📞 Phone",              span: 6 },
        { value: myData.emailAddress,       type: "email",      label: "✉️ Email",               span: 6 },
        { value: myData.mailingAddress,     type: "text",       label: "🏠 Mailing address",    span: 12 },
        { value: myData.city,               type: "text",       label: "City",                  span: 6 },
        { value: myData.state,              type: "text",       label: "State",                 span: 2 },
        { value: myData.zipCode,            type: "text",       label: "Zip code",              span: 4 },
        { value: myData.country,            type: "text",       label: "Country",               span: 12 },
        { value: null,                      type: "divider",    label: "",                      span: 12 },
        { value: myData.companyName,        type: "text",       label: "Company name",          span: 12 },
        { value: myData.entityType,         type: "text",       label: "Entity type",           span: 12 },
        { value: null,                      type: "divider",    label: "",                      span: 12 },
        { value: myData.website,            type: "url",        label: "Website",               span: 12 },
    ];

    const editFormElements: IEditFormElement<BasicEditTypes>[] = [
        { value: myData.lastName,         type: "text",             label: "Last name",           placeholder: "Last name",       propertyName: "lastName",      disabled: false, span: 6, required: true },
        { value: myData.firstName,        type: "text",             label: "First name",          placeholder: "First name",      propertyName: "firstName",      disabled: false, span: 6, required: true },
        { value: myData.phoneNumber,      type: "tel",              label: "📞 Phone",            placeholder: "Phone",           propertyName: "phoneNumber",    disabled: false, span: 6 },
        { value: myData.emailAddress,     type: "email",            label: "✉️ Email",             placeholder: "Email",           propertyName: "emailAddress",   disabled: false, span: 6 },
        { value: myData.mailingAddress,   type: "text",             label: "🏠 Mailing address",  placeholder: "Mailing address", propertyName: "mailingAddress", disabled: false, span: 12 },
        { value: myData.city,             type: "text",             label: "City",                placeholder: "City",            propertyName: "city",           disabled: false, span: 6 },
        { value: myData.state,            type: "state",            label: "State",               placeholder: "State",           propertyName: "state",          disabled: false, span: 2 },
        { value: myData.zipCode,          type: "text",             label: "Zip code",            placeholder: "Zip code",        propertyName: "zipCode",        disabled: false, span: 4 },
        { value: myData.country,          type: "country",          label: "Country",             placeholder: "Country",         propertyName: "country",        disabled: false, span: 12 },
        { value: null, type: "divider", label: "", placeholder: "", propertyName: "", disabled: false, span: 12 },
        { value: myData.companyName,      type: "text",             label: "Company name",        placeholder: "Company name",    propertyName: "companyName",    disabled: false, span: 12 },
        { value: myData.entityType,       type: "businessEntity",   label: "Entity type",         placeholder: "Entity type",     propertyName: "entityType",     disabled: false, span: 12 },
        { value: null, type: "divider", label: "", placeholder: "", propertyName: "", disabled: false, span: 12 },
        { value: myData.website,          type: "text",             label: "Website",             placeholder: "Website",         propertyName: "website",        disabled: false, span: 12 },
    ];

    return (
        <div>
            <div>Test Component</div>
            
            <div style={{ width: "100%" }}>
                <ViewFormBuilder prefix="viewform_" formElements={viewFormElements} renderer={MantineViewRenderer} />
            </div>

            <hr />
            <hr />
            
            <div style={{ width: "100%" }}>
                <EditFormBuilder prefix="editform_"
                    formElements={editFormElements}
                    onChange={(formElement, value) => {
                        setMyData({ ...myData, [formElement.propertyName]: value });
                    }}
                    renderer={MantineEditRenderer}
                />
            </div>
        </div>
    )
}