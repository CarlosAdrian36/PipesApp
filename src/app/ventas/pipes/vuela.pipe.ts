import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'v'
})


export class Vuela implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return true ? 'vuela': 'no vuela'
    }
}