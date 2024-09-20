import { Body, Controller, Delete, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user-dto";
import { FileInterceptor } from "@nestjs/platform-express";

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
    @UseInterceptors(FileInterceptor("photo"))
    async createUser(@Body() createUserDTO: CreateUserDTO, @UploadedFile() photo: Express.Multer.File) {
 
        const user = await this.userService.createUser(createUserDTO, photo);
        return { id: user.id }
    }


    @Delete("/:id")
    deleteUser(@Param("id") id: string) {
        
        return this.userService.deleteUser(id);
    }


}