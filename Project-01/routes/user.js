const express = require('express');
const router = express.Router();
const {getAllusers,getUserById,delUserById,updateUserById,createUser} = require("../Controller/index")


router.route("/")
.get(getAllusers)
.post(createUser)

router.
route("/:id")
.get(getUserById)
.patch(updateUserById)
.delete(delUserById)



// .delete(async(req, res) => {
//     await UserG.findByIdAndDelete(req.params.id);
//     return res.json("users delete Succes ");
//     // const id = Number(req.params.id);
//     // const user = users.find((user => user.id ===id));
//     // const index = users.findIndex((user) => user.id === id);
//     // const dhtml=`
//     // <h2>Deleted User Succesfully :)</h2>
//     //   <table border="1">
//     //     <thead>
//     //         <tr>
//     //             <th>EMP ID</th>
//     //             <th>First Name</th>
//     //             <th>Last Name</th>
//     //             <th>Email</th>
//     //             <th>Gender</th>
//     //             <th>Job Title</th>
//     //         </tr>
//     //     </thead>
//     //     <tbody>
//     //     <tr>
//     //        <td>${user.id}</td>
//     //        <td>${user.first_name}</td>
//     //        <td>${user.last_name}</td>
//     //        <td>${user.email}</td>
//     //        <td>${user.gender}</td>
//     //        <td>${user.job_title}</td>
//     //        <tr>
//     //     </tbody>
//     // </table>
//     // `;

//     // if (index !== -1) {
//     //     users.splice(index, 1);
//     //     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
//     //         if (err) {
//     //             return res.status(500).json({ error: "Failed to delete user" });
//     //         }
//     //         return res.send(dhtml);
//     //     });
//     // } else {
//     //     return res.json({ error: "User not found" });
//     // }
// });


module.exports = router;