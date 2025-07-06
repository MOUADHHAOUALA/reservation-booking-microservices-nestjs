import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsCreditCard,
  Length,
  Min,
  Max,
} from 'class-validator';

export class CardDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 4, { message: 'CVC must be 3 or 4 digits' })
  cvc: string;

  @IsNumber()
  @Min(1, { message: 'Expiration month must be between 1 and 12' })
  @Max(12, { message: 'Expiration month must be between 1 and 12' })
  exp_month: number;

  @IsNumber()
  @Min(new Date().getFullYear(), {
    message: 'Expiration year must be current or future year',
  })
  exp_year: number;

  @IsString()
  @IsCreditCard({ message: 'Invalid credit card number' })
  number: string;
}
