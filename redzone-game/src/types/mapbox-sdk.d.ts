declare module '@mapbox/mapbox-sdk' {
  interface MapboxClientOptions {
    accessToken: string;
  }
  
  function mbxClient(options: MapboxClientOptions): any;
  export default mbxClient;
}

declare module '@mapbox/mapbox-sdk/services/styles' {
  function mbxStyles(client: any): any;
  export default mbxStyles;
}

declare module '@mapbox/mapbox-sdk/services/tilesets' {
  function mbxTilesets(client: any): any;
  export default mbxTilesets;
}

declare module '@mapbox/mapbox-sdk/services/tilequery' {
  interface TilequeryOptions {
    mapIds: string[];
    coordinates: [number, number];
    radius?: number;
  }

  interface TilequeryService {
    listFeatures(options: TilequeryOptions): {
      send(): Promise<{
        body: any;
      }>;
    };
  }

  function mbxTilequery(client: any): TilequeryService;
  export default mbxTilequery;
} 