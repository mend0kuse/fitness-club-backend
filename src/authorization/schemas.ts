import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const CredentialsSchema = z.object({
  email: z.string(),
  password: z.password().min(8),
});

export class CredentialsDto extends createZodDto(CredentialsSchema) {}
