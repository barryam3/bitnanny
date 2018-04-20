import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Record, RecordNoID } from './record';
import { unixDays, range, randint } from '../utils';

function withID<T>(obj: T, i: number): T & { id: number } {
  obj['id'] = i;
  return <T & { id: number }>obj;
}

const intToChild = {0: "Bryan", 1: "Emily"}; 

function generateSleep(nDays: number): RecordNoID[] {
  return [].concat(...range(2).map(child => range(nDays).map((day) => {
    const value = randint(6, 9) + 0.5 * randint(-1, 1);
    return {day, child: intToChild[child], descriptor: 'sleep', value};
  })));
}

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // day means number of days ago (so we get the same load each time)
    const records: Record[] = generateSleep(14).concat([
      { day: 1, child: "Bryan", descriptor: 'arts', value: 1 },
      { day: 8, child: "Bryan", descriptor: 'arts', value: 1 },
      { day: 2, child: "Emily", descriptor: 'athletics', value: 1.5 },
      { day: 4, child: "Emily", descriptor: 'athletics', value: 1.5 },
      { day: 9, child: "Emily", descriptor: 'athletics', value: 1.5 },
      { day: 8, child: "Emily", descriptor: 'electronics', value: 3 },
    ]).map(withID);
    // convert day to unixDays
    records.forEach((record) => {
      record.day = unixDays(new Date().getTime()) - record.day;
    });
    return { records };
  }
}
