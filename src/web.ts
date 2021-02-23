import { WebPlugin } from '@capacitor/core';
import { IBlinkInputPlugin } from './definitions';

export class BlinkInputWeb extends WebPlugin implements IBlinkInputPlugin {
  constructor() {
    super({
      name: 'BlinkInput',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }


  async scanCard(data: any): Promise<any> {
    return 'Scan Card Web' + data;
  }
}

const BlinkInput = new BlinkInputWeb();

export { BlinkInput };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BlinkInput);
