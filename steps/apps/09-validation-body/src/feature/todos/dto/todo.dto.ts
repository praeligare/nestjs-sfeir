import { Equals, IsIn, IsString } from "class-validator";

export class TodoDTO {
    @IsIn([1, 2])
    userId: 1 | 2;

    @IsString()
    title: string;
    
    @Equals(false)
    completed: boolean;
}
