import express from 'express';


import {getDomaines,createDomaine,modifierDomaine,suprimerDomaine} from'../controllers/domaines.js';
const router = express.Router();

router.get('/', getDomaines);
router.post('/', createDomaine);
router.patch('/:id', modifierDomaine);
router.delete('/:id', suprimerDomaine);

export default router;