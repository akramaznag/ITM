import api from '../axios'
//technician services
export const getTechnicians =  (token)=> api.get('/technicians',{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const getFilteredTechnician =  (data,token)=> api.post('/technicians/filterTechnician',data,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const getTechnicianById =  (id,token)=> api.get(`/technicians/${id}`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const addTechnician = (data,token) =>api.post('/technicians',data,{
       headers:{
        Authorization:`Bearer ${token}`
    }

})

//client services

export const getClients =  (token)=> api.get('/clients',{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const getFilteredClient =  (data,token)=> api.post('/clients/filterClient',data,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const getClientyId =  (id,token)=> api.get(`/clients/${id}`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});


//Product services
export const getProducts =  (token)=> api.get('/products',{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const addProduct =  (data,token)=> api.post('/products',data,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

export const getProductById =  (id,token)=> api.get(`/products/${id}`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});


export const updateProduct =  (id,data,token)=> api.patch(`/products/${id}`,data,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});


export const deleteProduct =  (id,token)=> api.delete(`/products/${id}`,{
    headers:{
        Authorization:`Bearer ${token}`
    }
});

