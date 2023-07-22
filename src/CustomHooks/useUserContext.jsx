// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext()

// export default function AuthContextProvider({children}) {
//     const  [findUser,setFindUser]=useState(sessionStorage.getItem("token"))
//     const  [User,setUser]=useState(null)

//     async function checkToken(token) {
//         try {
//           const response = await axios.get("http://localhost:5000/checkToken", {
//             headers: {
//               authorization: `Bearer ${token}`,
//             },
//           });
//           return response.data;
//         } catch (error) {
//           console.error(error);
//           return false;
//         }
//       }
    
//       useEffect(()=>{
//         setFindUser(sessionStorage.getItem("token"))
//         if (findUser) {
//           checkToken(findUser).then((resultUsers) => {
//            setUser(resultUsers)
//           });
//         }
//         console.log(findUser)
//       },[sessionStorage.getItem("token")])
//     return (
//         <AuthContextProvider value={{ findUser, User,setFindUser,setUser }}>{children}</AuthContextProvider>
//     )
// }