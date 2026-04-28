import z from 'zod';

export const AddProductShema = z.object({
    name: z.string().min(1, "Product name is required"),

    brand: z.string().min(1, "Brand name is required"),

    category: z.enum(['LAPTOP','DESKTOP','PRINTER','ACCESSORY'],{
      error:'Invalid category'
    }),
    status:z.enum(['ACTIVE','INACTIVE','OUT_OF_STOCK'],{
      error:'Invalid product status'
    }),
    price:z.coerce.number().min(0).optional(),

    stock:z.coerce.number().int().min(0).optional(),
   
});
export const updateProductSchema =  z.object({
    name: z.string().min(1, "Product name is required").optional(),

    brand: z.string().min(1, "Brand name is required").optional(),

    category: z.enum(['LAPTOP','DESKTOP','PRINTER','ACCESSORY'],{
      error:'Invalid category'
    }).optional(),
    status:z.enum(['ACTIVE','INACTIVE','OUT_OF_STOCK'],{
      error:'Invalid product status'
    }).optional(),
    price:z.coerce.number().min(0).optional(),

    stock:z.coerce.number().int().min(0).optional(),
   
});

