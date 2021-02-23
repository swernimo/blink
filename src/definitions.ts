declare module '@capacitor/core' {
  interface PluginRegistry {
    BlinkInput: IBlinkInputPlugin;
  }
}

export interface IBlinkInputPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  scanCard(data: any): Promise<any>;
}
