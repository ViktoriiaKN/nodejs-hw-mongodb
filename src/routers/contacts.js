import { Router } from 'express';
import {
  getAllContacts,
  getAllContactsById,
  createContact,
  updateContact,
  deleteContact,
} from '../controllers/contacts.js';

const router = Router();

router.get('/', getAllContacts);
router.get('/:contactId', getAllContactsById);
router.post('/', createContact);
router.patch('/:contactId', updateContact);
router.delete('/:contactId', deleteContact);

export default router;
