import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDTO {
    @ApiProperty()
email: string;

@ApiProperty()
password: string;
}