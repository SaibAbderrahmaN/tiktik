import create from "zustand";
import  {persist } from 'zustand/middleware'
import axios from "axios";
import { useIsPresent } from "framer-motion";


const authStor =(set:any) => ({
    userProfile : null ,
    allUsers: [],


      
    addUser: (user : any) => set({ userProfile: user }),
    removeUser: () => set({ userProfile: null}),

    fetchAllUsers: async () => {
        const response = await axios.get(`http://localhost:3000/api/users`);
    
        set({ allUsers: response.data });
      },
    








})
const useAuthStore = create(
    persist(authStor,{
        name:'auth'
    })
)
export default useAuthStore ;