import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user-dto";

@Controller("/users")
export class UserController {
    
    constructor(private readonly userService: UserService) {}

    @Get("/:id")
    getUser(@Param("id") id: string) {
        return this.userService.getUser(id);
    }

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO) {
        const user = await this.userService.createUser(createUserDTO);
        return { id: user.id }
    }

    @Put()
    updateUser() {
        return this.userService.updateUser();
    }

    @Delete("/:id")
    deleteUser(@Param("id") id: string) {
        
        return this.userService.deleteUser(id);
    }


}