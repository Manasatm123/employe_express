import { Router } from "express";

import * as rh from './requesthandler.js'

const router=Router();

router.route('/add').post(rh.addEmployee)
router.route('/getemployee').get(rh.getEmployees)
router.route('/getemployee/:id').get(rh.getemploye)
router.route('/update/:id').put(rh.update)
router.route('/deleteEmp/:id').delete(rh.deleteemp)

export default router;