import { z } from 'zod';

export const apiSchema = (inputs: any) => {
  const schema: any = {};

  inputs.forEach((input: any) => {
    let validation: any;

    // Replace the commented-out switch case with a more concise approach
    switch (input.slug) {
      case 'name':
        validation = z.string().regex(/^\D/, { message: 'should not start with number' }).min(3, { message: 'name should be min 3 letters' });
        break;
      case 'age':
        validation = z.string()
          .refine((value) => {
            const numberValue = Number(value);
            return !isNaN(numberValue) && numberValue >= 16 && numberValue <= 90;
          }, { message: 'range should be between 18 and 90' });
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
          .min(1, { message: "Phone number is required" });
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
        validation = z.boolean().refine((value) => value == true, { message: 'you should declare as interesting' });
        break;
      case 'description':
        validation = z.string().min(10, { message: 'Description should be at least 10 letters' });
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
        validation = z.any();
        break;
    }

    console.log(input.is_required, input.slug);
    if (input.restrictions.length > 0) {
      input.restrictions.forEach((restriction: any) => {

        switch (restriction.type.slug) {
          case 'email':
            validation = z.string()
              .email({ message: restriction.validation_message });
            break;
          case 'tel':
            validation = z.string().regex(/^\+?\d{10}$/, { message: restriction.validation_message });
            break;
          case 'integer':
            validation = z.string().regex(/^\d+$/, { message: restriction.validation_message });
            break;
          case 'url':
            validation = z.string().url({ message: restriction.validation_message });
            break;
          case 'minValue':
            validation = validation.refine((val: any) => parseInt(val) >= parseInt(restriction.value), {
              message: restriction.validation_message,
            });
            break;
          case 'multiple':
            validation = z.array(z.number());
            break;
          default:
            validation = z.any();
            break;
        }
      });
    } else {
      if (input.is_required) {
        validation = z.union([
          z.string()
            .min(1, { message: 'required' }),
          z.array(z.string().min(1, { message: 'required' })),
          z.number().min(1, { message: 'required' }),
          z.boolean().refine((val: boolean) => { return val == true }, { message: 'you should check' })
        ]);
      }
    }




    schema[input.slug] = validation;
  });

  return z.object(schema);
};