import {Router} from 'express';

 import { getAllEmployees, getEmployee } from './employeeUtils.js';
const appRote = Router();


//Get All
appRote.route('/').get(async function(req,resp)
{
    let employees = await getAllEmployees();
    return resp.json(employees);
});

//Get by ID
appRote.route('/:id').get(async function(req,resp)
{
    let id = req.params.id;
    let employee = await getEmployee(id);
    return resp.json(employee);
})

export default appRote;