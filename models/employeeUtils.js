import employee from './employeeModel.js'

export function getAllEmployees()
{
    return new Promise((resolve , reject)=>
    {
        employee.find({},function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}

export function getEmployee(id)
{
    return new Promise((resolve, reject)=>
    {
        employee.findById(id, function(err,data)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(data);
            }
        })
    })
}