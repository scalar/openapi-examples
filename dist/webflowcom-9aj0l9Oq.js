const e = {
  openapi: "3.0.1",
  servers: [{
    url: "https://api.lucidtech.ai/{basePath}",
    variables: { basePath: { default: "v1" } }
  }],
  info: {
    title: "Lucidtech API",
    version: /* @__PURE__ */ new Date(1677689137e3),
    "x-logo": { url: "https://api.apis.guru/v2/cache/logo/https_assets-global.website-files.com_5d3e265ac89f6a3e64292efc_5d5595354de4fbdd8c554dba_default_webclip.png" },
    "x-origin": [{
      format: "openapi",
      url: "https://raw.githubusercontent.com/LucidtechAI/cradl-docs/master/static/oas.yaml",
      version: "3.0"
    }],
    "x-providerName": "webflow.com"
  },
  paths: {
    "/appClients": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/AppClients" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/appclients:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostAppClients" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/AppClient" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/appclients:write"] }]
      }
    },
    "/appClients/{appClientId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "appClientId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/AppClient" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: []
      },
      options: {
        parameters: [{
          in: "path",
          name: "appClientId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "path",
            name: "appClientId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchAppClientId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/AppClient" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/appclients:write"] }]
      }
    },
    "/assets": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Assets" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostAssets" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Asset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:write"] }]
      }
    },
    "/assets/{assetId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "assetId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Asset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "assetId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Asset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "assetId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "assetId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchAssetId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Asset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:write"] }]
      }
    },
    "/datasets": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Datasets" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/datasets:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostDatasets" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Dataset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/datasets:write"] }]
      }
    },
    "/datasets/{datasetId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "datasetId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Dataset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/datasets:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "datasetId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Dataset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/datasets:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "datasetId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "datasetId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchDatasetId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Dataset" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/datasets:write"] }]
      }
    },
    "/deploymentEnvironments": {
      get: {
        parameters: [
          {
            in: "query",
            name: "owner",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DeploymentEnvironments" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/secrets:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/deploymentEnvironments/{deploymentEnvironmentId}": {
      get: {
        parameters: [{
          in: "path",
          name: "deploymentEnvironmentId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DeploymentEnvironment" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/organizations:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "deploymentEnvironmentId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/documents": {
      delete: {
        parameters: [
          {
            in: "query",
            name: "consentId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "datasetId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Documents" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:write"] }]
      },
      get: {
        parameters: [
          {
            in: "query",
            name: "datasetId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "order",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "documentId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "consentId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "sortBy",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Documents" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostDocuments" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Document" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:write"] }]
      }
    },
    "/documents/{documentId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "documentId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Document" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "documentId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Document" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "documentId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "documentId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchDocumentId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Document" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/documents:write"] }]
      }
    },
    "/logs": {
      get: {
        parameters: [
          {
            in: "query",
            name: "workflowId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "order",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "transitionExecutionId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "transitionId",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "workflowExecutionId",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Logs" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/logs:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/logs/{logId}": {
      get: {
        parameters: [{
          in: "path",
          name: "logId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Log" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/logs:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "logId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/models": {
      get: {
        parameters: [
          {
            in: "query",
            name: "owner",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Models" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/models:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostModels" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Model" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/models:write"] }]
      }
    },
    "/models/{modelId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "modelId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Model" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/models:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "modelId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Model" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/models:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "modelId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchModelId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Model" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/models:write"] }]
      }
    },
    "/models/{modelId}/dataBundles": {
      get: {
        parameters: [
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "status",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DataBundles" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/databundles:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "modelId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostDataBundles" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DataBundle" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/databundles:write"] }]
      }
    },
    "/models/{modelId}/dataBundles/{dataBundleId}": {
      delete: {
        parameters: [
          {
            in: "path",
            name: "dataBundleId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DataBundle" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: []
      },
      options: {
        parameters: [
          {
            in: "path",
            name: "dataBundleId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "path",
            name: "dataBundleId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchDataBundleId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/DataBundle" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/databundles:write"] }]
      }
    },
    "/models/{modelId}/trainings": {
      get: {
        parameters: [
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "status",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Trainings" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "modelId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostTrainings" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Training" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:write"] }]
      }
    },
    "/models/{modelId}/trainings/{trainingId}": {
      options: {
        parameters: [
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "trainingId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "modelId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "trainingId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchTrainingId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Training" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/predictions:write"] }]
      }
    },
    "/organizations": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Organizations" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/organizations:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostOrganizations" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Organization" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/organizations:write"] }]
      }
    },
    "/organizations/{organizationId}": {
      get: {
        parameters: [{
          in: "path",
          name: "organizationId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Organization" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/organizations:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "organizationId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "organizationId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchOrganizationId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Organization" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/organizations:write"] }]
      }
    },
    "/paymentMethods": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/PaymentMethods" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/paymentmethods:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostPaymentMethods" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/PaymentMethod" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/paymentmethods:write"] }]
      }
    },
    "/paymentMethods/{paymentMethodId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "paymentMethodId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/PaymentMethod" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/paymentmethods:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "paymentMethodId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/PaymentMethod" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/paymentmethods:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "paymentMethodId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "paymentMethodId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchPaymentMethodId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/PaymentMethod" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/paymentmethods:write"] }]
      }
    },
    "/plans": {
      get: {
        parameters: [
          {
            in: "query",
            name: "owner",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Plans" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/plans:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/plans/{planId}": {
      get: {
        parameters: [{
          in: "path",
          name: "planId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Plan" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/plans:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "planId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      }
    },
    "/predictions": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "sortBy",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "order",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Predictions" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/predictions:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostPredictions" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Prediction" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/predictions:write"] }]
      }
    },
    "/profiles/{profileId}": {
      get: {
        parameters: [{
          in: "path",
          name: "profileId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Profile" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "profileId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [{
          in: "path",
          name: "profileId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Profile" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/assets:write"] }]
      }
    },
    "/secrets": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Secrets" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/secrets:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostSecrets" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Secret" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/secrets:write"] }]
      }
    },
    "/secrets/{secretId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "secretId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Secret" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: []
      },
      options: {
        parameters: [{
          in: "path",
          name: "secretId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "secretId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchSecretId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Secret" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/secrets:write"] }]
      }
    },
    "/signup": {
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostSignUp" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/SignUp" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        }
      }
    },
    "/transitions": {
      get: {
        parameters: [
          {
            in: "query",
            name: "transitionType",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Transitions" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostTransitions" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Transition" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions:write"] }]
      }
    },
    "/transitions/{transitionId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "transitionId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Transition" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "transitionId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Transition" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "transitionId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchTransitionId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Transition" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions:write"] }]
      }
    },
    "/transitions/{transitionId}/executions": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "order",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "executionId",
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "status",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "sortBy",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/TransitionExecutions" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions.executions:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "transitionId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostTransitionExecution" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/TransitionExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions.executions:write"] }]
      }
    },
    "/transitions/{transitionId}/executions/{executionId}": {
      get: {
        parameters: [
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/TransitionExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions.executions:read"] }]
      },
      options: {
        parameters: [
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchTransistionExecutionId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/TransitionExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions.executions:write"] }]
      }
    },
    "/transitions/{transitionId}/executions/{executionId}/heartbeats": {
      options: {
        parameters: [
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "transitionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostHeartbeats" } } },
          required: !0
        },
        responses: {
          204: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
            description: "204 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/transitions.executions.heartbeats:write"] }]
      }
    },
    "/users": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Users" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/users:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostUsers" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/users:write"] }]
      }
    },
    "/users/{userId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "userId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/users:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "userId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/users:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "userId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "userId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchUserId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/User" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/users:write"] }]
      }
    },
    "/workflows": {
      get: {
        parameters: [
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Workflows" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows:read"] }]
      },
      options: {
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [{
          in: "header",
          name: "Content-Type",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostWorkflows" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Workflow" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows:write"] }]
      }
    },
    "/workflows/{workflowId}": {
      delete: {
        parameters: [{
          in: "path",
          name: "workflowId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Workflow" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows:read"] }]
      },
      get: {
        parameters: [{
          in: "path",
          name: "workflowId",
          required: !0,
          schema: { type: "string" }
        }],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Workflow" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "workflowId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchWorkflowId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Workflow" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows:write"] }]
      }
    },
    "/workflows/{workflowId}/executions": {
      get: {
        parameters: [
          {
            in: "query",
            name: "fromStartTime",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "toStartTime",
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "nextToken",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "order",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "status",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "maxResults",
            schema: { type: "string" }
          },
          {
            in: "query",
            name: "sortBy",
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/WorkflowExecutions" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:read"] }]
      },
      options: {
        parameters: [{
          in: "path",
          name: "workflowId",
          required: !0,
          schema: { type: "string" }
        }],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      post: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PostWorkflowExecutions" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/WorkflowExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:write"] }]
      }
    },
    "/workflows/{workflowId}/executions/{executionId}": {
      delete: {
        parameters: [
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/WorkflowExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:read"] }]
      },
      get: {
        parameters: [
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/WorkflowExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:read"] }]
      },
      options: {
        parameters: [
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          required: !0
        },
        responses: { 200: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/Empty" } } },
          description: "200 response",
          headers: {
            "Access-Control-Allow-Headers": { schema: { type: "string" } },
            "Access-Control-Allow-Methods": { schema: { type: "string" } },
            "Access-Control-Allow-Origin": { schema: { type: "string" } }
          }
        } }
      },
      patch: {
        parameters: [
          {
            in: "header",
            name: "Content-Type",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "executionId",
            required: !0,
            schema: { type: "string" }
          },
          {
            in: "path",
            name: "workflowId",
            required: !0,
            schema: { type: "string" }
          }
        ],
        requestBody: {
          content: { "application/json": { schema: { $ref: "#/components/schemas/PatchWorkflowExecutionId" } } },
          required: !0
        },
        responses: {
          200: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/WorkflowExecution" } } },
            description: "200 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          400: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "400 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          403: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "403 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          404: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "404 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          415: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "415 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          },
          500: {
            content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
            description: "500 response",
            headers: {
              "Access-Control-Allow-Headers": { schema: { type: "string" } },
              "Access-Control-Allow-Origin": { schema: { type: "string" } }
            }
          }
        },
        security: [{ OAuth2: ["api.lucidtech.ai/workflows.executions:write"] }]
      }
    }
  },
  components: {
    schemas: {
      AppClient: {
        additionalProperties: !1,
        properties: {
          appClientId: {
            pattern: "^las:app-client:[a-z0-9-_]+$",
            type: "string"
          },
          callbackUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            nullable: !0,
            type: "array"
          },
          clientId: { type: "string" },
          clientSecret: { type: "string" },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          defaultLoginUrl: {
            nullable: !0,
            pattern: "^http://localhost.*|^https://.*",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          hasSecret: { type: "boolean" },
          loginUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            nullable: !0,
            type: "array"
          },
          logoutUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            nullable: !0,
            type: "array"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "appClientId",
          "callbackUrls",
          "clientId",
          "createdBy",
          "createdTime",
          "defaultLoginUrl",
          "description",
          "hasSecret",
          "loginUrls",
          "logoutUrls",
          "name",
          "updatedBy",
          "updatedTime"
        ],
        title: "appClient",
        type: "object"
      },
      AppClients: {
        additionalProperties: !1,
        properties: {
          appClients: {
            items: {
              additionalProperties: !1,
              properties: {
                appClientId: {
                  pattern: "^las:app-client:[a-z0-9-_]+$",
                  type: "string"
                },
                callbackUrls: {
                  items: {
                    pattern: "^http://localhost.*|^https://.*",
                    type: "string"
                  },
                  nullable: !0,
                  type: "array"
                },
                clientId: { type: "string" },
                clientSecret: { type: "string" },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                defaultLoginUrl: {
                  nullable: !0,
                  pattern: "^http://localhost.*|^https://.*",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                hasSecret: { type: "boolean" },
                loginUrls: {
                  items: {
                    pattern: "^http://localhost.*|^https://.*",
                    type: "string"
                  },
                  nullable: !0,
                  type: "array"
                },
                logoutUrls: {
                  items: {
                    pattern: "^http://localhost.*|^https://.*",
                    type: "string"
                  },
                  nullable: !0,
                  type: "array"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "appClientId",
                "callbackUrls",
                "clientId",
                "createdBy",
                "createdTime",
                "defaultLoginUrl",
                "description",
                "hasSecret",
                "loginUrls",
                "logoutUrls",
                "name",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: [
          "appClients",
          "nextToken"
        ],
        title: "appClients",
        type: "object"
      },
      Asset: {
        additionalProperties: !1,
        properties: {
          assetId: {
            pattern: "^las:asset:[a-f0-9]{32}$",
            type: "string"
          },
          content: {
            minLength: 1,
            type: "string"
          },
          contentMD5: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "assetId",
          "contentMD5",
          "createdBy",
          "createdTime",
          "description",
          "name",
          "updatedBy",
          "updatedTime"
        ],
        title: "asset",
        type: "object"
      },
      Assets: {
        additionalProperties: !1,
        properties: {
          assets: {
            items: {
              additionalProperties: !1,
              properties: {
                assetId: {
                  pattern: "^las:asset:[a-f0-9]{32}$",
                  type: "string"
                },
                content: {
                  minLength: 1,
                  type: "string"
                },
                contentMD5: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "assetId",
                "contentMD5",
                "createdBy",
                "createdTime",
                "description",
                "name",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: [
          "assets",
          "nextToken"
        ],
        title: "assets",
        type: "object"
      },
      DataBundle: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          dataBundleId: {
            pattern: "^las:model-data-bundle:[a-f0-9]{32}$",
            type: "string"
          },
          datasets: {
            items: {
              additionalProperties: !1,
              properties: {
                containsPersonallyIdentifiableInformation: { type: "boolean" },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                datasetId: {
                  pattern: "^las:dataset:[a-f0-9]{32}$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                groundTruthSummary: { type: "object" },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                numberOfDocuments: {
                  minimum: 0,
                  type: "integer"
                },
                retentionInDays: {
                  maximum: 1825,
                  minimum: 0,
                  type: "integer"
                },
                storageLocation: {
                  enum: ["EU"],
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                version: {
                  minimum: 0,
                  type: "integer"
                }
              },
              required: [
                "containsPersonallyIdentifiableInformation",
                "datasetId",
                "description",
                "numberOfDocuments",
                "retentionInDays",
                "storageLocation",
                "version"
              ],
              type: "object"
            },
            type: "array"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          modelId: {
            pattern: "^las:model:[a-z0-9-_]+$",
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          },
          status: {
            enum: [
              "running",
              "succeeded",
              "failed"
            ],
            type: "string"
          },
          summary: {
            nullable: !0,
            type: "object"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "dataBundleId",
          "datasets",
          "description",
          "modelId",
          "name",
          "status",
          "summary",
          "updatedBy",
          "updatedTime"
        ],
        title: "dataBundle",
        type: "object"
      },
      DataBundles: {
        additionalProperties: !1,
        properties: {
          dataBundles: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                dataBundleId: {
                  pattern: "^las:model-data-bundle:[a-f0-9]{32}$",
                  type: "string"
                },
                datasets: {
                  items: {
                    additionalProperties: !1,
                    properties: {
                      containsPersonallyIdentifiableInformation: { type: "boolean" },
                      createdBy: {
                        maxLength: 4096,
                        nullable: !0,
                        type: "string"
                      },
                      createdTime: {
                        nullable: !0,
                        pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                        type: "string"
                      },
                      datasetId: {
                        pattern: "^las:dataset:[a-f0-9]{32}$",
                        type: "string"
                      },
                      description: {
                        maxLength: 4096,
                        nullable: !0,
                        type: "string"
                      },
                      groundTruthSummary: { type: "object" },
                      metadata: {
                        nullable: !0,
                        type: "object"
                      },
                      name: {
                        maxLength: 4096,
                        nullable: !0,
                        type: "string"
                      },
                      numberOfDocuments: {
                        minimum: 0,
                        type: "integer"
                      },
                      retentionInDays: {
                        maximum: 1825,
                        minimum: 0,
                        type: "integer"
                      },
                      storageLocation: {
                        enum: ["EU"],
                        type: "string"
                      },
                      updatedBy: {
                        maxLength: 4096,
                        nullable: !0,
                        type: "string"
                      },
                      updatedTime: {
                        nullable: !0,
                        pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                        type: "string"
                      },
                      version: {
                        minimum: 0,
                        type: "integer"
                      }
                    },
                    required: [
                      "containsPersonallyIdentifiableInformation",
                      "datasetId",
                      "description",
                      "numberOfDocuments",
                      "retentionInDays",
                      "storageLocation",
                      "version"
                    ],
                    type: "object"
                  },
                  type: "array"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                modelId: {
                  pattern: "^las:model:[a-z0-9-_]+$",
                  type: "string"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                retentionInDays: {
                  minimum: 1,
                  type: "integer"
                },
                status: {
                  enum: [
                    "running",
                    "succeeded",
                    "failed"
                  ],
                  type: "string"
                },
                summary: {
                  nullable: !0,
                  type: "object"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "dataBundleId",
                "datasets",
                "description",
                "modelId",
                "name",
                "status",
                "summary",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          status: {
            items: {
              enum: [
                "running",
                "succeeded",
                "failed"
              ],
              type: "string"
            },
            type: "array"
          }
        },
        required: [
          "dataBundles",
          "nextToken"
        ],
        title: "dataBundles",
        type: "object"
      },
      Dataset: {
        additionalProperties: !1,
        properties: {
          containsPersonallyIdentifiableInformation: { type: "boolean" },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          datasetId: {
            pattern: "^las:dataset:[a-f0-9]{32}$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          groundTruthSummary: { type: "object" },
          metadata: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          numberOfDocuments: {
            minimum: 0,
            type: "integer"
          },
          retentionInDays: {
            maximum: 1825,
            minimum: 0,
            type: "integer"
          },
          storageLocation: {
            enum: ["EU"],
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          version: {
            minimum: 0,
            type: "integer"
          }
        },
        required: [
          "containsPersonallyIdentifiableInformation",
          "createdBy",
          "createdTime",
          "datasetId",
          "description",
          "groundTruthSummary",
          "metadata",
          "numberOfDocuments",
          "retentionInDays",
          "storageLocation",
          "updatedBy",
          "updatedTime",
          "version"
        ],
        title: "dataset",
        type: "object"
      },
      Datasets: {
        additionalProperties: !1,
        properties: {
          datasets: {
            items: {
              additionalProperties: !1,
              properties: {
                containsPersonallyIdentifiableInformation: { type: "boolean" },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                datasetId: {
                  pattern: "^las:dataset:[a-f0-9]{32}$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                groundTruthSummary: { type: "object" },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                numberOfDocuments: {
                  minimum: 0,
                  type: "integer"
                },
                retentionInDays: {
                  maximum: 1825,
                  minimum: 0,
                  type: "integer"
                },
                storageLocation: {
                  enum: ["EU"],
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                version: {
                  minimum: 0,
                  type: "integer"
                }
              },
              required: [
                "containsPersonallyIdentifiableInformation",
                "createdBy",
                "createdTime",
                "datasetId",
                "description",
                "groundTruthSummary",
                "metadata",
                "numberOfDocuments",
                "retentionInDays",
                "storageLocation",
                "updatedBy",
                "updatedTime",
                "version"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: [
          "datasets",
          "nextToken"
        ],
        title: "datasets",
        type: "object"
      },
      DeploymentEnvironment: {
        additionalProperties: !1,
        properties: {
          deploymentEnvironmentId: {
            pattern: "^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          modelDeploymentUnits: {
            minimum: 0,
            type: "integer"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          organizationId: {
            nullable: !0,
            pattern: "^las:organization:[a-z0-9-_]+$",
            type: "string"
          },
          status: {
            enum: [
              "available",
              "unavailable"
            ],
            type: "string"
          }
        },
        required: [
          "deploymentEnvironmentId",
          "description",
          "modelDeploymentUnits",
          "name",
          "organizationId",
          "status"
        ],
        title: "deploymentEnvironment",
        type: "object"
      },
      DeploymentEnvironments: {
        additionalProperties: !1,
        properties: {
          deploymentEnvironments: {
            items: {
              additionalProperties: !1,
              properties: {
                deploymentEnvironmentId: {
                  pattern: "^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                modelDeploymentUnits: {
                  minimum: 0,
                  type: "integer"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                organizationId: {
                  nullable: !0,
                  pattern: "^las:organization:[a-z0-9-_]+$",
                  type: "string"
                },
                status: {
                  enum: [
                    "available",
                    "unavailable"
                  ],
                  type: "string"
                }
              },
              required: [
                "deploymentEnvironmentId",
                "description",
                "modelDeploymentUnits",
                "name",
                "organizationId",
                "status"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: [
          "deploymentEnvironments",
          "nextToken"
        ],
        title: "deploymentEnvironments",
        type: "object"
      },
      Document: {
        additionalProperties: !1,
        properties: {
          consentId: {
            pattern: "^las:consent:[a-f0-9]{32}$",
            type: "string"
          },
          content: {
            minLength: 1,
            type: "string"
          },
          contentMD5: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          contentType: {
            enum: [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/tiff"
            ],
            type: "string"
          },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          datasetId: {
            pattern: "^las:dataset:[a-f0-9]{32}$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          documentId: {
            pattern: "^las:document:[a-f0-9]{32}$",
            type: "string"
          },
          groundTruth: {
            items: {
              additionalProperties: !1,
              properties: {
                label: {
                  maxLength: 36,
                  minLength: 1,
                  pattern: "^[0-9A-Za-z-_]+$",
                  type: "string"
                },
                value: { anyOf: [
                  {
                    maxLength: 512,
                    minLength: 0,
                    nullable: !0,
                    type: "string"
                  },
                  {
                    nullable: !0,
                    type: "boolean"
                  },
                  {
                    nullable: !0,
                    type: "number"
                  },
                  {
                    $ref: "#/components/schemas/groundTruthList",
                    nullable: !0
                  }
                ] }
              },
              required: [
                "label",
                "value"
              ],
              type: "object"
            },
            type: "array"
          },
          metadata: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "contentMD5",
          "contentType",
          "createdBy",
          "createdTime",
          "description",
          "documentId",
          "metadata",
          "name",
          "retentionInDays",
          "updatedBy",
          "updatedTime"
        ],
        title: "document",
        type: "object"
      },
      Documents: {
        additionalProperties: !1,
        properties: {
          consentId: {
            items: {
              pattern: "^las:consent:[a-f0-9]{32}$",
              type: "string"
            },
            type: "array"
          },
          datasetId: {
            items: {
              pattern: "^las:dataset:[a-f0-9]{32}$",
              type: "string"
            },
            type: "array"
          },
          documents: {
            items: {
              additionalProperties: !1,
              properties: {
                consentId: {
                  pattern: "^las:consent:[a-f0-9]{32}$",
                  type: "string"
                },
                content: {
                  minLength: 1,
                  type: "string"
                },
                contentMD5: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                contentType: {
                  enum: [
                    "application/pdf",
                    "image/jpeg",
                    "image/png",
                    "image/tiff"
                  ],
                  type: "string"
                },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                datasetId: {
                  pattern: "^las:dataset:[a-f0-9]{32}$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                documentId: {
                  pattern: "^las:document:[a-f0-9]{32}$",
                  type: "string"
                },
                groundTruth: {
                  items: {
                    additionalProperties: !1,
                    properties: {
                      label: {
                        maxLength: 36,
                        minLength: 1,
                        pattern: "^[0-9A-Za-z-_]+$",
                        type: "string"
                      },
                      value: { anyOf: [
                        {
                          maxLength: 512,
                          minLength: 0,
                          nullable: !0,
                          type: "string"
                        },
                        {
                          nullable: !0,
                          type: "boolean"
                        },
                        {
                          nullable: !0,
                          type: "number"
                        },
                        {
                          $ref: "#/components/schemas/groundTruthList",
                          nullable: !0
                        }
                      ] }
                    },
                    required: [
                      "label",
                      "value"
                    ],
                    type: "object"
                  },
                  type: "array"
                },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                retentionInDays: {
                  minimum: 1,
                  type: "integer"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "contentMD5",
                "contentType",
                "createdBy",
                "createdTime",
                "description",
                "documentId",
                "metadata",
                "name",
                "retentionInDays",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          order: {
            enum: [
              "ascending",
              "descending"
            ],
            type: "string"
          },
          sortBy: {
            enum: ["createdTime"],
            type: "string"
          }
        },
        required: [
          "documents",
          "nextToken"
        ],
        title: "documents",
        type: "object"
      },
      Empty: {
        title: "Empty Schema",
        type: "object"
      },
      Error: {
        properties: { message: { type: "string" } },
        title: "Error Schema",
        type: "object"
      },
      Log: {
        additionalProperties: !1,
        properties: {
          events: {
            items: { type: "object" },
            type: "array"
          },
          logId: {
            pattern: "^las:log:[a-f0-9]{32}$",
            type: "string"
          },
          startTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          transitionExecutionId: {
            nullable: !0,
            pattern: "^las:transition-execution:[a-f0-9]{32}$",
            type: "string"
          },
          transitionId: {
            anyOf: [
              {
                pattern: "^las:transition:[a-f0-9]{32}$",
                type: "string"
              },
              {
                pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
                type: "string"
              }
            ],
            nullable: !0
          },
          workflowExecutionId: {
            nullable: !0,
            pattern: "^las:workflow-execution:[a-f0-9]{32}$",
            type: "string"
          },
          workflowId: {
            nullable: !0,
            pattern: "^las:workflow:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "logId",
          "startTime",
          "transitionExecutionId",
          "transitionId",
          "workflowExecutionId",
          "workflowId"
        ],
        title: "log",
        type: "object"
      },
      Logs: {
        additionalProperties: !1,
        properties: {
          logs: {
            items: {
              additionalProperties: !1,
              properties: {
                events: {
                  items: { type: "object" },
                  type: "array"
                },
                logId: {
                  pattern: "^las:log:[a-f0-9]{32}$",
                  type: "string"
                },
                startTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                transitionExecutionId: {
                  nullable: !0,
                  pattern: "^las:transition-execution:[a-f0-9]{32}$",
                  type: "string"
                },
                transitionId: {
                  anyOf: [
                    {
                      pattern: "^las:transition:[a-f0-9]{32}$",
                      type: "string"
                    },
                    {
                      pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
                      type: "string"
                    }
                  ],
                  nullable: !0
                },
                workflowExecutionId: {
                  nullable: !0,
                  pattern: "^las:workflow-execution:[a-f0-9]{32}$",
                  type: "string"
                },
                workflowId: {
                  nullable: !0,
                  pattern: "^las:workflow:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: [
                "logId",
                "startTime",
                "transitionExecutionId",
                "transitionId",
                "workflowExecutionId",
                "workflowId"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          order: {
            enum: [
              "ascending",
              "descending"
            ],
            type: "string"
          },
          transitionExecutionId: {
            pattern: "^las:transition-execution:[a-f0-9]{32}$",
            type: "string"
          },
          transitionId: { anyOf: [
            {
              pattern: "^las:transition:[a-f0-9]{32}$",
              type: "string"
            },
            {
              pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
              type: "string"
            }
          ] },
          workflowExecutionId: {
            pattern: "^las:workflow-execution:[a-f0-9]{32}$",
            type: "string"
          },
          workflowId: {
            pattern: "^las:workflow:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "logs",
          "nextToken"
        ],
        title: "logs",
        type: "object"
      },
      Model: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          fieldConfig: {
            additionalProperties: { oneOf: [
              {
                properties: {
                  description: {
                    maxLength: 4096,
                    nullable: !0,
                    type: "string"
                  },
                  enum: {
                    items: {
                      maxLength: 512,
                      minLength: 1,
                      pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                      type: "string"
                    },
                    maxItems: 500,
                    minItems: 1,
                    type: "array",
                    uniqueItems: !0
                  },
                  maxLength: {
                    maximum: 512,
                    minimum: 1,
                    type: "integer"
                  },
                  type: {
                    enum: [
                      "amount",
                      "date",
                      "digits",
                      "enum",
                      "numeric",
                      "string"
                    ],
                    type: "string"
                  }
                },
                required: ["type"],
                type: "object"
              },
              {
                properties: {
                  fields: {
                    additionalProperties: {
                      properties: {
                        description: {
                          maxLength: 4096,
                          nullable: !0,
                          type: "string"
                        },
                        enum: {
                          items: {
                            maxLength: 512,
                            minLength: 1,
                            pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                            type: "string"
                          },
                          maxItems: 500,
                          minItems: 1,
                          type: "array",
                          uniqueItems: !0
                        },
                        maxLength: {
                          maximum: 512,
                          minimum: 1,
                          type: "integer"
                        },
                        type: {
                          enum: [
                            "amount",
                            "date",
                            "digits",
                            "enum",
                            "numeric",
                            "string"
                          ],
                          type: "string"
                        }
                      },
                      required: ["type"],
                      type: "object"
                    },
                    type: "object"
                  },
                  type: {
                    enum: ["lines"],
                    type: "string"
                  }
                },
                required: [
                  "fields",
                  "type"
                ],
                type: "object"
              }
            ] },
            nullable: !0,
            type: "object"
          },
          height: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          },
          metadata: {
            nullable: !0,
            type: "object"
          },
          modelId: {
            pattern: "^las:model:[a-z0-9-_]+$",
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          numberOfDataBundles: {
            minimum: 0,
            type: "integer"
          },
          numberOfRunningTrainings: {
            minimum: 0,
            type: "integer"
          },
          organizationId: {
            pattern: "^las:organization:[a-z0-9-_]+$",
            type: "string"
          },
          postprocessConfig: { oneOf: [
            {
              additionalProperties: !1,
              properties: { strategy: {
                enum: ["BEST_FIRST"],
                type: "string"
              } },
              required: ["strategy"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: {
                parameters: {
                  properties: {
                    collapse: { type: "boolean" },
                    n: {
                      maximum: 3,
                      minimum: 1,
                      type: "integer"
                    }
                  },
                  required: ["n"],
                  type: "object"
                },
                strategy: {
                  enum: ["BEST_N_PAGES"],
                  type: "string"
                }
              },
              required: [
                "parameters",
                "strategy"
              ],
              type: "object"
            }
          ] },
          preprocessConfig: {
            additionalProperties: !1,
            properties: {
              autoRotate: { type: "boolean" },
              imageQuality: {
                enum: [
                  "LOW",
                  "HIGH"
                ],
                type: "string"
              },
              maxPages: {
                maximum: 3,
                minimum: 1,
                type: "integer"
              }
            },
            required: [
              "autoRotate",
              "imageQuality",
              "maxPages"
            ],
            type: "object"
          },
          status: {
            enum: [
              "active",
              "inactive"
            ],
            type: "string"
          },
          trainingId: {
            nullable: !0,
            pattern: "^las:model-training:[a-f0-9]{32}$",
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          width: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "description",
          "fieldConfig",
          "height",
          "metadata",
          "modelId",
          "name",
          "numberOfDataBundles",
          "numberOfRunningTrainings",
          "organizationId",
          "preprocessConfig",
          "status",
          "trainingId",
          "updatedBy",
          "updatedTime",
          "width"
        ],
        title: "model",
        type: "object"
      },
      Models: {
        additionalProperties: !1,
        properties: {
          models: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                fieldConfig: {
                  additionalProperties: { oneOf: [
                    {
                      properties: {
                        description: {
                          maxLength: 4096,
                          nullable: !0,
                          type: "string"
                        },
                        enum: {
                          items: {
                            maxLength: 512,
                            minLength: 1,
                            pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                            type: "string"
                          },
                          maxItems: 500,
                          minItems: 1,
                          type: "array",
                          uniqueItems: !0
                        },
                        maxLength: {
                          maximum: 512,
                          minimum: 1,
                          type: "integer"
                        },
                        type: {
                          enum: [
                            "amount",
                            "date",
                            "digits",
                            "enum",
                            "numeric",
                            "string"
                          ],
                          type: "string"
                        }
                      },
                      required: ["type"],
                      type: "object"
                    },
                    {
                      properties: {
                        fields: {
                          additionalProperties: {
                            properties: {
                              description: {
                                maxLength: 4096,
                                nullable: !0,
                                type: "string"
                              },
                              enum: {
                                items: {
                                  maxLength: 512,
                                  minLength: 1,
                                  pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                                  type: "string"
                                },
                                maxItems: 500,
                                minItems: 1,
                                type: "array",
                                uniqueItems: !0
                              },
                              maxLength: {
                                maximum: 512,
                                minimum: 1,
                                type: "integer"
                              },
                              type: {
                                enum: [
                                  "amount",
                                  "date",
                                  "digits",
                                  "enum",
                                  "numeric",
                                  "string"
                                ],
                                type: "string"
                              }
                            },
                            required: ["type"],
                            type: "object"
                          },
                          type: "object"
                        },
                        type: {
                          enum: ["lines"],
                          type: "string"
                        }
                      },
                      required: [
                        "fields",
                        "type"
                      ],
                      type: "object"
                    }
                  ] },
                  nullable: !0,
                  type: "object"
                },
                height: {
                  maximum: 1921,
                  minimum: 97,
                  type: "integer"
                },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                modelId: {
                  pattern: "^las:model:[a-z0-9-_]+$",
                  type: "string"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                numberOfDataBundles: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfRunningTrainings: {
                  minimum: 0,
                  type: "integer"
                },
                organizationId: {
                  pattern: "^las:organization:[a-z0-9-_]+$",
                  type: "string"
                },
                postprocessConfig: { oneOf: [
                  {
                    additionalProperties: !1,
                    properties: { strategy: {
                      enum: ["BEST_FIRST"],
                      type: "string"
                    } },
                    required: ["strategy"],
                    type: "object"
                  },
                  {
                    additionalProperties: !1,
                    properties: {
                      parameters: {
                        properties: {
                          collapse: { type: "boolean" },
                          n: {
                            maximum: 3,
                            minimum: 1,
                            type: "integer"
                          }
                        },
                        required: ["n"],
                        type: "object"
                      },
                      strategy: {
                        enum: ["BEST_N_PAGES"],
                        type: "string"
                      }
                    },
                    required: [
                      "parameters",
                      "strategy"
                    ],
                    type: "object"
                  }
                ] },
                preprocessConfig: {
                  additionalProperties: !1,
                  properties: {
                    autoRotate: { type: "boolean" },
                    imageQuality: {
                      enum: [
                        "LOW",
                        "HIGH"
                      ],
                      type: "string"
                    },
                    maxPages: {
                      maximum: 3,
                      minimum: 1,
                      type: "integer"
                    }
                  },
                  required: [
                    "autoRotate",
                    "imageQuality",
                    "maxPages"
                  ],
                  type: "object"
                },
                status: {
                  enum: [
                    "active",
                    "inactive"
                  ],
                  type: "string"
                },
                trainingId: {
                  nullable: !0,
                  pattern: "^las:model-training:[a-f0-9]{32}$",
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                width: {
                  maximum: 1921,
                  minimum: 97,
                  type: "integer"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "description",
                "fieldConfig",
                "height",
                "metadata",
                "modelId",
                "name",
                "numberOfDataBundles",
                "numberOfRunningTrainings",
                "organizationId",
                "preprocessConfig",
                "status",
                "trainingId",
                "updatedBy",
                "updatedTime",
                "width"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: [
          "models",
          "nextToken"
        ],
        title: "models",
        type: "object"
      },
      Organization: {
        additionalProperties: !1,
        properties: {
          clientId: {
            nullable: !0,
            pattern: "^[0-9a-z]+$",
            type: "string"
          },
          deploymentsAllowed: { type: "object" },
          deploymentsCreated: { type: "object" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          documentRetentionInDays: {
            minimum: 1,
            type: "integer"
          },
          monthlyNumberOfActiveModelsUsed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfDataBundlesAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfDataBundlesCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfDocumentsAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfDocumentsCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfFieldPredictionsUsed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfGpuHoursUsed: {
            minimum: 0,
            type: "number"
          },
          monthlyNumberOfModelDeploymentUnitsUsed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfPredictionsAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfPredictionsCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfTrainingsAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfTrainingsCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfTransitionExecutionsAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfTransitionExecutionsCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfWorkflowExecutionsAllowed: {
            minimum: 0,
            type: "integer"
          },
          monthlyNumberOfWorkflowExecutionsCreated: {
            minimum: 0,
            type: "integer"
          },
          monthlyUsageSummary: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          numberOfAppClientsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfAppClientsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfAssetsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfAssetsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfDatasetsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfDatasetsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfModelsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfModelsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfSecretsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfSecretsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfTransitionsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfTransitionsCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfUsersAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfUsersCreated: {
            minimum: 0,
            type: "integer"
          },
          numberOfWorkflowsAllowed: {
            minimum: 0,
            type: "integer"
          },
          numberOfWorkflowsCreated: {
            minimum: 0,
            type: "integer"
          },
          organizationId: {
            pattern: "^las:organization:[a-z0-9-_]+$",
            type: "string"
          },
          paymentMethodId: {
            nullable: !0,
            pattern: "^las:payment-method:[a-f0-9]{32}$",
            type: "string"
          },
          planId: {
            nullable: !0,
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "description",
          "documentRetentionInDays",
          "monthlyNumberOfActiveModelsUsed",
          "monthlyNumberOfDataBundlesAllowed",
          "monthlyNumberOfDataBundlesCreated",
          "monthlyNumberOfDocumentsAllowed",
          "monthlyNumberOfDocumentsCreated",
          "monthlyNumberOfFieldPredictionsUsed",
          "monthlyNumberOfGpuHoursUsed",
          "monthlyNumberOfPredictionsAllowed",
          "monthlyNumberOfPredictionsCreated",
          "monthlyNumberOfTrainingsAllowed",
          "monthlyNumberOfTrainingsCreated",
          "monthlyNumberOfTransitionExecutionsAllowed",
          "monthlyNumberOfTransitionExecutionsCreated",
          "monthlyNumberOfWorkflowExecutionsAllowed",
          "monthlyNumberOfWorkflowExecutionsCreated",
          "monthlyUsageSummary",
          "name",
          "numberOfAppClientsAllowed",
          "numberOfAppClientsCreated",
          "numberOfAssetsAllowed",
          "numberOfAssetsCreated",
          "numberOfModelsAllowed",
          "numberOfModelsCreated",
          "numberOfSecretsAllowed",
          "numberOfSecretsCreated",
          "numberOfTransitionsAllowed",
          "numberOfTransitionsCreated",
          "numberOfUsersAllowed",
          "numberOfUsersCreated",
          "numberOfWorkflowsAllowed",
          "numberOfWorkflowsCreated",
          "organizationId",
          "paymentMethodId",
          "planId",
          "updatedBy",
          "updatedTime"
        ],
        title: "organization",
        type: "object"
      },
      Organizations: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          organizations: {
            items: {
              additionalProperties: !1,
              properties: {
                clientId: {
                  nullable: !0,
                  pattern: "^[0-9a-z]+$",
                  type: "string"
                },
                deploymentsAllowed: { type: "object" },
                deploymentsCreated: { type: "object" },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                documentRetentionInDays: {
                  minimum: 1,
                  type: "integer"
                },
                monthlyNumberOfActiveModelsUsed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfDataBundlesAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfDataBundlesCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfDocumentsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfDocumentsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfFieldPredictionsUsed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfGpuHoursUsed: {
                  minimum: 0,
                  type: "number"
                },
                monthlyNumberOfModelDeploymentUnitsUsed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfPredictionsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfPredictionsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfTrainingsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfTrainingsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfTransitionExecutionsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfTransitionExecutionsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfWorkflowExecutionsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyNumberOfWorkflowExecutionsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                monthlyUsageSummary: { type: "object" },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                numberOfAppClientsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfAppClientsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfAssetsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfAssetsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfDatasetsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfDatasetsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfModelsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfModelsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfSecretsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfSecretsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfTransitionsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfTransitionsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfUsersAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfUsersCreated: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfWorkflowsAllowed: {
                  minimum: 0,
                  type: "integer"
                },
                numberOfWorkflowsCreated: {
                  minimum: 0,
                  type: "integer"
                },
                organizationId: {
                  pattern: "^las:organization:[a-z0-9-_]+$",
                  type: "string"
                },
                paymentMethodId: {
                  nullable: !0,
                  pattern: "^las:payment-method:[a-f0-9]{32}$",
                  type: "string"
                },
                planId: {
                  nullable: !0,
                  pattern: "^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "description",
                "documentRetentionInDays",
                "monthlyNumberOfActiveModelsUsed",
                "monthlyNumberOfDataBundlesAllowed",
                "monthlyNumberOfDataBundlesCreated",
                "monthlyNumberOfDocumentsAllowed",
                "monthlyNumberOfDocumentsCreated",
                "monthlyNumberOfFieldPredictionsUsed",
                "monthlyNumberOfGpuHoursUsed",
                "monthlyNumberOfPredictionsAllowed",
                "monthlyNumberOfPredictionsCreated",
                "monthlyNumberOfTrainingsAllowed",
                "monthlyNumberOfTrainingsCreated",
                "monthlyNumberOfTransitionExecutionsAllowed",
                "monthlyNumberOfTransitionExecutionsCreated",
                "monthlyNumberOfWorkflowExecutionsAllowed",
                "monthlyNumberOfWorkflowExecutionsCreated",
                "monthlyUsageSummary",
                "name",
                "numberOfAppClientsAllowed",
                "numberOfAppClientsCreated",
                "numberOfAssetsAllowed",
                "numberOfAssetsCreated",
                "numberOfModelsAllowed",
                "numberOfModelsCreated",
                "numberOfSecretsAllowed",
                "numberOfSecretsCreated",
                "numberOfTransitionsAllowed",
                "numberOfTransitionsCreated",
                "numberOfUsersAllowed",
                "numberOfUsersCreated",
                "numberOfWorkflowsAllowed",
                "numberOfWorkflowsCreated",
                "organizationId",
                "paymentMethodId",
                "planId",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "organizations"
        ],
        title: "organizations",
        type: "object"
      },
      PatchAppClientId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          defaultLoginUrl: {
            pattern: "^http://localhost.*|^https://.*",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          loginUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            type: "array"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /appClients/{appClientId}",
        type: "object"
      },
      PatchAssetId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          content: {
            minLength: 1,
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /assets/assetId",
        type: "object"
      },
      PatchDataBundleId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /models/{modelId}/dataBundles/{dataBundleId}",
        type: "object"
      },
      PatchDatasetId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          containsPersonallyIdentifiableInformation: { type: "boolean" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          }
        },
        title: "PATCH /datasets/{datasetId}",
        type: "object"
      },
      PatchDocumentId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          datasetId: {
            pattern: "^las:dataset:[a-f0-9]{32}$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          groundTruth: {
            items: {
              additionalProperties: !1,
              properties: {
                label: {
                  maxLength: 36,
                  minLength: 1,
                  pattern: "^[0-9A-Za-z-_]+$",
                  type: "string"
                },
                value: { anyOf: [
                  {
                    maxLength: 512,
                    minLength: 0,
                    nullable: !0,
                    type: "string"
                  },
                  {
                    nullable: !0,
                    type: "boolean"
                  },
                  {
                    nullable: !0,
                    type: "number"
                  },
                  {
                    $ref: "#/components/schemas/groundTruthList",
                    nullable: !0
                  }
                ] }
              },
              required: [
                "label",
                "value"
              ],
              type: "object"
            },
            nullable: !0,
            type: "array"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          }
        },
        title: "PATCH /documents/{documentId}",
        type: "object"
      },
      PatchModelId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          fieldConfig: {
            additionalProperties: { oneOf: [
              {
                properties: {
                  description: {
                    maxLength: 4096,
                    nullable: !0,
                    type: "string"
                  },
                  enum: {
                    items: {
                      maxLength: 512,
                      minLength: 1,
                      pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                      type: "string"
                    },
                    maxItems: 500,
                    minItems: 1,
                    type: "array",
                    uniqueItems: !0
                  },
                  maxLength: {
                    maximum: 512,
                    minimum: 1,
                    type: "integer"
                  },
                  type: {
                    enum: [
                      "amount",
                      "date",
                      "digits",
                      "enum",
                      "numeric",
                      "string"
                    ],
                    type: "string"
                  }
                },
                required: ["type"],
                type: "object"
              },
              {
                properties: {
                  fields: {
                    additionalProperties: {
                      properties: {
                        description: {
                          maxLength: 4096,
                          nullable: !0,
                          type: "string"
                        },
                        enum: {
                          items: {
                            maxLength: 512,
                            minLength: 1,
                            pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                            type: "string"
                          },
                          maxItems: 500,
                          minItems: 1,
                          type: "array",
                          uniqueItems: !0
                        },
                        maxLength: {
                          maximum: 512,
                          minimum: 1,
                          type: "integer"
                        },
                        type: {
                          enum: [
                            "amount",
                            "date",
                            "digits",
                            "enum",
                            "numeric",
                            "string"
                          ],
                          type: "string"
                        }
                      },
                      required: ["type"],
                      type: "object"
                    },
                    type: "object"
                  },
                  type: {
                    enum: ["lines"],
                    type: "string"
                  }
                },
                required: [
                  "fields",
                  "type"
                ],
                type: "object"
              }
            ] },
            type: "object"
          },
          height: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          postprocessConfig: { oneOf: [
            {
              additionalProperties: !1,
              properties: { strategy: {
                enum: ["BEST_FIRST"],
                type: "string"
              } },
              required: ["strategy"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: {
                parameters: {
                  properties: {
                    collapse: { type: "boolean" },
                    n: {
                      maximum: 3,
                      minimum: 1,
                      type: "integer"
                    }
                  },
                  required: ["n"],
                  type: "object"
                },
                strategy: {
                  enum: ["BEST_N_PAGES"],
                  type: "string"
                }
              },
              required: [
                "parameters",
                "strategy"
              ],
              type: "object"
            }
          ] },
          preprocessConfig: {
            additionalProperties: !1,
            properties: {
              autoRotate: { type: "boolean" },
              imageQuality: {
                enum: [
                  "LOW",
                  "HIGH"
                ],
                type: "string"
              },
              maxPages: {
                maximum: 3,
                minimum: 1,
                type: "integer"
              }
            },
            required: [
              "autoRotate",
              "imageQuality",
              "maxPages"
            ],
            type: "object"
          },
          trainingId: {
            nullable: !0,
            pattern: "^las:model-training:[a-f0-9]{32}$",
            type: "string"
          },
          width: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          }
        },
        title: "PATCH /models/modelId",
        type: "object"
      },
      PatchOrganizationId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          paymentMethodId: {
            pattern: "^las:payment-method:[a-f0-9]{32}$",
            type: "string"
          },
          planId: {
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          }
        },
        title: "PATCH /organizations/organizationId",
        type: "object"
      },
      PatchPaymentMethodId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          stripeSetupIntentSecret: {
            minLength: 1,
            type: "string"
          }
        },
        title: "PATCH /paymentMethods/{paymentMethodId}",
        type: "object"
      },
      PatchSecretId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          data: { type: "object" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /secrets/{secretId}",
        type: "object"
      },
      PatchTrainingId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          deploymentEnvironmentId: {
            nullable: !0,
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          status: {
            enum: ["cancelled"],
            type: "string"
          }
        },
        title: "PATCH /models/{modelId}/trainings/{trainingId}",
        type: "object"
      },
      PatchTransistionExecutionId: {
        additionalProperties: !1,
        anyOf: [
          {
            properties: { status: {
              enum: ["succeeded"],
              type: "string"
            } },
            type: "object"
          },
          {
            properties: { status: {
              enum: [
                "failed",
                "rejected",
                "retry"
              ],
              type: "string"
            } },
            type: "object"
          }
        ],
        properties: {
          error: {
            additionalProperties: !1,
            properties: { message: {
              maxLength: 4096,
              type: "string"
            } },
            required: ["message"],
            type: "object"
          },
          output: { type: "object" },
          startTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          status: { type: "string" }
        },
        title: "PATCH transitions/{transitionId}/executions/{executionId}",
        type: "object"
      },
      PatchTransitionId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          assets: {
            additionalProperties: {
              pattern: "^las:asset:[a-f0-9]{32}$",
              type: "string"
            },
            properties: { jsRemoteComponent: {
              pattern: "^las:asset:[a-f0-9]{32}$",
              type: "string"
            } },
            type: "object"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          environment: {
            additionalProperties: { type: "string" },
            type: "object"
          },
          environmentSecrets: {
            items: {
              pattern: "^las:secret:[a-f0-9]{32}$",
              type: "string"
            },
            type: "array"
          },
          inputJsonSchema: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          outputJsonSchema: { type: "object" },
          parameters: { anyOf: [
            {
              additionalProperties: !1,
              properties: {
                cpu: {
                  enum: [
                    256,
                    512,
                    1024
                  ],
                  type: "integer"
                },
                environment: {
                  additionalProperties: { type: "string" },
                  nullable: !0,
                  type: "object"
                },
                environmentSecrets: {
                  items: {
                    pattern: "^las:secret:[a-f0-9]{32}$",
                    type: "string"
                  },
                  nullable: !0,
                  type: "array"
                },
                imageUrl: { type: "string" },
                memory: {
                  enum: [
                    512,
                    1024,
                    2048,
                    4096,
                    8192
                  ],
                  type: "integer"
                },
                secretId: {
                  nullable: !0,
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: { assets: {
                additionalProperties: {
                  pattern: "^las:asset:[a-f0-9]{32}$",
                  type: "string"
                },
                properties: { jsRemoteComponent: {
                  pattern: "^las:asset:[a-f0-9]{32}$",
                  type: "string"
                } },
                type: "object"
              } },
              type: "object"
            }
          ] }
        },
        title: "PATCH /transitions/{transitionId}",
        type: "object"
      },
      PatchUserId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          avatar: {
            maxLength: 131072,
            nullable: !0,
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /users/{userId}",
        type: "object"
      },
      PatchWorkflowExecutionId: {
        additionalProperties: !1,
        properties: { nextTransitionId: { anyOf: [
          {
            pattern: "^las:transition:[a-f0-9]{32}$",
            type: "string"
          },
          {
            pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
            type: "string"
          }
        ] } },
        required: ["nextTransitionId"],
        title: "PATCH workflows/{workflowId}/executions/{executionId}",
        type: "object"
      },
      PatchWorkflowId: {
        additionalProperties: !1,
        minProperties: 1,
        properties: {
          completedConfig: {
            additionalProperties: !1,
            properties: {
              environment: {
                additionalProperties: { type: "string" },
                type: "object"
              },
              environmentSecrets: {
                items: {
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                },
                type: "array"
              },
              imageUrl: { type: "string" },
              secretId: {
                pattern: "^las:secret:[a-f0-9]{32}$",
                type: "string"
              }
            },
            required: ["imageUrl"],
            type: "object"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          errorConfig: {
            additionalProperties: !1,
            properties: {
              email: {
                pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                type: "string"
              },
              manualRetry: { type: "boolean" }
            },
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "PATCH /workflows/{workflowId}",
        type: "object"
      },
      PaymentMethod: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          details: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          paymentMethodId: {
            pattern: "^las:payment-method:[a-f0-9]{32}$",
            type: "string"
          },
          stripePublishableKey: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          stripeSetupIntentSecret: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "description",
          "details",
          "name",
          "paymentMethodId",
          "updatedBy",
          "updatedTime"
        ],
        title: "payment_method",
        type: "object"
      },
      PaymentMethods: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          paymentMethods: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                details: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                paymentMethodId: {
                  pattern: "^las:payment-method:[a-f0-9]{32}$",
                  type: "string"
                },
                stripePublishableKey: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                stripeSetupIntentSecret: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "description",
                "details",
                "name",
                "paymentMethodId",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "paymentMethods"
        ],
        title: "payment_methods",
        type: "object"
      },
      Plan: {
        additionalProperties: !1,
        properties: {
          activeModels: {
            nullable: !0,
            type: "object"
          },
          available: { type: "boolean" },
          currency: {
            enum: [
              "USD",
              "EUR",
              "NOK"
            ],
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          fieldPredictions: {
            nullable: !0,
            type: "object"
          },
          gpuHours: {
            nullable: !0,
            type: "object"
          },
          latest: {
            minimum: 1,
            type: "integer"
          },
          license: {
            nullable: !0,
            type: "object"
          },
          modelDeploymentUnits: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          organizationId: {
            nullable: !0,
            pattern: "^las:organization:[a-z0-9-_]+$",
            type: "string"
          },
          planId: {
            pattern: "^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          }
        },
        required: [
          "available",
          "currency",
          "latest",
          "name",
          "organizationId",
          "planId"
        ],
        title: "plan",
        type: "object"
      },
      Plans: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          plans: {
            items: {
              additionalProperties: !1,
              properties: {
                activeModels: {
                  nullable: !0,
                  type: "object"
                },
                available: { type: "boolean" },
                currency: {
                  enum: [
                    "USD",
                    "EUR",
                    "NOK"
                  ],
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                fieldPredictions: {
                  nullable: !0,
                  type: "object"
                },
                gpuHours: {
                  nullable: !0,
                  type: "object"
                },
                latest: {
                  minimum: 1,
                  type: "integer"
                },
                license: {
                  nullable: !0,
                  type: "object"
                },
                modelDeploymentUnits: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                organizationId: {
                  nullable: !0,
                  pattern: "^las:organization:[a-z0-9-_]+$",
                  type: "string"
                },
                planId: {
                  pattern: "^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
                  type: "string"
                }
              },
              required: [
                "available",
                "currency",
                "latest",
                "name",
                "organizationId",
                "planId"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "plans"
        ],
        title: "plans",
        type: "object"
      },
      PostAppClients: {
        additionalProperties: !1,
        properties: {
          callbackUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            type: "array"
          },
          defaultLoginUrl: {
            pattern: "^http://localhost.*|^https://.*",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          generateSecret: {
            default: !0,
            type: "boolean"
          },
          loginUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            type: "array"
          },
          logoutUrls: {
            items: {
              pattern: "^http://localhost.*|^https://.*",
              type: "string"
            },
            type: "array"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "POST /appClients",
        type: "object"
      },
      PostAssets: {
        additionalProperties: !1,
        properties: {
          content: {
            maxLength: 625e4,
            minLength: 1,
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: ["content"],
        title: "POST /assets",
        type: "object"
      },
      PostDataBundles: {
        additionalProperties: !1,
        properties: {
          datasetIds: {
            items: {
              pattern: "^las:dataset:[a-f0-9]{32}$",
              type: "string"
            },
            minItems: 1,
            type: "array"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "POST /models/{modelId}/dataBundles",
        type: "object"
      },
      PostDatasets: {
        additionalProperties: !1,
        properties: {
          containsPersonallyIdentifiableInformation: { type: "boolean" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          }
        },
        title: "POST /datasets",
        type: "object"
      },
      PostDocuments: {
        additionalProperties: !1,
        properties: {
          consentId: {
            pattern: "^las:consent:[a-f0-9]{32}$",
            type: "string"
          },
          content: {
            maxLength: 625e4,
            minLength: 1,
            type: "string"
          },
          contentType: {
            enum: [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/tiff"
            ],
            nullable: !0,
            type: "string"
          },
          datasetId: {
            pattern: "^las:dataset:[a-f0-9]{32}$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          groundTruth: {
            items: {
              additionalProperties: !1,
              properties: {
                label: {
                  maxLength: 36,
                  minLength: 1,
                  pattern: "^[0-9A-Za-z-_]+$",
                  type: "string"
                },
                value: { anyOf: [
                  {
                    maxLength: 512,
                    minLength: 0,
                    nullable: !0,
                    type: "string"
                  },
                  {
                    nullable: !0,
                    type: "boolean"
                  },
                  {
                    nullable: !0,
                    type: "number"
                  },
                  {
                    $ref: "#/components/schemas/groundTruthList",
                    nullable: !0
                  }
                ] }
              },
              required: [
                "label",
                "value"
              ],
              type: "object"
            },
            type: "array"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          retentionInDays: {
            minimum: 1,
            type: "integer"
          }
        },
        required: [
          "content",
          "contentType"
        ],
        title: "POST /documents",
        type: "object"
      },
      PostHeartbeats: {
        title: "POST /transitions/{transitionId}/executions/{executionId}/heartbeats",
        type: "object"
      },
      PostModels: {
        additionalProperties: !1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          fieldConfig: {
            additionalProperties: { oneOf: [
              {
                properties: {
                  description: {
                    maxLength: 4096,
                    nullable: !0,
                    type: "string"
                  },
                  enum: {
                    items: {
                      maxLength: 512,
                      minLength: 1,
                      pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                      type: "string"
                    },
                    maxItems: 500,
                    minItems: 1,
                    type: "array",
                    uniqueItems: !0
                  },
                  maxLength: {
                    maximum: 512,
                    minimum: 1,
                    type: "integer"
                  },
                  type: {
                    enum: [
                      "amount",
                      "date",
                      "digits",
                      "enum",
                      "numeric",
                      "string"
                    ],
                    type: "string"
                  }
                },
                required: ["type"],
                type: "object"
              },
              {
                properties: {
                  fields: {
                    additionalProperties: {
                      properties: {
                        description: {
                          maxLength: 4096,
                          nullable: !0,
                          type: "string"
                        },
                        enum: {
                          items: {
                            maxLength: 512,
                            minLength: 1,
                            pattern: '^[0-9A-Za-zÆØÅæøå!"#$%&()*+,\\-./:;<=>?@\\[\\]\\^_`{|}~ ]+$',
                            type: "string"
                          },
                          maxItems: 500,
                          minItems: 1,
                          type: "array",
                          uniqueItems: !0
                        },
                        maxLength: {
                          maximum: 512,
                          minimum: 1,
                          type: "integer"
                        },
                        type: {
                          enum: [
                            "amount",
                            "date",
                            "digits",
                            "enum",
                            "numeric",
                            "string"
                          ],
                          type: "string"
                        }
                      },
                      required: ["type"],
                      type: "object"
                    },
                    type: "object"
                  },
                  type: {
                    enum: ["lines"],
                    type: "string"
                  }
                },
                required: [
                  "fields",
                  "type"
                ],
                type: "object"
              }
            ] },
            type: "object"
          },
          height: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          postprocessConfig: { oneOf: [
            {
              additionalProperties: !1,
              properties: { strategy: {
                enum: ["BEST_FIRST"],
                type: "string"
              } },
              required: ["strategy"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: {
                parameters: {
                  properties: {
                    collapse: { type: "boolean" },
                    n: {
                      maximum: 3,
                      minimum: 1,
                      type: "integer"
                    }
                  },
                  required: ["n"],
                  type: "object"
                },
                strategy: {
                  enum: ["BEST_N_PAGES"],
                  type: "string"
                }
              },
              required: [
                "parameters",
                "strategy"
              ],
              type: "object"
            }
          ] },
          preprocessConfig: {
            additionalProperties: !1,
            properties: {
              autoRotate: { type: "boolean" },
              imageQuality: {
                enum: [
                  "LOW",
                  "HIGH"
                ],
                type: "string"
              },
              maxPages: {
                maximum: 3,
                minimum: 1,
                type: "integer"
              }
            },
            required: [
              "autoRotate",
              "imageQuality",
              "maxPages"
            ],
            type: "object"
          },
          width: {
            maximum: 1921,
            minimum: 97,
            type: "integer"
          }
        },
        required: ["fieldConfig"],
        title: "POST /models",
        type: "object"
      },
      PostOrganizations: {
        additionalProperties: !1,
        properties: { name: {
          maxLength: 4096,
          nullable: !0,
          type: "string"
        } },
        title: "POST /organizations",
        type: "object"
      },
      PostPaymentMethods: {
        additionalProperties: !1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        title: "POST /paymentMethods",
        type: "object"
      },
      PostPredictions: {
        additionalProperties: !1,
        properties: {
          autoRotate: { type: "boolean" },
          documentId: {
            pattern: "^las:document:[a-f0-9]{32}$",
            type: "string"
          },
          imageQuality: {
            enum: [
              "LOW",
              "HIGH"
            ],
            type: "string"
          },
          maxPages: {
            maximum: 3,
            minimum: 1,
            type: "integer"
          },
          modelId: {
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$",
            type: "string"
          },
          postprocessConfig: { oneOf: [
            {
              additionalProperties: !1,
              properties: { strategy: {
                enum: ["BEST_FIRST"],
                type: "string"
              } },
              required: ["strategy"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: {
                parameters: {
                  properties: {
                    collapse: { type: "boolean" },
                    n: {
                      maximum: 3,
                      minimum: 1,
                      type: "integer"
                    }
                  },
                  required: ["n"],
                  type: "object"
                },
                strategy: {
                  enum: ["BEST_N_PAGES"],
                  type: "string"
                }
              },
              required: [
                "parameters",
                "strategy"
              ],
              type: "object"
            }
          ] },
          rotation: {
            enum: [
              0,
              90,
              180,
              270
            ],
            type: "integer"
          },
          trainingId: {
            pattern: "^las:model-training:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "documentId",
          "modelId"
        ],
        title: "POST /predictions",
        type: "object"
      },
      PostSecrets: {
        additionalProperties: !1,
        properties: {
          data: { type: "object" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: ["data"],
        title: "POST /secrets",
        type: "object"
      },
      PostSignUp: {
        additionalProperties: !1,
        properties: {
          email: {
            pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          password: {
            pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\^$*.\\[\\]{}\\(\\)?\\-\"!@#%&/,><':;|_~`])\\S{8,99}$",
            type: "string"
          },
          reCaptchaResponse: { type: "string" }
        },
        required: [
          "email",
          "password",
          "reCaptchaResponse"
        ],
        title: "POST /users",
        type: "object"
      },
      PostTrainings: {
        additionalProperties: !1,
        properties: {
          dataBundleIds: {
            items: {
              pattern: "^las:model-data-bundle:[a-f0-9]{32}$",
              type: "string"
            },
            minItems: 1,
            type: "array"
          },
          dataScientistAssistance: { type: "boolean" },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          instanceType: {
            enum: [
              "small-gpu",
              "medium-gpu",
              "large-gpu"
            ],
            nullable: !0,
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          warmStartConfig: {
            additionalProperties: !1,
            properties: { trainingId: {
              pattern: "^las:model-training:[a-f0-9]{32}$",
              type: "string"
            } },
            required: ["trainingId"],
            type: "object"
          }
        },
        title: "POST /models/{modelId}/trainings",
        type: "object"
      },
      PostTransitionExecution: {
        title: "POST /transitions/{transitionId}/executions",
        type: "object"
      },
      PostTransitions: {
        additionalProperties: !1,
        properties: {
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          inputJsonSchema: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          outputJsonSchema: { type: "object" },
          parameters: { anyOf: [
            {
              additionalProperties: !1,
              properties: {
                cpu: {
                  enum: [
                    256,
                    512,
                    1024
                  ],
                  type: "integer"
                },
                environment: {
                  additionalProperties: { type: "string" },
                  type: "object"
                },
                environmentSecrets: {
                  items: {
                    pattern: "^las:secret:[a-f0-9]{32}$",
                    type: "string"
                  },
                  type: "array"
                },
                imageUrl: { type: "string" },
                memory: {
                  enum: [
                    512,
                    1024,
                    2048,
                    4096,
                    8192
                  ],
                  type: "integer"
                },
                secretId: {
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: ["imageUrl"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: { assets: {
                additionalProperties: {
                  pattern: "^las:asset:[a-f0-9]{32}$",
                  type: "string"
                },
                properties: { jsRemoteComponent: {
                  pattern: "^las:asset:[a-f0-9]{32}$",
                  type: "string"
                } },
                type: "object"
              } },
              type: "object"
            }
          ] },
          timeoutInSeconds: {
            maximum: 1800,
            minimum: 60,
            type: "integer"
          },
          transitionType: {
            enum: [
              "docker",
              "manual"
            ],
            type: "string"
          }
        },
        required: ["transitionType"],
        title: "POST /transitions",
        type: "object"
      },
      PostUsers: {
        additionalProperties: !1,
        properties: {
          appClientId: {
            pattern: "^las:app-client:[a-z0-9-_]+$",
            type: "string"
          },
          avatar: {
            maxLength: 131072,
            nullable: !0,
            type: "string"
          },
          email: {
            pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            type: "string"
          },
          metadata: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          }
        },
        required: ["email"],
        title: "POST /users",
        type: "object"
      },
      PostWorkflowExecutions: {
        additionalProperties: !1,
        properties: { input: { type: "object" } },
        required: ["input"],
        title: "POST /workflows/{workflowId}/executions",
        type: "object"
      },
      PostWorkflows: {
        additionalProperties: !1,
        properties: {
          completedConfig: {
            additionalProperties: !1,
            properties: {
              environment: {
                additionalProperties: { type: "string" },
                type: "object"
              },
              environmentSecrets: {
                items: {
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                },
                type: "array"
              },
              imageUrl: { type: "string" },
              secretId: {
                pattern: "^las:secret:[a-f0-9]{32}$",
                type: "string"
              }
            },
            required: ["imageUrl"],
            type: "object"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          errorConfig: {
            additionalProperties: !1,
            properties: {
              email: {
                pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                type: "string"
              },
              manualRetry: { type: "boolean" }
            },
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          specification: {
            additionalProperties: !1,
            properties: {
              definition: { type: "object" },
              language: {
                enum: ["ASL"],
                type: "string"
              },
              version: {
                enum: ["1.0.0"],
                type: "string"
              }
            },
            required: ["definition"],
            type: "object"
          }
        },
        required: ["specification"],
        title: "POST /workflows",
        type: "object"
      },
      Prediction: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          documentId: {
            pattern: "^las:document:[a-f0-9]{32}$",
            type: "string"
          },
          inferenceTime: {
            minimum: 0,
            type: "number"
          },
          modelId: {
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$",
            type: "string"
          },
          predictionId: {
            pattern: "^las:prediction:[a-f0-9]{32}$",
            type: "string"
          },
          predictions: {
            items: { anyOf: [
              {
                additionalProperties: !1,
                properties: {
                  confidence: {
                    maximum: 1,
                    minimum: 0,
                    type: "number"
                  },
                  label: {
                    maxLength: 36,
                    minLength: 1,
                    pattern: "^[0-9A-Za-z-_]+$",
                    type: "string"
                  },
                  location: {
                    items: {
                      maximum: 1,
                      minimum: 0,
                      type: "number"
                    },
                    maxItems: 4,
                    minItems: 4,
                    type: "array"
                  },
                  page: {
                    minimum: 0,
                    type: "integer"
                  },
                  value: {
                    maxLength: 512,
                    minLength: 1,
                    nullable: !0,
                    type: "string"
                  }
                },
                required: [
                  "confidence",
                  "label",
                  "value"
                ],
                type: "object"
              },
              {
                additionalProperties: !1,
                properties: {
                  label: {
                    maxLength: 36,
                    minLength: 1,
                    pattern: "^[0-9A-Za-z-_]+$",
                    type: "string"
                  },
                  page: {
                    minimum: 0,
                    type: "integer"
                  },
                  value: {
                    items: {
                      items: {
                        additionalProperties: !1,
                        properties: {
                          confidence: {
                            maximum: 1,
                            minimum: 0,
                            type: "number"
                          },
                          label: {
                            maxLength: 36,
                            minLength: 1,
                            pattern: "^[0-9A-Za-z-_]+$",
                            type: "string"
                          },
                          location: {
                            items: {
                              maximum: 1,
                              minimum: 0,
                              type: "number"
                            },
                            maxItems: 4,
                            minItems: 4,
                            type: "array"
                          },
                          page: {
                            minimum: 0,
                            type: "integer"
                          },
                          value: {
                            maxLength: 512,
                            minLength: 1,
                            nullable: !0,
                            type: "string"
                          }
                        },
                        required: [
                          "confidence",
                          "label",
                          "value"
                        ],
                        type: "object"
                      },
                      type: "array"
                    },
                    type: "array"
                  }
                },
                required: [
                  "label",
                  "value"
                ],
                type: "object"
              }
            ] },
            type: "array"
          },
          trainingId: {
            nullable: !0,
            pattern: "^las:model-training:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "documentId",
          "inferenceTime",
          "modelId",
          "predictionId",
          "predictions"
        ],
        title: "prediction",
        type: "object"
      },
      Predictions: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          order: {
            enum: [
              "ascending",
              "descending"
            ],
            type: "string"
          },
          predictions: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                documentId: {
                  pattern: "^las:document:[a-f0-9]{32}$",
                  type: "string"
                },
                inferenceTime: {
                  minimum: 0,
                  type: "number"
                },
                modelId: {
                  pattern: "^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$",
                  type: "string"
                },
                predictionId: {
                  pattern: "^las:prediction:[a-f0-9]{32}$",
                  type: "string"
                },
                predictions: {
                  items: { anyOf: [
                    {
                      additionalProperties: !1,
                      properties: {
                        confidence: {
                          maximum: 1,
                          minimum: 0,
                          type: "number"
                        },
                        label: {
                          maxLength: 36,
                          minLength: 1,
                          pattern: "^[0-9A-Za-z-_]+$",
                          type: "string"
                        },
                        location: {
                          items: {
                            maximum: 1,
                            minimum: 0,
                            type: "number"
                          },
                          maxItems: 4,
                          minItems: 4,
                          type: "array"
                        },
                        page: {
                          minimum: 0,
                          type: "integer"
                        },
                        value: {
                          maxLength: 512,
                          minLength: 1,
                          nullable: !0,
                          type: "string"
                        }
                      },
                      required: [
                        "confidence",
                        "label",
                        "value"
                      ],
                      type: "object"
                    },
                    {
                      additionalProperties: !1,
                      properties: {
                        label: {
                          maxLength: 36,
                          minLength: 1,
                          pattern: "^[0-9A-Za-z-_]+$",
                          type: "string"
                        },
                        page: {
                          minimum: 0,
                          type: "integer"
                        },
                        value: {
                          items: {
                            items: {
                              additionalProperties: !1,
                              properties: {
                                confidence: {
                                  maximum: 1,
                                  minimum: 0,
                                  type: "number"
                                },
                                label: {
                                  maxLength: 36,
                                  minLength: 1,
                                  pattern: "^[0-9A-Za-z-_]+$",
                                  type: "string"
                                },
                                location: {
                                  items: {
                                    maximum: 1,
                                    minimum: 0,
                                    type: "number"
                                  },
                                  maxItems: 4,
                                  minItems: 4,
                                  type: "array"
                                },
                                page: {
                                  minimum: 0,
                                  type: "integer"
                                },
                                value: {
                                  maxLength: 512,
                                  minLength: 1,
                                  nullable: !0,
                                  type: "string"
                                }
                              },
                              required: [
                                "confidence",
                                "label",
                                "value"
                              ],
                              type: "object"
                            },
                            type: "array"
                          },
                          type: "array"
                        }
                      },
                      required: [
                        "label",
                        "value"
                      ],
                      type: "object"
                    }
                  ] },
                  type: "array"
                },
                trainingId: {
                  nullable: !0,
                  pattern: "^las:model-training:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: [
                "documentId",
                "inferenceTime",
                "modelId",
                "predictionId",
                "predictions"
              ],
              type: "object"
            },
            type: "array"
          },
          sortBy: {
            enum: ["createdTime"],
            type: "string"
          }
        },
        required: [
          "nextToken",
          "predictions"
        ],
        title: "predictions",
        type: "object"
      },
      Profile: {
        additionalProperties: !1,
        properties: {
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          email: {
            pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            type: "string"
          },
          familyName: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          givenName: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          locale: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          metadata: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          picture: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          profileId: {
            pattern: "^las:profile:[a-f0-9]{32}$",
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: ["profileId"],
        title: "profile",
        type: "object"
      },
      Secret: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          secretId: {
            pattern: "^las:secret:[a-f0-9]{32}$",
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "description",
          "name",
          "secretId",
          "updatedBy",
          "updatedTime"
        ],
        title: "secret",
        type: "object"
      },
      Secrets: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          secrets: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                secretId: {
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "description",
                "name",
                "secretId",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "secrets"
        ],
        title: "secrets",
        type: "object"
      },
      SignUp: {
        additionalProperties: !1,
        properties: {
          clientId: { type: "string" },
          username: {
            pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            type: "string"
          }
        },
        required: [
          "clientId",
          "username"
        ],
        title: "signup",
        type: "object"
      },
      Training: {
        additionalProperties: !1,
        properties: {
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          dataBundleIds: {
            items: {
              pattern: "^las:model-data-bundle:[a-f0-9]{32}$",
              type: "string"
            },
            type: "array"
          },
          dataScientistAssistance: { type: "boolean" },
          deploymentEnvironmentId: {
            nullable: !0,
            pattern: "^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          evaluation: { type: "object" },
          gpuHours: {
            minimum: 0,
            nullable: !0,
            type: "number"
          },
          instanceType: {
            enum: [
              "small-gpu",
              "medium-gpu",
              "large-gpu"
            ],
            type: "string"
          },
          metadata: {
            nullable: !0,
            type: "object"
          },
          modelId: {
            pattern: "^las:model:[a-z0-9-_]+$",
            type: "string"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          status: {
            enum: [
              "waiting-for-approval",
              "pending",
              "running",
              "succeeded",
              "failed",
              "cancelled"
            ],
            type: "string"
          },
          trainingId: {
            pattern: "^las:model-training:[a-f0-9]{32}$",
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          warmStartConfig: { anyOf: [
            {
              additionalProperties: !1,
              properties: { trainingId: {
                pattern: "^las:model-training:[a-f0-9]{32}$",
                type: "string"
              } },
              required: ["trainingId"],
              type: "object"
            },
            {
              additionalProperties: !1,
              properties: {},
              type: "object"
            }
          ] }
        },
        required: [
          "createdBy",
          "createdTime",
          "dataBundleIds",
          "description",
          "evaluation",
          "gpuHours",
          "instanceType",
          "metadata",
          "modelId",
          "name",
          "status",
          "trainingId",
          "updatedBy",
          "updatedTime"
        ],
        title: "training",
        type: "object"
      },
      Trainings: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          status: {
            items: {
              enum: [
                "waiting-for-approval",
                "pending",
                "running",
                "succeeded",
                "failed",
                "cancelled"
              ],
              type: "string"
            },
            type: "array"
          },
          trainings: {
            items: {
              additionalProperties: !1,
              properties: {
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                dataBundleIds: {
                  items: {
                    pattern: "^las:model-data-bundle:[a-f0-9]{32}$",
                    type: "string"
                  },
                  type: "array"
                },
                dataScientistAssistance: { type: "boolean" },
                deploymentEnvironmentId: {
                  nullable: !0,
                  pattern: "^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                evaluation: { type: "object" },
                gpuHours: {
                  minimum: 0,
                  nullable: !0,
                  type: "number"
                },
                instanceType: {
                  enum: [
                    "small-gpu",
                    "medium-gpu",
                    "large-gpu"
                  ],
                  type: "string"
                },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                modelId: {
                  pattern: "^las:model:[a-z0-9-_]+$",
                  type: "string"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                status: {
                  enum: [
                    "waiting-for-approval",
                    "pending",
                    "running",
                    "succeeded",
                    "failed",
                    "cancelled"
                  ],
                  type: "string"
                },
                trainingId: {
                  pattern: "^las:model-training:[a-f0-9]{32}$",
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                warmStartConfig: { anyOf: [
                  {
                    additionalProperties: !1,
                    properties: { trainingId: {
                      pattern: "^las:model-training:[a-f0-9]{32}$",
                      type: "string"
                    } },
                    required: ["trainingId"],
                    type: "object"
                  },
                  {
                    additionalProperties: !1,
                    properties: {},
                    type: "object"
                  }
                ] }
              },
              required: [
                "createdBy",
                "createdTime",
                "dataBundleIds",
                "description",
                "evaluation",
                "gpuHours",
                "instanceType",
                "metadata",
                "modelId",
                "name",
                "status",
                "trainingId",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "trainings"
        ],
        title: "trainings",
        type: "object"
      },
      Transition: {
        additionalProperties: !1,
        properties: {
          assets: {
            additionalProperties: {
              pattern: "^las:asset:[a-f0-9]{32}$",
              type: "string"
            },
            properties: { jsRemoteComponent: {
              pattern: "^las:asset:[a-f0-9]{32}$",
              type: "string"
            } },
            type: "object"
          },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          inputJsonSchema: { type: "object" },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          outputJsonSchema: { type: "object" },
          parameters: { type: "object" },
          timeoutInSeconds: {
            maximum: 1800,
            minimum: 60,
            type: "integer"
          },
          transitionId: { anyOf: [
            {
              pattern: "^las:transition:[a-f0-9]{32}$",
              type: "string"
            },
            {
              pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
              type: "string"
            }
          ] },
          transitionType: {
            enum: [
              "docker",
              "manual"
            ],
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "description",
          "name",
          "parameters",
          "timeoutInSeconds",
          "transitionId",
          "transitionType",
          "updatedBy",
          "updatedTime"
        ],
        title: "transition",
        type: "object"
      },
      TransitionExecution: {
        additionalProperties: !1,
        properties: {
          completedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          endTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          executionId: {
            pattern: "^las:transition-execution:[a-f0-9]{32}$",
            type: "string"
          },
          input: {
            nullable: !0,
            type: "object"
          },
          logId: {
            nullable: !0,
            pattern: "^las:log:[a-f0-9]{32}$",
            type: "string"
          },
          startTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          status: {
            enum: [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry"
            ],
            type: "string"
          },
          transitionId: { anyOf: [
            {
              pattern: "^las:transition:[a-f0-9]{32}$",
              type: "string"
            },
            {
              pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
              type: "string"
            }
          ] }
        },
        required: [
          "completedBy",
          "executionId",
          "input",
          "status",
          "transitionId"
        ],
        title: "transition-execution",
        type: "object"
      },
      TransitionExecutions: {
        additionalProperties: !1,
        properties: {
          executions: {
            items: {
              additionalProperties: !1,
              properties: {
                completedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                endTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                executionId: {
                  pattern: "^las:transition-execution:[a-f0-9]{32}$",
                  type: "string"
                },
                input: {
                  nullable: !0,
                  type: "object"
                },
                logId: {
                  nullable: !0,
                  pattern: "^las:log:[a-f0-9]{32}$",
                  type: "string"
                },
                startTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                status: {
                  enum: [
                    "running",
                    "succeeded",
                    "failed",
                    "rejected",
                    "retry"
                  ],
                  type: "string"
                },
                transitionId: { anyOf: [
                  {
                    pattern: "^las:transition:[a-f0-9]{32}$",
                    type: "string"
                  },
                  {
                    pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
                    type: "string"
                  }
                ] }
              },
              required: [
                "completedBy",
                "executionId",
                "input",
                "status",
                "transitionId"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          status: {
            items: {
              enum: [
                "running",
                "succeeded",
                "failed",
                "rejected",
                "retry"
              ],
              type: "string"
            },
            type: "array"
          },
          transitionId: { anyOf: [
            {
              pattern: "^las:transition:[a-f0-9]{32}$",
              type: "string"
            },
            {
              pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
              type: "string"
            }
          ] }
        },
        required: [
          "executions",
          "nextToken",
          "transitionId"
        ],
        title: "transition-executions",
        type: "object"
      },
      Transitions: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          transitionType: {
            items: {
              enum: [
                "docker",
                "manual"
              ],
              type: "string"
            },
            type: "array"
          },
          transitions: {
            items: {
              additionalProperties: !1,
              properties: {
                assets: {
                  additionalProperties: {
                    pattern: "^las:asset:[a-f0-9]{32}$",
                    type: "string"
                  },
                  properties: { jsRemoteComponent: {
                    pattern: "^las:asset:[a-f0-9]{32}$",
                    type: "string"
                  } },
                  type: "object"
                },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                inputJsonSchema: { type: "object" },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                outputJsonSchema: { type: "object" },
                parameters: { type: "object" },
                timeoutInSeconds: {
                  maximum: 1800,
                  minimum: 60,
                  type: "integer"
                },
                transitionId: { anyOf: [
                  {
                    pattern: "^las:transition:[a-f0-9]{32}$",
                    type: "string"
                  },
                  {
                    pattern: "^las:transition:commons-[0-9A-Za-z-]+$",
                    type: "string"
                  }
                ] },
                transitionType: {
                  enum: [
                    "docker",
                    "manual"
                  ],
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "description",
                "name",
                "parameters",
                "timeoutInSeconds",
                "transitionId",
                "transitionType",
                "updatedBy",
                "updatedTime"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "transitions"
        ],
        title: "transitions",
        type: "object"
      },
      User: {
        additionalProperties: !1,
        properties: {
          avatar: {
            maxLength: 131072,
            nullable: !0,
            type: "string"
          },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          email: {
            pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
            type: "string"
          },
          metadata: {
            nullable: !0,
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          profileId: {
            nullable: !0,
            pattern: "^las:profile:[a-f0-9]{32}$",
            type: "string"
          },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          userId: {
            pattern: "^las:user:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "createdBy",
          "createdTime",
          "email",
          "updatedBy",
          "updatedTime",
          "userId"
        ],
        title: "user",
        type: "object"
      },
      Users: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          users: {
            items: {
              additionalProperties: !1,
              properties: {
                avatar: {
                  maxLength: 131072,
                  nullable: !0,
                  type: "string"
                },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                email: {
                  pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                  type: "string"
                },
                metadata: {
                  nullable: !0,
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                profileId: {
                  nullable: !0,
                  pattern: "^las:profile:[a-f0-9]{32}$",
                  type: "string"
                },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                userId: {
                  pattern: "^las:user:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: [
                "createdBy",
                "createdTime",
                "email",
                "updatedBy",
                "updatedTime",
                "userId"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "users"
        ],
        title: "users",
        type: "object"
      },
      Workflow: {
        additionalProperties: !1,
        properties: {
          completedConfig: {
            additionalProperties: !1,
            nullable: !0,
            properties: {
              environment: {
                additionalProperties: { type: "string" },
                type: "object"
              },
              environmentSecrets: {
                items: {
                  pattern: "^las:secret:[a-f0-9]{32}$",
                  type: "string"
                },
                type: "array"
              },
              imageUrl: { type: "string" },
              secretId: {
                pattern: "^las:secret:[a-f0-9]{32}$",
                type: "string"
              }
            },
            required: ["imageUrl"],
            type: "object"
          },
          createdBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          createdTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          description: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          errorConfig: {
            additionalProperties: !1,
            nullable: !0,
            properties: {
              email: {
                pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                type: "string"
              },
              manualRetry: { type: "boolean" }
            },
            type: "object"
          },
          name: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          numberOfRunningExecutions: { type: "integer" },
          updatedBy: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          updatedTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          workflowId: {
            pattern: "^las:workflow:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "completedConfig",
          "createdBy",
          "createdTime",
          "description",
          "errorConfig",
          "name",
          "numberOfRunningExecutions",
          "updatedBy",
          "updatedTime",
          "workflowId"
        ],
        title: "workflow",
        type: "object"
      },
      WorkflowExecution: {
        additionalProperties: !1,
        properties: {
          completedBy: {
            items: { anyOf: [
              {
                pattern: "^las:user:[a-f0-9]{32}$",
                type: "string"
              },
              {
                pattern: "^las:app-client:[a-z0-9-_]+$",
                type: "string"
              }
            ] },
            type: "array"
          },
          completedTaskLogId: {
            nullable: !0,
            pattern: "^las:log:[a-f0-9]{32}$",
            type: "string"
          },
          endTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          events: {
            items: { type: "object" },
            type: "array"
          },
          executionId: {
            pattern: "^las:workflow-execution:[a-f0-9]{32}$",
            type: "string"
          },
          input: {
            nullable: !0,
            type: "object"
          },
          logId: {
            nullable: !0,
            pattern: "^las:log:[a-f0-9]{32}$",
            type: "string"
          },
          output: {
            nullable: !0,
            type: "object"
          },
          startTime: {
            nullable: !0,
            pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
            type: "string"
          },
          status: {
            enum: [
              "running",
              "succeeded",
              "failed",
              "rejected",
              "retry",
              "error"
            ],
            type: "string"
          },
          transitionExecutions: {
            nullable: !0,
            type: "object"
          },
          workflowId: {
            pattern: "^las:workflow:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "endTime",
          "executionId",
          "input",
          "output",
          "startTime",
          "status",
          "transitionExecutions",
          "workflowId"
        ],
        title: "workflow-execution",
        type: "object"
      },
      WorkflowExecutions: {
        additionalProperties: !1,
        properties: {
          executions: {
            items: {
              additionalProperties: !1,
              properties: {
                completedBy: {
                  items: { anyOf: [
                    {
                      pattern: "^las:user:[a-f0-9]{32}$",
                      type: "string"
                    },
                    {
                      pattern: "^las:app-client:[a-z0-9-_]+$",
                      type: "string"
                    }
                  ] },
                  type: "array"
                },
                completedTaskLogId: {
                  nullable: !0,
                  pattern: "^las:log:[a-f0-9]{32}$",
                  type: "string"
                },
                endTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                events: {
                  items: { type: "object" },
                  type: "array"
                },
                executionId: {
                  pattern: "^las:workflow-execution:[a-f0-9]{32}$",
                  type: "string"
                },
                input: {
                  nullable: !0,
                  type: "object"
                },
                logId: {
                  nullable: !0,
                  pattern: "^las:log:[a-f0-9]{32}$",
                  type: "string"
                },
                output: {
                  nullable: !0,
                  type: "object"
                },
                startTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                status: {
                  enum: [
                    "running",
                    "succeeded",
                    "failed",
                    "rejected",
                    "retry",
                    "error"
                  ],
                  type: "string"
                },
                transitionExecutions: {
                  nullable: !0,
                  type: "object"
                },
                workflowId: {
                  pattern: "^las:workflow:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: [
                "endTime",
                "executionId",
                "input",
                "output",
                "startTime",
                "status",
                "transitionExecutions",
                "workflowId"
              ],
              type: "object"
            },
            type: "array"
          },
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          order: {
            enum: [
              "ascending",
              "descending"
            ],
            type: "string"
          },
          sortBy: {
            enum: [
              "startTime",
              "endTime"
            ],
            type: "string"
          },
          status: {
            items: {
              enum: [
                "running",
                "succeeded",
                "failed",
                "rejected",
                "retry",
                "error"
              ],
              type: "string"
            },
            type: "array"
          },
          workflowId: {
            pattern: "^las:workflow:[a-f0-9]{32}$",
            type: "string"
          }
        },
        required: [
          "executions",
          "nextToken",
          "workflowId"
        ],
        title: "workflow-executions",
        type: "object"
      },
      Workflows: {
        additionalProperties: !1,
        properties: {
          nextToken: {
            maxLength: 4096,
            nullable: !0,
            type: "string"
          },
          workflows: {
            items: {
              additionalProperties: !1,
              properties: {
                completedConfig: {
                  additionalProperties: !1,
                  nullable: !0,
                  properties: {
                    environment: {
                      additionalProperties: { type: "string" },
                      type: "object"
                    },
                    environmentSecrets: {
                      items: {
                        pattern: "^las:secret:[a-f0-9]{32}$",
                        type: "string"
                      },
                      type: "array"
                    },
                    imageUrl: { type: "string" },
                    secretId: {
                      pattern: "^las:secret:[a-f0-9]{32}$",
                      type: "string"
                    }
                  },
                  required: ["imageUrl"],
                  type: "object"
                },
                createdBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                createdTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                description: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                errorConfig: {
                  additionalProperties: !1,
                  nullable: !0,
                  properties: {
                    email: {
                      pattern: "^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\\.)+[A-Za-z]{2,}$",
                      type: "string"
                    },
                    manualRetry: { type: "boolean" }
                  },
                  type: "object"
                },
                name: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                numberOfRunningExecutions: { type: "integer" },
                updatedBy: {
                  maxLength: 4096,
                  nullable: !0,
                  type: "string"
                },
                updatedTime: {
                  nullable: !0,
                  pattern: "^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$",
                  type: "string"
                },
                workflowId: {
                  pattern: "^las:workflow:[a-f0-9]{32}$",
                  type: "string"
                }
              },
              required: [
                "completedConfig",
                "createdBy",
                "createdTime",
                "description",
                "errorConfig",
                "name",
                "numberOfRunningExecutions",
                "updatedBy",
                "updatedTime",
                "workflowId"
              ],
              type: "object"
            },
            type: "array"
          }
        },
        required: [
          "nextToken",
          "workflows"
        ],
        title: "workflows",
        type: "object"
      },
      groundTruthList: { anyOf: [
        {
          items: {
            additionalProperties: !1,
            properties: {
              label: {
                maxLength: 36,
                minLength: 1,
                pattern: "^[0-9A-Za-z-_]+$",
                type: "string"
              },
              value: { anyOf: [
                {
                  maxLength: 512,
                  minLength: 0,
                  type: "string"
                },
                { nullable: !0 },
                { type: "boolean" },
                { type: "number" },
                { $ref: "#/components/schemas/groundTruthList" }
              ] }
            },
            required: [
              "label",
              "value"
            ],
            type: "object"
          },
          type: "array"
        },
        {
          items: {
            items: {
              additionalProperties: !1,
              properties: {
                label: {
                  maxLength: 36,
                  minLength: 1,
                  pattern: "^[0-9A-Za-z-_]+$",
                  type: "string"
                },
                value: { anyOf: [
                  {
                    maxLength: 512,
                    minLength: 0,
                    type: "string"
                  },
                  { nullable: !0 },
                  { type: "boolean" },
                  { type: "number" },
                  { $ref: "#/components/schemas/groundTruthList" }
                ] }
              },
              required: [
                "label",
                "value"
              ],
              type: "object"
            },
            type: "array"
          },
          type: "array"
        }
      ] }
    },
    securitySchemes: { OAuth2: {
      flows: { clientCredentials: {
        scopes: {
          "api.lucidtech.ai/appclients:read": "Read permissions",
          "api.lucidtech.ai/appclients:write": "Write permissions",
          "api.lucidtech.ai/assets:read": "Read permissions",
          "api.lucidtech.ai/assets:write": "Write permissions",
          "api.lucidtech.ai/databundles:read": "Read permissions",
          "api.lucidtech.ai/databundles:write": "Write permissions",
          "api.lucidtech.ai/datasets:read": "Read permissions",
          "api.lucidtech.ai/datasets:write": "Write permissions",
          "api.lucidtech.ai/deploymentenvironments:read": "Read permissions",
          "api.lucidtech.ai/documents:read": "Read permissions",
          "api.lucidtech.ai/documents:write": "Write permissions",
          "api.lucidtech.ai/logs:read": "Read permissions",
          "api.lucidtech.ai/models:read": "Read permissions",
          "api.lucidtech.ai/models:write": "Write permissions",
          "api.lucidtech.ai/organizations:read": "Read permissions",
          "api.lucidtech.ai/organizations:write": "Write permissions",
          "api.lucidtech.ai/paymentmethods:read": "Read permissions",
          "api.lucidtech.ai/paymentmethods:write": "Write permissions",
          "api.lucidtech.ai/plans:read": "Read permissions",
          "api.lucidtech.ai/predictions:read": "Read permissions",
          "api.lucidtech.ai/predictions:write": "Write permissions",
          "api.lucidtech.ai/profiles:read": "Read permissions",
          "api.lucidtech.ai/profiles:write": "Write permissions",
          "api.lucidtech.ai/secrets:read": "Read permissions",
          "api.lucidtech.ai/secrets:write": "Write permissions",
          "api.lucidtech.ai/trainings:read": "Read permissions",
          "api.lucidtech.ai/trainings:write": "Write permissions",
          "api.lucidtech.ai/transitions.executions.heartbeats:write": "Write permissions",
          "api.lucidtech.ai/transitions.executions:read": "Read permissions",
          "api.lucidtech.ai/transitions.executions:write": "Write permissions",
          "api.lucidtech.ai/transitions:read": "Read permissions",
          "api.lucidtech.ai/transitions:write": "Write permissions",
          "api.lucidtech.ai/users:read": "Read permissions",
          "api.lucidtech.ai/users:write": "Write permissions",
          "api.lucidtech.ai/workflows.executions:read": "Read permissions",
          "api.lucidtech.ai/workflows.executions:write": "Write permissions",
          "api.lucidtech.ai/workflows:read": "Read permissions",
          "api.lucidtech.ai/workflows:write": "Write permissions"
        },
        tokenUrl: "https://auth.lucidtech.ai/oauth2/token"
      } },
      type: "oauth2"
    } }
  }
};
export {
  e as default
};
