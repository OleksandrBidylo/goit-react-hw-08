import { createSelector } from "@reduxjs/toolkit";
import { selectSearchString } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchString],
  (contacts, searchString) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchString.toLowerCase().trim())
    );
  }
);
