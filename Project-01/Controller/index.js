const UserG = require("../Model/user")
const fs = require("fs");
async function getAllusers(req,res){
    const allUsers = await UserG.find({})
    const html = `
  <table border="1">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Job Title</th>
            </tr>
        </thead>
        <tbody>
            ${allUsers.map(user => `
                <tr>
                    <td>${user.firstName}</td>
                    <td>${user.LastName}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.jobTitle}</td>
                </tr>
            `).join("")}
        </tbody>
    </table>
`;
    res.send(html);
}
async function  getUserById(req,res){
    const gg = await UserG.findById(req.params.id)
    
    if (gg) {
        const html = `
    <table border="1">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Job Title</th>
            </tr>
        </thead>
        <tbody>
           <td>${gg.firstName}</td>
           <td>${gg.LastName}</td>
           <td>${gg.email}</td>
           <td>${gg.gender}</td>
           <td>${gg.jobTitle}</td>
        </tbody>
    </table>
    `;
        return res.send(html);
    } else {
        return res.json({ message: "No user found" });
    }
    
}
async function delUserById(req,res){
    await UserG.findByIdAndDelete(req.params.id);
    return res.json("users delete Succes ");
}
async function updateUserById(req,res){
    const id = Number(req.params.id);
    const index = users.findIndex((user) => user.id === id);
    console.log(index);

    if (index !== -1) {
        const updatedUser = { ...users[index], ...req.body };
        users[index] = updatedUser;


        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to update user" });
            }
            return res.json(updatedUser);
        });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
}

async function createUser(req,res){
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({err:"Bad Request All Feilds are required"})
    }

   const result = await UserG.create({
        firstName:body.first_name,
        LastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title

    });
    
    return res.status(201).json(result);
    // users.push({id: users.length+1,...body});
    // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    //     return res.status(201).json({status:"User Added",id: users.length});
    // });

}
module.exports={
    getAllusers,
    getUserById,
    delUserById,
    updateUserById,
    createUser,

}
