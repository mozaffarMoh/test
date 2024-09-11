/* 
      case 'nationalpersonal-number':
        validation = z.string()
          .regex(/^\d{10}$/, { message: t('validation.nationalNum') });
        break;

      case 'personal-intrests':
        validation = z.array(z.number()).min(1, { message: t('validation.personalInterests') });
        break;

      case 'nationality':
        validation = z.number()
        break;

      case 'age':
        validation = z.string()
          .refine((value) => {
            const numberValue = Number(value);
            return !isNaN(numberValue) && numberValue >= 16 && numberValue <= 100;
          }, { message: t('validation.ageRange') });
        break;

      case 'website-link':
        validation = z.string().url({ message: t('validation.validUrl') });
        break;

      case 'linkedin-link':
        validation = z.string()
          .url({ message: t('validation.validUrl') })
          .regex(/^https:\/\/(www\.)?linkedin\.com\/.*$/, { message: t('validation.linkedinUrl') });
        break;

      case 'facebook-link':
        validation = z.string()
          .url({ message: t('validation.validUrl') })
          .regex(/^https:\/\/(www\.)?facebook\.com\/.*$/, { message: t('validation.facebookUrl') });
        break;

      case 'youtube-link':
        validation = z.string()
          .url({ message: t('validation.validUrl') })
          .regex(/^https:\/\/(www\.)?youtube\.com\/.*$/, { message: t('validation.youtubeUrl') });
        break;

      case 'twitter-link':
        validation = z.string()
          .url({ message: t('validation.validUrl') })
          .regex(/^https:\/\/(www\.)?x\.com\/.*$/, { message: t('validation.xUrl') });
        break;

        case 'x-link':
          validation = z.string()
            .url({ message: t('validation.validUrl') })
            .regex(/^https:\/\/(www\.)?x\.com\/.*$/, { message: t('validation.xUrl') });
          break;

      case 'instagram-link':
        validation = z.string()
          .url({ message: t('validation.validUrl') })
          .regex(/^https:\/\/(www\.)?instagram\.com\/.*$/, { message: t('validation.instagramUrl') });
        break;

      case 'educational-qualification':
        validation = z.number();
        break;

      case 'current-company-name-jo':
        validation = z.string()
          .min(3, { message: t('validation.valueMin3') })
          .regex(/^[^\d]/, { message: t('validation.valueNoNum') });
        break;

      case 'years-of-experience':
        validation = z.string()
          .regex(/^\d+$/, { message: t('validation.yearsOfExpNum') })  // Ensure it's only digits
          .refine((value) => {
            const numberValue = Number(value);
            return numberValue <= 20;
          }, { message: t('validation.yearsOfExpMax') });
        break;

      case 'areas-of-expertise-marke':
        validation = z.string().min(3, { message: t('validation.valueMin3Letters') })
          .regex(/^[^\d]/, { message: t('validation.valueMin3Letters') })
        break;

      case 'method-of-communication':
        validation = z.array(z.number()).min(1, { message: t('validation.methodOfComm') });
        break;

      case 'availabilityeg-weekda':
        validation = z.string().min(3, { message: t('validation.availabilityMin3') });
        break;

      case 'mentorship-goalseg-ca':
        validation = z.string().min(10, { message: t('validation.mentorshipGoalsMin10') });
        break;

      case 'maximum-number-of-mentees':
        validation = z.string()
          .refine((value) => {
            const numberValue = Number(value);
            return !isNaN(numberValue) && numberValue >= 1 && numberValue <= 50;
          }, { message: t('validation.maxNumRange') });
        break;

      case 'previous-mentoring-experi':
        validation = z.string()
          .min(5, { message: t('validation.previousMentoringMin5') })
          .regex(/^[A-Za-z\s]+$/, { message: t('validation.previousMentoringNoNum') });
        break;

      case 'address':
        validation = z.string().min(5, { message: t('validation.addressMin5') })
        break;

      case 'interested-in-providing-m':
        validation = z.boolean()
          .refine((value) => value === true, { message: t('validation.confirmMentorship') });
        break;

      case 'professional-certificatio':
        validation = z.union([
          z.string().min(5, { message: t('validation.uploadCert') }), // Accepts a string
          z.array(z.instanceof(Object)) // Accepts an array of files
        ]).refine((value) => {
          if (typeof value === 'string') {
            return value.trim().length > 0; // Ensure the string is not empty
          }
          return value.length > 0; // Ensure the array has at least one file
        }, { message: t('validation.uploadCert') });
        break;

      default:
        validation = z.union([z.string(), z.number()]);
        break;
    }


    // Apply custom validations
    /*  input.restrictions.forEach((restriction: any) => {
       switch (restriction.type.slug) {
         case 'email':
           validation = validation
             .email({ message: t('validation.invalid-email') })
             .regex(/^[^\d]/, { message: t('validation.email-start-with-char') })
             .regex(/^.{3,}@/, { message: t('validation.invalid-email') })
             .min(1, { message: t('validation.email') })
           break;
         case 'tel':
           validation = validation.regex(/^\+?\d{10}$/, { message: restriction.validation_message });
           break;
         case 'integer':
           validation = validation.regex(/^\d+$/, { message: restriction.validation_message });
           break;
         case 'url':
           validation = validation.url({ message: restriction.validation_message });
           break;
         case 'minValue':
           console.log('minValue : ',input.slug);
           
           validation = validation.refine((val: any) => parseInt(val) >= parseInt(restriction.value), {
             message: restriction.validation_message,
           });
           break;
         case 'multiple':
           validation = z.array(z.number());
           break;
         default:
           break;
       }
     }); 


     case 'first_name':
                validation = z.string()
                    .min(3, { message: t('validation.fullNameMin') })
                    .regex(/^[^\d]/, { message: t('validation.fullNameNoNum') });
                break;

            case 'last_name':
                validation = z.string()
                    .min(3, { message: t('validation.fullNameMin') })
                    .regex(/^[^\d]/, { message: t('validation.fullNameNoNum') });
                break;

            case 'phone':
                validation = z.string().regex(/^\d{9}$/, { message: t('validation.validPhone') });
                break;

            case 'email':
                validation = z.string()
                    .email({ message: t('validation.invalid-email') })
                    .regex(/^[^\d]/, { message: t('validation.email-start-with-char') })
                    .regex(/^.{3,}@/, { message: t('validation.invalid-email') })
                    .regex(/^\S+$/, { message: t('validation.no-spaces-in-email') })
                    .min(1, { message: t('validation.email') });
                break;

            case 'password':
                validation = z.string()
                    .regex(/[A-Z]/, { message: t('validation.one-uppercase') })
                    .regex(/[a-z]/, { message: t('validation.one-lowercase') })
                    .regex(/[0-9]/, { message: t('validation.one-number') })
                    .regex(/[\W_]/, { message: t('validation.one-special') })
                    .min(8, { message: t('validation.eight-char') });
                break;

            case 'password_confirmation':
                validation = z.string().min(1, { message: t('validation.required') });
                break;

            case 'gender':
                validation = z.string().min(1, { message: t('validation.required') });
                break;

            case 'place_slug':
                validation = z.string().min(1, { message: t('validation.required') });
                break;

            case 'place_id':
                validation = z.number().min(1, { message: t('validation.required') });
                break;

            case 'terms':
                validation = z.boolean().refine((val) => val === true, {
                    message: t('validation.terms'),
                })



        schema[input.slug] = validation;
    });

    return z.object(schema).refine((data) => data.password === data['password_confirmation'], {
        message: t('validation.password-not-match'),
        path: ['password_confirmation'], // associate the error with the password_confirmation field
    }); */