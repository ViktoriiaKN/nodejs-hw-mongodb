import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getAllContactsById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (contactData) => {
  const newContact = new ContactsCollection(contactData);
  return await newContact.save();
};

export const updateContact = async (contactId, updateData) => {
  const contact = await ContactsCollection.findById(contactId);
  if (!contact) return null;
  Object.assign(contact, updateData);
  return await contact.save();
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findByIdAndDelete(contactId);
  return contact;
};
