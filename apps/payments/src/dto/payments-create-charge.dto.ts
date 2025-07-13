import { CreateChargeDto } from '@app/common';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class PaymentChargeDto extends CreateChargeDto {
  @IsEmail(
    {},
    {
      message: 'Please provide a valid email address',
    },
  )
  @IsNotEmpty({
    message: 'Email address cannot be empty',
  })
  @IsString({
    message: 'Email must be a string',
  })
  @MaxLength(254, {
    message: 'Email address cannot be longer than 254 characters',
  })
  email: string;
}
