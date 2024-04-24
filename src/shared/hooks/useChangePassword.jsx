import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as loginRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { changePassword } from '../../services'

export const useChangePassword = () => {
    const [isLoading, setIsLoading] = useState(false)

    const updatePassword = async(password, newPassword) => {
        setIsLoading(true)

        console.log({password, newPassword})
        const response = await changePassword({
            password,
            newPassword
        })

        setIsLoading(false)
        console.log(response)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al iniciar sesion'
            )
        }

        toast.error("Supuestamente agarro")
        // const data = response.data

        // localStorage.setItem('user', JSON.stringify(userDetails))

    }
    return {
        updatePassword,
        isLoading
    }
}