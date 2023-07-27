window.onload = function() {
  window.ui = SwaggerUIBundle({
    urls: [{
      url: "https://loac.ru/grundfos/v1/swagger.json",
      name: "V1"
    }, {
      url: "https://loac.ru/grundfos/v2/swagger.json",
      name: "V2"
    }, {
      url: "https://loac.ru/grundfos/v3/swagger.json",
      name: "V3"
    }
    ],
    dom_id: '#swagger-ui',
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    docExpansion: "none",
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl,
      DisableTryItOutPlugin
    ],
    layout: "StandaloneLayout"
  });
};

const DisableTryItOutPlugin = function() {
  return {
    statePlugins: {
      spec: {
        wrapSelectors: {
          allowTryItOutFor: () => () => false
        }
      }
    }
  }
}
