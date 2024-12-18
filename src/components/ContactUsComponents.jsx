import React from 'react';
import { EnvelopeIcon, PhoneIcon, EnvelopeOpenIcon } from '@heroicons/react/16/solid';

const ContactUsItems = () => {
    const contactInfo = [
        {
            icon: EnvelopeIcon,
            type: 'Email',
            describe: 'Contact us via',
            detail: 'zygen@example.com',
        },
        {
            icon: PhoneIcon,
            type: 'Phone',
            describe: 'Give us a call at',
            detail: '+123 456 7890',
        },
        {
            icon: EnvelopeOpenIcon,
            type: 'Address',
            describe: 'Visit us at',
            detail: '123 Main Street, Legon, Ghana',
        },
    ];

    return (
        <>
            {contactInfo.map((contact, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center gap-3 px-8 py-10 bg-gray-700 rounded-3xl shadow-main"
                >
                    {contact.icon ? (
                        <span>
                            <contact.icon className="w-10 h-10 text-purple-500" />
                        </span>
                    ) : (
                        <span className="w-10 h-10 text-green-500">📞</span>
                    )}
                    <p className="text-2xl font-extrabold text-white text-dark-grey-900">
                        {contact.type}
                    </p>
                    <p className="text-base leading-7 text-white">
                        {contact.describe}
                    </p>
                    <a
                        className="text-lg font-bold text-white"
                        href={
                            contact.type === 'Email'
                                ? `mailto:${contact.detail}`
                                : contact.type === 'Phone'
                                ? `tel:${contact.detail}`
                                : undefined
                        }
                    >
                        {contact.detail}
                    </a>
                </div>
            ))}
        </>
    );
};

const ContactUsComponents = () => {
    return (
        <div className="container flex flex-col mx-auto">
            <div className="w-full draggable">
                <div className="container flex flex-col items-center gap-16 mx-auto my-32">
                    <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <ContactUsItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsComponents;
