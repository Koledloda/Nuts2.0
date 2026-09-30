import express from 'express';
import {getUserId, addUser, changeUser, patchUser, deleteUser, getUserAll} from './user.controlers.js';
import {createUserSchema, validateBody} from './user.valide.js';

const router = express.Router();



// GET /api/users — весь список
router.get('/', getUserAll);

// GET /api/users/:id — один, или 404
router.get('/:id', getUserId);

// POST /api/users — с новым id, статус 201
router.post('/', validateBody(createUserSchema), addUser);

// PUT /api/users/:id — полностью заменяет
router.put('/:id', changeUser);

// PATCH /api/users/:id — частично обновляет
router.patch('/:id', patchUser);

// DELETE /api/users/:id — 204
router.delete('/:id', deleteUser);


export {
  router as userRouters
}

