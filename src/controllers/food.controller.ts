import { Request, Response } from 'express';
import { JsonController, Req, Res, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController('/food')
export class FoodController {
    @Get()
    private async getAllFoods (@Req() req: Request, @Res() res: Response): Promise<void> {
        res.send('Get all Foods');
    }

    @Get('/:id')
    private async getFoodById (@Param("id") id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
        res.send(`Get Food by ID: ${id}`);
    }

    @Post()
    private async createFood (@Body() food: any, @Req() req: Request, @Res() res: Response): Promise<void> {
        res.send('Create Food');
    }

    @Put()
    private async updateFood (@Body() food: any, @Req() req: Request, @Res() res: Response): Promise<void> {
        res.send('Update Food');
    }

    @Delete("/:id")
    private async removeFood (@Param("id") id: number, @Req() req: Request, @Res() res: Response): Promise<void> {
        res.send(`Remove Food by ID: ${id}`);
    }
}
