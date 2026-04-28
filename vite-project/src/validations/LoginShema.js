import z from 'zod';

const LoginShema = z.object({   
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

export default LoginShema;