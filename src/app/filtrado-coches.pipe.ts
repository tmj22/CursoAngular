import { PipeTransform, Pipe } from '@angular/core';
import { Icoche } from 'app/coche';

@Pipe({
  name:"filtrodecoches"
})



export class filtradoCoches implements PipeTransform{
  transform(value: Icoche[],modelofiltrado: string): Icoche[]{
    return value.filter((coche: Icoche) => coche.modelo.toLocaleLowerCase().indexOf(modelofiltrado) !== -1);
  }

}
