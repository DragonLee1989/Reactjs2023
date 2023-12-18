// import React from 'react'
import { contact } from "../../data/contact";

type TContact = {
  titleContact: string;
  contentContact?: string;
};

const SingleContact = ({ titleContact, contentContact }: TContact) => {
  return (
    <li>
      <div>{titleContact}</div>
      <div>{contentContact}</div>
    </li>
  );
};

export const Contact = () => {
  return (
    <div>
      <h3 className="font-bold text-white flex justify-center mt-10 mb-4">
        CONTACT
      </h3>
      <div className="text-white flex justify-center align-middle">
        <ul className="list-disc">
          {contact.map((contact, index) => {
            return (
              <SingleContact
                key={`Contact_${index}`}
                titleContact={contact.titleContact}
                contentContact={contact.contentContact}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
