'use client';
import { z } from 'zod';

export const Schema = (inputs: any) => {
    const schema: any = {};

    inputs.forEach((input: any) => {
        let validation: any;

        switch (input.slug) {
            case 'name':
                validation = z.string()
                    .regex(/^\D/, { message: 'should not start with number' })
                    .min(3, { message: 'name should be min 3 letters' })
                break;
            case 'age':
                validation = z.string()
                    .refine((value) => {
                        const numberValue = Number(value)
                        return !isNaN(numberValue) && numberValue >= 16 && numberValue <= 90;
                    }, { message: 'range should be between 18 and 90' })
                break;
            case 'email':
                validation = z.string()
                    .regex(/^\D/, { message: 'email should not start with number' })
                    .regex(/^.{3,}@/, { message: 'email should be mimimun 3 letters' })
                    .regex(/^\S+$/, { message: 'email should not contain spaces' })
                    .email({ message: 'email is invalid' }).min(1, { message: 'required' });
                break;
            case 'password':
                validation = z.string()
                    .regex(/[A-Z]/, { message: 'at least one Uppercase' })
                    .regex(/[a-z]/, { message: 'at least one Lowercase' })
                    .regex(/[0-9]/, { message: 'at least one digit number' })
                    .regex(/[\W_]/, { message: 'at least one token' })
                    .min(8, { message: 'password sould be at least 8 values' });
                break;

            case 'confirm_password':
                validation = z.string().min(1, { message: 'required' });
                break;
            case 'phone':
                validation = z
                    .string()
                    .regex(/^\+[1-9]\d{11,15}$/, {
                        message: "should be a valid phone number",
                    })
                    .min(1, { message: "Phone number is required" })
                break;
            case 'country':
                validation = z.array(z.string())
                    .min(1, { message: 'required' });
                break;
            case 'hobbies':
                validation = z.array(z.string())
                    .min(1, { message: 'required' });
                break;
            case 'is-interset':
                validation = z.boolean().refine((value) => value == true, { message: 'you should declare as interesting' })
                break;
            case 'description':
                validation = z.string().min(10, { message: 'Description should be at least 10 letters' })
                break;
            case 'certifications':
                validation = z.union([
                    z.string().min(5, { message: 'union' }), // Accepts a string
                    z.array(z.instanceof(Object)) // Accepts an array of files
                ]).refine((value) => {
                    if (typeof value === 'string') {
                        return value.trim().length > 0; // Ensure the string is not empty
                    }
                    return value.length > 0; // Ensure the array has at least one file
                }, { message: 'at least one file' });
                break;

            default:
                validation = z.any()
                break;
        }

        schema[input.slug] = input.isRequired ? validation : z.union([validation, z.literal(''), z.boolean(), z.number(), z.array(z.number()), z.array(z.literal(''))]).optional();
    });

    return z.object(schema).refine((data) => data.password === data['confirm_password'], {
        message: 'password is not match',
        path: ['confirm_password'],
    });
};
