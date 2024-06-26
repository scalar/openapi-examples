const e = {
  swagger: "2.0",
  schemes: ["https"],
  host: "rms.api.bbc.co.uk",
  basePath: "/",
  info: {
    description: "We encapsulate Radio & Music business logic for iPlayer Radio and BBC Music products on all platforms. We add value by reliably providing the right blend of metadata needed by clients.",
    title: "Radio & Music Services",
    version: "1.0.0",
    "x-apisguru-categories": ["media"],
    "x-logo": {
      backgroundColor: "#FFFFFF",
      url: "https://api.apis.guru/v2/cache/logo/https_upload.wikimedia.org_wikipedia_commons_thumb_6_63_BBC_Radio_logo.svg_140px-BBC_Radio_logo.svg.png"
    },
    "x-origin": [{
      format: "swagger",
      url: "https://rms.api.bbc.co.uk/docs/swagger.json",
      version: "2.0"
    }],
    "x-providerName": "bbc.co.uk"
  },
  consumes: ["application/json"],
  produces: ["application/json"],
  parameters: {
    Authorization: {
      default: "Bearer OAUTH_TOKEN",
      description: "Bearer OAUTH_TOKEN",
      in: "header",
      name: "Authorization",
      required: !0,
      type: "string"
    },
    "X-API-Key": {
      description: "API_KEY",
      in: "header",
      name: "X-API-Key",
      required: !0,
      type: "string"
    },
    "X-Authentication-Provider": {
      default: "idv5",
      description: "Authentication type",
      in: "header",
      name: "X-Authentication-Provider",
      required: !0,
      type: "string"
    },
    artist: {
      description: "MusicBrainz artist ID",
      in: "query",
      name: "artist",
      required: !1,
      type: "string"
    },
    category: {
      description: "Category ID",
      in: "query",
      name: "category",
      required: !1,
      type: "string"
    },
    coverage: {
      description: "Local, National or Regional Coverage",
      enum: [
        "local",
        "national",
        "regional"
      ],
      in: "query",
      name: "coverage",
      required: !1,
      type: "string"
    },
    decomposed: {
      description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
      in: "query",
      name: "decomposed",
      required: !1,
      type: "boolean"
    },
    limit: {
      description: "Paginated results limit",
      in: "query",
      name: "limit",
      required: !1,
      type: "integer"
    },
    network: {
      description: "Return items with given Network ID",
      in: "query",
      name: "network",
      required: !1,
      type: "string"
    },
    offset: {
      description: "Paginated results offset",
      in: "query",
      name: "offset",
      required: !1,
      type: "integer"
    },
    over16: {
      description: "Boolean age check",
      in: "query",
      name: "over16",
      required: !0,
      type: "boolean"
    },
    pid: {
      description: "pid",
      in: "path",
      name: "pid",
      required: !0,
      type: "string"
    },
    programme: {
      description: "Items with given Programme Pid",
      in: "query",
      name: "programme",
      required: !1,
      type: "string"
    },
    q: {
      description: "Search query String",
      in: "query",
      name: "q",
      required: !1,
      type: "string"
    },
    rights: {
      description: "Only return available results for the web/mobile.",
      enum: [
        "web",
        "mobile"
      ],
      in: "query",
      name: "rights",
      required: !0,
      type: "string"
    },
    since: {
      description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
      in: "query",
      name: "since",
      required: !1,
      type: "string"
    },
    sort: {
      description: "Sort order for Podcasts results",
      enum: [
        "title",
        "-title",
        "available_from_date",
        "-available_from_date"
      ],
      in: "query",
      name: "sort",
      required: !1,
      type: "string"
    },
    until: {
      description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
      in: "query",
      name: "until",
      required: !1,
      type: "string"
    }
  },
  tags: [
    { name: "Experience" },
    {
      description: '<a href="https://confluence.dev.bbc.co.uk/display/RMServices/Playspace+API+Client+Documetation">Client Documentation</a>',
      name: "Playspace"
    },
    { name: "Categories" },
    { name: "Networks" },
    { name: "Broadcasts" },
    { name: "Collections" },
    { name: "Podcasts" },
    { name: "Programmes" },
    { name: "Personalised Categories" },
    { name: "Personalised Networks" },
    { name: "Personalised Plays" },
    { name: "Radio" },
    { name: "Music" },
    { name: "Music Export" }
  ],
  paths: {
    "/broadcasts": { get: {
      description: `All broadcasts
`,
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Filter by Service ID. E.g. bbc_radio_fourfm",
          in: "query",
          name: "service_id",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by date. E.g. 2016-06-17",
          in: "query",
          name: "date",
          required: !1,
          type: "string"
        },
        {
          description: "Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order",
          enum: [
            "start_at",
            "-start_at",
            "end_at",
            "-end_at"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/BroadcastsResponse" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Broadcasts",
      tags: ["Broadcasts"]
    } },
    "/broadcasts/latest": { get: {
      description: `Broadcasts for the current day
`,
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Filter by Service ID. E.g. bbc_radio_fourfm",
          in: "query",
          name: "service_id",
          required: !1,
          type: "string"
        },
        {
          description: "Filter what is on air. E.g. 'now' returns current programme being broadcasted.",
          enum: [
            "now",
            "previous",
            "next"
          ],
          in: "query",
          name: "on_air",
          required: !1,
          type: "string"
        },
        {
          description: "Filter what will be on air next in minutes. E.g. '240' returns programmes broadcasted in the next four hurs",
          in: "query",
          name: "next",
          required: !1,
          type: "string"
        },
        {
          description: "Filter what was on air previously in minutes. E.g. '240' returns programmes broadcasted in the previous four hurs",
          in: "query",
          name: "previous",
          required: !1,
          type: "string"
        },
        {
          description: "Sort by provided query. E.g. 'start_at' sorts in ascending order, and '-start_at' sorts in descending order",
          enum: [
            "start_at",
            "-start_at",
            "end_at",
            "-end_at"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/BroadcastsResponse" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Latest Broadcasts",
      tags: ["Broadcasts"]
    } },
    "/broadcasts/{pid}": { get: {
      description: `Find broadcast by PID
`,
      operationId: "getBroadcastByPid",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "pid",
          in: "path",
          name: "pid",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/BroadcastsResponse" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Broadcasts by PID",
      tags: ["Broadcasts"]
    } },
    "/categories": { get: {
      description: `Retrieve Categories
`,
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Filter by provided query. E.g. 'promoted' returns promoted categories",
          enum: ["promoted"],
          in: "query",
          name: "kind",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/CategoriesResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/CategoryErrorResponse" }
        }
      },
      summary: "List of categories",
      tags: ["Categories"]
    } },
    "/categories/{id}": { get: {
      description: `Retrieve Categories by ID
`,
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Retrieve information about the category. E.g. 'sport-football-europeanchampionship'",
          in: "path",
          name: "id",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/CategoriesResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/CategoryErrorResponse" }
        }
      },
      summary: "Category by ID",
      tags: ["Categories"]
    } },
    "/collections/{pid}/members": { get: {
      description: `Episodes and Clips from Collection
`,
      operationId: "getCollectionMembers",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "pid",
          in: "path",
          name: "pid",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/ProgrammesResponse" }
        },
        404: {
          description: "Collection not found",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Collection Members",
      tags: ["Collections"]
    } },
    "/experience/homepage": { get: {
      description: `Homepage Experience
`,
      operationId: "getExperienceHomepage",
      parameters: [{
        description: "API_KEY",
        in: "header",
        name: "X-API-Key",
        required: !0,
        type: "string"
      }],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/ExperienceResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Homepage Experience",
      tags: ["Experience"]
    } },
    "/music/popular/artists": { get: {
      description: `List of Most Popular artists from BBC Music.
`,
      operationId: "getMusicPopularArtists",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityArtists" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Popular Artists",
      tags: ["Music"]
    } },
    "/music/popular/artists/{id}": { get: {
      description: `Popularity Artist By Id
`,
      operationId: "getMusicPopularArtistById",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "MusicBrainz Id - Used to get single resource score",
          in: "path",
          name: "id",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityArtists" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Single Artist Popularity",
      tags: ["Music"]
    } },
    "/music/popular/playlists": { get: {
      description: `List of Most Popular playlists from BBC Music.
`,
      operationId: "getMusicPopularPlaylists",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityPlaylists" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Popular Playlists",
      tags: ["Music"]
    } },
    "/music/popular/playlists/{id}": { get: {
      description: `Popular playlist by Id
`,
      operationId: "getMusicPopularPlaylistById",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "BBC Music Playlist Id - Used to get single resource score",
          in: "path",
          name: "id",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityPlaylists" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Single Playlist Popularity",
      tags: ["Music"]
    } },
    "/music/popular/tracks": { get: {
      description: `List of popular tracks for BBC Music. Filter by time, network, artist, playlist or programme.
`,
      operationId: "getMusicPopularTracks",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "Return items with given Network ID",
          in: "query",
          name: "network",
          required: !1,
          type: "string"
        },
        {
          description: "Items with given Programme Pid",
          in: "query",
          name: "programme",
          required: !1,
          type: "string"
        },
        {
          description: "MusicBrainz artist ID",
          in: "query",
          name: "artist",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityTracks" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Popular Tracks",
      tags: ["Music"]
    } },
    "/music/popular/tracks/{id}": { get: {
      description: `Popular Track for BBC Music
`,
      operationId: "getMusicPopularTrackById",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given time period and now",
          in: "query",
          name: "since",
          required: !1,
          type: "string"
        },
        {
          description: "ISO 8601 Date yyyy-mm-dd.  Returns items between given 'since' and 'until' date params",
          in: "query",
          name: "until",
          required: !1,
          type: "string"
        },
        {
          description: "Return items with given Network ID",
          in: "query",
          name: "network",
          required: !1,
          type: "string"
        },
        {
          description: "Items with given Programme Pid",
          in: "query",
          name: "programme",
          required: !1,
          type: "string"
        },
        {
          description: "MusicBrainz artist ID",
          in: "query",
          name: "artist",
          required: !1,
          type: "string"
        },
        {
          description: "In addition to the overall score, return a list of scores broken down by day N.B Must be used in conjunction with since and/or until and since is >= 31 days",
          in: "query",
          name: "decomposed",
          required: !1,
          type: "boolean"
        },
        {
          description: "BBC Music Track Id - Used to get single resource score",
          in: "path",
          name: "id",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicPopularityTracks" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicPopularityError" }
        }
      },
      schemes: ["http"],
      summary: "Single Track Popularity",
      tags: ["Music"]
    } },
    "/my/categories/follows": {
      delete: {
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            in: "body",
            name: "Body",
            required: !0,
            schema: { $ref: "#/definitions/Body_1" }
          }
        ],
        responses: {
          202: { description: "Request successfully sent to UAS." },
          400: {
            description: "The request was malformed.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          },
          401: {
            description: "There was an error with the supplied `Authorization` header.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "Unfollow category",
        tags: ["Personalised Categories"]
      },
      get: {
        description: `List of followed categories for a given user.
`,
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedCategoriesResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "List of followed categories",
        tags: ["Personalised Categories"]
      },
      post: {
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            in: "body",
            name: "Body",
            required: !0,
            schema: { $ref: "#/definitions/Body" }
          }
        ],
        responses: {
          202: { description: "Request successfully sent to UAS." },
          400: {
            description: "The request was malformed.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          },
          401: {
            description: "There was an error with the supplied `Authorization` header.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "Follow category",
        tags: ["Personalised Categories"]
      }
    },
    "/my/music/export": { get: {
      description: `Returns status of all previous third party export actions for a given BBC Music user.
`,
      operationId: "getMusicExport",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicExportJob" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicExportErrorResponse" }
        }
      },
      summary: "Music Exports",
      tags: ["Music Export"]
    } },
    "/my/music/exports/jobs": {
      get: {
        description: `All items associated to a users export request
`,
        operationId: "getMusicExportJobs",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Boolean age check",
            in: "query",
            name: "over16",
            required: !0,
            type: "boolean"
          },
          {
            description: "Specify Vendor Jobs",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "query",
            name: "vendor",
            required: !1,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportJob" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Jobs",
        tags: ["Music Export"]
      },
      post: {
        description: `Create Export Job for a user
`,
        operationId: "postMusicExportJob",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Boolean age check",
            in: "query",
            name: "over16",
            required: !0,
            type: "boolean"
          },
          {
            description: "Specify Vendor Jobs",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "query",
            name: "vendor",
            required: !1,
            type: "string"
          },
          {
            description: "",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/MusicExportJob" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Jobs",
        tags: ["Music Export"]
      }
    },
    "/my/music/exports/tracks": { get: {
      description: `Retrieves vendor and status specific tracks
`,
      operationId: "getMusicExportTracks",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Boolean age check",
          in: "query",
          name: "over16",
          required: !0,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Specify Vendor Tracks",
          enum: [
            "spotify",
            "deezer",
            "youtube",
            "itunes"
          ],
          in: "query",
          name: "vendor",
          required: !1,
          type: "string"
        },
        {
          description: "Specify Track status",
          enum: [
            "failed",
            "done",
            "pending"
          ],
          in: "query",
          name: "status",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/MusicExportJob" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/MusicExportErrorResponse" }
        }
      },
      summary: "Music Export Tracks",
      tags: ["Music Export"]
    } },
    "/my/music/favourites": {
      get: {
        description: `List of favourited tracks and clips for a given user for BBC Music.
`,
        operationId: "getPersonalisedMusicFavourites",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          },
          {
            description: "Filters activities based on the type of action",
            enum: [
              "favourited",
              "unfavourited"
            ],
            in: "query",
            name: "action",
            required: !1,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Tracks or Clips",
        tags: ["Music"]
      },
      post: {
        description: `Add multiple tracks and/or clips to a BBC Music user's favourites.

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedMusicFavouritesBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedMusicBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Tracks or Clips",
        tags: ["Music"]
      },
      put: {
        description: `Update tracks or clips from a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedMusicFavouritesBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedMusicBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Tracks or Clips",
        tags: ["Music"]
      }
    },
    "/my/music/favourites/{type}": { get: {
      description: `List of favourited tracks or clips for a given user for BBC Music.
`,
      operationId: "getPersonalisedMusicFavouritesByType",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Supported Music favourite types: Clips or Tracks",
          enum: [
            "clips",
            "tracks"
          ],
          in: "path",
          name: "type",
          required: !0,
          type: "string"
        },
        {
          description: "Filters activities based on the type of action",
          enum: [
            "favourited",
            "unfavourited"
          ],
          in: "query",
          name: "action",
          required: !1,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
        }
      },
      summary: "Favourite Tracks or Clips by Type",
      tags: ["Music"]
    } },
    "/my/music/favourites/{type}/{id}": {
      delete: {
        description: `Delete track or clip from a BBC Music user favourites.
`,
        operationId: "deletePersonalisedMusicFavouritesByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music favourite types: Clips or Tracks",
            enum: [
              "clips",
              "tracks"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Clip PID or Track ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Track or Clip",
        tags: ["Music"]
      },
      get: {
        description: `Check to see if a single track or clip entity is in a users favourites - determines UX of add button.
`,
        operationId: "getPersonalisedMusicFavouritesByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music favourite types: Clips or Tracks",
            enum: [
              "clips",
              "tracks"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Clip PID or Track ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Track or Clip",
        tags: ["Music"]
      },
      post: {
        description: `Add track or clip to a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedMusicFavouritesByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music favourite types: Clips or Tracks",
            enum: [
              "clips",
              "tracks"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Clip PID or Track ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedMusicRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Track or Clip",
        tags: ["Music"]
      },
      put: {
        description: `Update tracks or clips from a BBC Music user favourites.

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedMusicFavouritesByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music favourite types: Clips or Tracks",
            enum: [
              "clips",
              "tracks"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Clip PID or Track ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedMusicRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Favourite Track or Clip",
        tags: ["Music"]
      }
    },
    "/my/music/follows": {
      get: {
        description: `List of followed networks, categories, artists, playlists and genres for a given user for BBC Music.
`,
        operationId: "getPersonalisedMusicFollows",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Filters activities based on the type of action",
            enum: [
              "followed",
              "unfollowed"
            ],
            in: "query",
            name: "action",
            required: !1,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Networks, Categories, Artists, Playlists and Genres",
        tags: ["Music"]
      },
      post: {
        description: `Add networks, categories, artists, playlists, networks, genres or services in a users follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedMusicFollowsBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Filters activities based on the type of action",
            enum: [
              "followed",
              "unfollowed"
            ],
            in: "query",
            name: "action",
            required: !1,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedMusicBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Networks, Categories, Artists, Playlists and Genres",
        tags: ["Music"]
      },
      put: {
        description: `Update networks, categories, artists, playlists, networks, genres or services in a users follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedMusicFollowsBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Filters activities based on the type of action",
            enum: [
              "followed",
              "unfollowed"
            ],
            in: "query",
            name: "action",
            required: !1,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedMusicBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Networks, Categories, Artists, Playlists and Genres",
        tags: ["Music"]
      }
    },
    "/my/music/follows/{type}": { get: {
      description: `List of followed networks, categories, artists, playlists, networks, genres, categories or services for a given BBC Music user.
`,
      operationId: "getPersonalisedMusicFollowsByType",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Supported Music follows types: Playlists, Services, Genres & Artists",
          enum: [
            "playlists",
            "services",
            "networks",
            "genres",
            "categories",
            "artists"
          ],
          in: "path",
          name: "type",
          required: !0,
          type: "string"
        },
        {
          description: "Filters activities based on the type of action",
          enum: [
            "followed",
            "unfollowed"
          ],
          in: "query",
          name: "action",
          required: !1,
          type: "string"
        },
        {
          description: "Omits music data from the response, defaults to true",
          in: "query",
          name: "music-data",
          required: !1,
          type: "boolean"
        },
        {
          description: "Specify context to be passed to Music API",
          enum: [
            "events",
            "ivote",
            "music",
            "musicplaylist",
            "programmes",
            "radio",
            "unknown"
          ],
          in: "query",
          name: "music_context",
          required: !1,
          type: "string"
        },
        {
          description: "Specify location to be passed to Music API",
          in: "query",
          name: "music_within_uk",
          required: !1,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
        }
      },
      summary: "Followed Networks, Categories, Artists, Playlists and Genres by Type",
      tags: ["Music"]
    } },
    "/my/music/follows/{type}/{id}": {
      delete: {
        description: `Remove a single network, category, artist, playlist, network, genre or service entity is in a users follows
`,
        operationId: "deletePersonalisedMusicFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music follows types: Playlists, Services, Genres & Artists",
            enum: [
              "playlists",
              "services",
              "networks",
              "genres",
              "categories",
              "artists"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Playlists, Services, Networks, Genres, Categories or Artists ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Network, Category, Artist, Playlist and Genre",
        tags: ["Music"]
      },
      get: {
        description: `Check to see if a single network, category, artist, playlist, network, genre or service entity is in a users follows - determines UX of add button.
`,
        operationId: "getPersonalisedMusicFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music follows types: Playlists, Services, Genres & Artists",
            enum: [
              "playlists",
              "services",
              "networks",
              "genres",
              "categories",
              "artists"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Playlists, Services, Networks, Genres, Categories or Artists ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Network, Category, Artist, Playlist and Genre",
        tags: ["Music"]
      },
      post: {
        description: `Add a single network, category, artist, playlist, network, genre or service entity is in a users follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedMusicFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music follows types: Playlists, Services, Genres & Artists",
            enum: [
              "playlists",
              "services",
              "networks",
              "genres",
              "categories",
              "artists"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Playlists, Services, Networks, Genres, Categories or Artists ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedMusicRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Network, Category, Artist, Playlist and Genre",
        tags: ["Music"]
      },
      put: {
        description: `Update a single network, category, artist, playlist, network, genre or service entity is in a users follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedMusicFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Music follows types: Playlists, Services, Genres & Artists",
            enum: [
              "playlists",
              "services",
              "networks",
              "genres",
              "categories",
              "artists"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "Playlists, Services, Networks, Genres, Categories or Artists ID",
            in: "path",
            name: "id",
            required: !0,
            type: "string"
          },
          {
            description: "Omits music data from the response, defaults to true",
            in: "query",
            name: "music-data",
            required: !1,
            type: "boolean"
          },
          {
            description: "Specify context to be passed to Music API",
            enum: [
              "events",
              "ivote",
              "music",
              "musicplaylist",
              "programmes",
              "radio",
              "unknown"
            ],
            in: "query",
            name: "music_context",
            required: !1,
            type: "string"
          },
          {
            description: "Specify location to be passed to Music API",
            in: "query",
            name: "music_within_uk",
            required: !1,
            type: "boolean"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedMusicRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedMusicSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedMusicErrorResponse" }
          }
        },
        summary: "Followed Network, Category, Artist, Playlist and Genre",
        tags: ["Music"]
      }
    },
    "/my/music/preferences/export": {
      delete: {
        description: `Remove export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
`,
        operationId: "deleteMusicPreferencesExport",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Preferences",
        tags: ["Music Export"]
      },
      get: {
        description: `Returns export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
`,
        operationId: "getMusicPreferencesExport",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportPreferencesResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Preferences",
        tags: ["Music Export"]
      },
      post: {
        description: `Create export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
`,
        operationId: "postMusicPreferencesExport",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/MusicExportPreferences" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportSuccess" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Preferences",
        tags: ["Music Export"]
      }
    },
    "/my/music/preferences/export/{vendor}": {
      delete: {
        description: `Remove Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
`,
        operationId: "deleteMusicPreferencesExportVendor",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported 3rd Party Vendor",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "path",
            name: "vendor",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: { description: "OK" },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Vendor Preferences",
        tags: ["Music Export"]
      },
      get: {
        description: `Returns vendor specific export preferences for a given BBC Music user.
`,
        operationId: "getMusicPreferencesExportVendor",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported 3rd Party Vendor",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "path",
            name: "vendor",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/MusicExportPreferencesResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Vendor Preferences",
        tags: ["Music Export"]
      },
      post: {
        description: `Create Vendor specific export preferences (e.g. 3rd party vendors, partner id's) for a given BBC Music user.
`,
        operationId: "postMusicPreferencesExportVendor",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported 3rd Party Vendor",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "path",
            name: "vendor",
            required: !0,
            type: "string"
          },
          {
            description: "",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/MusicExportPreferences" }
          }
        ],
        responses: {
          200: { description: "OK" },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Vendor Preferences",
        tags: ["Music Export"]
      },
      put: {
        description: `Update vendor specific export preferences for a given BBC Music user.
`,
        operationId: "putMusicPreferencesExportVendor",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported 3rd Party Vendor",
            enum: [
              "spotify",
              "deezer",
              "youtube",
              "itunes"
            ],
            in: "path",
            name: "vendor",
            required: !0,
            type: "string"
          },
          {
            description: "",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/MusicExportPreferences" }
          }
        ],
        responses: {
          200: { description: "OK" },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/MusicExportErrorResponse" }
          }
        },
        summary: "Music Export Vendor Preferences",
        tags: ["Music Export"]
      }
    },
    "/my/networks/follows": {
      delete: {
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          },
          {
            in: "body",
            name: "Body",
            required: !0,
            schema: { $ref: "#/definitions/Body_3" }
          }
        ],
        responses: {
          202: { description: "Request successfully sent to UAS." },
          400: {
            description: "The request was malformed.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          },
          401: {
            description: "There was an error with the supplied `Authorization` header.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "Unfollow network",
        tags: ["Personalised Networks"]
      },
      get: {
        description: `List of followed networks for a given user.
`,
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedNetworksResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "List of followed networks",
        tags: ["Personalised Networks"]
      },
      post: {
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          },
          {
            in: "body",
            name: "Body",
            required: !0,
            schema: { $ref: "#/definitions/Body_2" }
          }
        ],
        responses: {
          202: { description: "Request successfully sent to UAS." },
          400: {
            description: "The request was malformed.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          },
          401: {
            description: "There was an error with the supplied `Authorization` header.",
            schema: { $ref: "#/definitions/ErrorResponse" }
          }
        },
        summary: "Follow network",
        tags: ["Personalised Networks"]
      }
    },
    "/my/plays": { post: {
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          in: "body",
          name: "Body",
          required: !0,
          schema: { $ref: "#/definitions/Body_4" }
        }
      ],
      responses: {
        202: { description: "Request successfully sent to UAS." },
        400: {
          description: "The request was malformed.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Write Play Event",
      tags: ["Personalised Plays"]
    } },
    "/my/playspace/containers/suggested": { get: {
      description: `Suggested Playspace Container
`,
      operationId: "suggestContainer",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Clip or Episode PID of the previous or first content item in the Playspace stream.",
          in: "query",
          name: "previous_pid",
          required: !0,
          type: "string"
        },
        {
          description: "Container ID of the previous container in the Playspace stream.",
          in: "query",
          name: "previous_container",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PlayspaceContainer" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Suggested Playspace Container",
      tags: ["Playspace"]
    } },
    "/my/playspace/containers/{id}": { get: {
      description: `Playspace Container by ID
`,
      operationId: "getContainer",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Playspace Container ID",
          in: "path",
          name: "id",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PlayspaceContainer" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        404: {
          description: "No Playspace container with given ID could be found.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      schemes: ["https"],
      summary: "Playspace Container by ID",
      tags: ["Playspace"]
    } },
    "/my/programmes/recommendations": { get: {
      description: `Recommended Programmes from the Audience Platforms' Recomendations Service
`,
      operationId: "getRecommendations",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Only return available results for the web/mobile.",
          enum: [
            "web",
            "mobile"
          ],
          in: "query",
          name: "rights",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/ProgrammesResponse" }
        },
        401: {
          description: "There was an error with the supplied `Authorization` header.",
          schema: { $ref: "#/definitions/ErrorResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/ErrorResponse" }
        }
      },
      summary: "Recommended Programmes",
      tags: ["Programmes"]
    } },
    "/my/radio/favourites": {
      get: {
        description: `List of favourited episodes and clips for a given user for iPlayer Radio.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
        operationId: "getPersonalisedRadioFavourites",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          },
          {
            description: "Sort order for Personalised Radio results",
            enum: [
              "programme_titles",
              "available_from_date",
              "available_to_date"
            ],
            in: "query",
            name: "sort",
            required: !1,
            type: "string"
          },
          {
            description: "Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'",
            in: "query",
            name: "show_all_activity",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        schemes: ["https"],
        summary: "Favourite Episodes and Clips",
        tags: ["Radio"]
      },
      post: {
        description: `Add User favourites

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedRadioBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedRadioBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episodes and Clips",
        tags: ["Radio"]
      },
      put: {
        description: `Update user favourites

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedRadioBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedRadioBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episodes and Clips",
        tags: ["Radio"]
      }
    },
    "/my/radio/favourites/{type}": { get: {
      description: `List of followed 'clips' or 'episode' items for a given iPlayer Radio user

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
      operationId: "getPersonalisedRadioFavouritesByType",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Supported Radio favourite types: Clips or Episodes",
          enum: [
            "clips",
            "episodes"
          ],
          in: "path",
          name: "type",
          required: !0,
          type: "string"
        },
        {
          description: "Sort order for Personalised Radio results",
          enum: [
            "programme_titles",
            "available_from_date",
            "available_to_date"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        },
        {
          description: "Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'",
          in: "query",
          name: "show_all_activity",
          required: !1,
          type: "boolean"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
        }
      },
      summary: "Favourite Episodes and Clips by Type",
      tags: ["Radio"]
    } },
    "/my/radio/favourites/{type}/{pid}": {
      delete: {
        description: `Remove User favourite
`,
        operationId: "deletePersonalisedRadioByActivityTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio favourite types: Clips or Episodes",
            enum: [
              "clips",
              "episodes"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episode or Clip",
        tags: ["Radio"]
      },
      get: {
        description: `Check to see if a single clip or episode entity is in a users favourites - determines UX of add button.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
        operationId: "getPersonalisedRadioByActivityTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio favourite types: Clips or Episodes",
            enum: [
              "clips",
              "episodes"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          },
          {
            description: "Include items which have been 'soft' unfavourited in response. I.e items with UAS type of 'unfavourited'",
            in: "query",
            name: "show_all_activity",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episode or Clip",
        tags: ["Radio"]
      },
      post: {
        description: `Add User favourite

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedRadioByActivityTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio favourite types: Clips or Episodes",
            enum: [
              "clips",
              "episodes"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedRadioRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episode or Clip",
        tags: ["Radio"]
      },
      put: {
        description: `Update user favourite

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedRadioByActivityTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio favourite types: Clips or Episodes",
            enum: [
              "clips",
              "episodes"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          },
          {
            description: "Action favourited or unfavourited",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedRadioRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Favourite Episode or Clip",
        tags: ["Radio"]
      }
    },
    "/my/radio/follows": {
      get: {
        description: `List of favourited brands and series for a given user for iPlayer Radio.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
        operationId: "getPersonalisedRadioFollows",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Paginated results offset",
            in: "query",
            name: "offset",
            required: !1,
            type: "integer"
          },
          {
            description: "Paginated results limit",
            in: "query",
            name: "limit",
            required: !1,
            type: "integer"
          },
          {
            description: "Sort order for Personalised Radio results",
            enum: [
              "programme_titles",
              "available_from_date",
              "available_to_date"
            ],
            in: "query",
            name: "sort",
            required: !1,
            type: "string"
          },
          {
            description: "Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'",
            in: "query",
            name: "show_all_activity",
            required: !1,
            type: "boolean"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brands and Series",
        tags: ["Radio"]
      },
      post: {
        description: `Add 'brand' or 'series' items to a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedRadioFollowsBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedRadioBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brands and Series",
        tags: ["Radio"]
      },
      put: {
        description: `Update 'brands' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedRadioFollowsBatch",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: {
              items: { $ref: "#/definitions/PersonalisedRadioBatchRequest" },
              type: "array"
            }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brands and Series",
        tags: ["Radio"]
      }
    },
    "/my/radio/follows/{type}": { get: {
      description: `List of followed 'brand' or 'series' items for a given iPlayer Radio user

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
      operationId: "getPersonalisedRadioFollowsByType",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Supported Radio follows types: Brands or Series",
          enum: [
            "brands",
            "series"
          ],
          in: "path",
          name: "type",
          required: !0,
          type: "string"
        },
        {
          description: "Sort order for Personalised Radio results",
          enum: [
            "programme_titles",
            "available_from_date",
            "available_to_date"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Include items which have been 'soft' unfollowed in response. I.e items with UAS type of 'unfollowed'",
          in: "query",
          name: "show_all_activity",
          required: !1,
          type: "boolean"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
        }
      },
      summary: "Followed Brands or Series by Type",
      tags: ["Radio"]
    } },
    "/my/radio/follows/{type}/{pid}": {
      delete: {
        description: `Remove 'brand' or 'series' items from a users iPlayer Radio follows
`,
        operationId: "deletePersonalisedRadioFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio follows types: Brands or Series",
            enum: [
              "brands",
              "series"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brand or Series",
        tags: ["Radio"]
      },
      get: {
        description: `Check to see if a single brand or series entity is in a users follows - determines UX of add button.
`,
        operationId: "getPersonalisedRadioFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio follows types: Brands or Series",
            enum: [
              "brands",
              "series"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brand or Series",
        tags: ["Radio"]
      },
      post: {
        description: `Add 'brand' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "postPersonalisedRadioFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio follows types: Brands or Series",
            enum: [
              "brands",
              "series"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedRadioRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brand or Series",
        tags: ["Radio"]
      },
      put: {
        description: `Update 'brand' or 'series' items from a users iPlayer Radio follows

N.B. Any HTML tags submitted in metadata will be removed
`,
        operationId: "putPersonalisedRadioFollowsByTypeById",
        parameters: [
          {
            default: "Bearer OAUTH_TOKEN",
            description: "Bearer OAUTH_TOKEN",
            in: "header",
            name: "Authorization",
            required: !0,
            type: "string"
          },
          {
            default: "idv5",
            description: "Authentication type",
            in: "header",
            name: "X-Authentication-Provider",
            required: !0,
            type: "string"
          },
          {
            description: "API_KEY",
            in: "header",
            name: "X-API-Key",
            required: !0,
            type: "string"
          },
          {
            description: "Supported Radio follows types: Brands or Series",
            enum: [
              "brands",
              "series"
            ],
            in: "path",
            name: "type",
            required: !0,
            type: "string"
          },
          {
            description: "pid",
            in: "path",
            name: "pid",
            required: !0,
            type: "string"
          },
          {
            description: "Action followed or unfollowed",
            in: "body",
            name: "body",
            required: !0,
            schema: { $ref: "#/definitions/PersonalisedRadioRequest" }
          }
        ],
        responses: {
          200: {
            description: "OK",
            schema: { $ref: "#/definitions/PersonalisedRadioSuccessResponse" }
          },
          default: {
            description: "Unexpected error",
            schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
          }
        },
        summary: "Followed Brand or Series",
        tags: ["Radio"]
      }
    },
    "/my/radio/plays": { get: {
      description: `Returns mixed episode and clip plays for a given BBC iPlayer radio user.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining data as a Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
      operationId: "getPersonalisedRadioPlays",
      parameters: [
        {
          default: "Bearer OAUTH_TOKEN",
          description: "Bearer OAUTH_TOKEN",
          in: "header",
          name: "Authorization",
          required: !0,
          type: "string"
        },
        {
          default: "idv5",
          description: "Authentication type",
          in: "header",
          name: "X-Authentication-Provider",
          required: !0,
          type: "string"
        },
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Sort order for Personalised Radio results",
          enum: [
            "programme_titles",
            "available_from_date",
            "available_to_date"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        },
        {
          description: "Include expired/unavailable items",
          in: "query",
          name: "show_all_activity",
          required: !1,
          type: "boolean"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PersonalisedRadioResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PersonalisedRadioErrorResponse" }
        }
      },
      summary: "Played Episode or Clip",
      tags: ["Radio"]
    } },
    "/podcasts": { get: {
      description: `Retrieve all Podcasts
`,
      operationId: "getPodcasts",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        },
        {
          description: "Sort order for Podcasts results",
          enum: [
            "title",
            "-title",
            "available_from_date",
            "-available_from_date"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        },
        {
          description: "Network Master Brand ID (mid)",
          in: "query",
          name: "network",
          required: !1,
          type: "string"
        },
        {
          description: "Network URL key",
          in: "query",
          name: "network_url_key",
          required: !1,
          type: "string"
        },
        {
          description: "Category ID",
          in: "query",
          name: "category",
          required: !1,
          type: "string"
        },
        {
          description: "Search query String",
          in: "query",
          name: "q",
          required: !1,
          type: "string"
        },
        {
          description: "Local, National or Regional Coverage",
          enum: [
            "local",
            "national",
            "regional"
          ],
          in: "query",
          name: "coverage",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PodcastsResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PodcastErrorResponse" }
        }
      },
      summary: "All Podcasts",
      tags: ["Podcasts"]
    } },
    "/podcasts/featured": { get: {
      description: `Retrieve featured podcasts
`,
      operationId: "getPodcastsFeatured",
      parameters: [{
        description: "API_KEY",
        in: "header",
        name: "X-API-Key",
        required: !0,
        type: "string"
      }],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PodcastsFeaturedResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PodcastErrorResponse" }
        }
      },
      summary: "Featured Podcasts",
      tags: ["Podcasts"]
    } },
    "/podcasts/{pid}": { get: {
      description: `Retrieve data about the podcast with the supplied PID
`,
      operationId: "getPodcastByPid",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "pid",
          in: "path",
          name: "pid",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PodcastsResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PodcastErrorResponse" }
        }
      },
      summary: "Podcast",
      tags: ["Podcasts"]
    } },
    "/podcasts/{pid}/episodes": { get: {
      description: `Retrieve all episodes for a specific podcast
`,
      operationId: "getPodcastEpisodes",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "pid",
          in: "path",
          name: "pid",
          required: !0,
          type: "string"
        },
        {
          description: "Paginated results offset",
          in: "query",
          name: "offset",
          required: !1,
          type: "integer"
        },
        {
          description: "Paginated results limit",
          in: "query",
          name: "limit",
          required: !1,
          type: "integer"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PodcastEpisodesResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PodcastErrorResponse" }
        }
      },
      summary: "Podcast Episodes",
      tags: ["Podcasts"]
    } },
    "/radio/networks.json": { get: {
      description: `All iPlayer Radio networks - contains business logic for masterbrand and service relationships
`,
      operationId: "getRadioNetworks",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Returns all networks needed for iPlayer Radio responsive web navigation",
          in: "query",
          name: "preset",
          required: !1,
          type: "boolean"
        },
        {
          description: "Returns all networks available internationally",
          in: "query",
          name: "international",
          required: !1,
          type: "boolean"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/NetworksResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/RadioErrorResponse" }
        }
      },
      summary: "Networks",
      tags: ["Networks"]
    } },
    "/radio/popular": { get: {
      description: `Retrieve Popular Episodes & Clips
`,
      operationId: "getPopularEpisodesClips",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Programme type required. Accepts comma separated values",
          enum: [
            "episode",
            "clip",
            "episode,clip"
          ],
          in: "query",
          name: "type",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by deduplication rule. E.g. 'tleo' returns programmes with distinct top level episode objects",
          enum: ["tleo"],
          in: "query",
          name: "distinct",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by network master brand ID (mid). Accepts comma separated values",
          in: "query",
          name: "network",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by network URL key. Accepts comma separated values",
          in: "query",
          name: "network_url_key",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by category. Accepts comma separated values",
          in: "query",
          name: "category",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by format. Accepts comma separated values",
          in: "query",
          name: "format",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by group. Accepts comma separated values",
          enum: [
            "tv",
            "radio",
            "tv,radio"
          ],
          in: "query",
          name: "group",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by programme media type. Accepts comma separated values",
          enum: [
            "audio",
            "video",
            "audio,video"
          ],
          in: "query",
          name: "media_type",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by container. Accepts any pid e.g. brand,series,episode",
          in: "query",
          name: "container",
          required: !1,
          type: "string"
        },
        {
          collectionFormat: "csv",
          description: "Filter by media set name. Accepts comma separated combinations of the following: pc,mobile-download,android-download-high,apple-ios-download-high,mobile-cellular-main,mobile-phone-main,iptv-all",
          enum: [
            "pc",
            "mobile-download",
            "android-download-high",
            "apple-ios-download-high",
            "mobile-cellular-main",
            "mobile-phone-main",
            "iptv-all"
          ],
          in: "query",
          items: {},
          name: "media_set",
          required: !1,
          type: "array"
        },
        {
          description: "Search query String",
          in: "query",
          name: "q",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/PopularResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/PopularErrorResponse" }
        }
      },
      summary: "Popular Episodes & Clips",
      tags: ["Programmes"]
    } },
    "/radio/programmes": { get: {
      description: `Provides a paginated list of programmes by PID (brand, series, episode and clip). Accepts various filters and sorting methods.

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
      operationId: "getRadioProgrammes",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "Filter by provided query. E.g. 'tleo' returns top level objects, ie. brands, orphaned series, and orphaned episodes",
          enum: ["tleo"],
          in: "query",
          name: "kind",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by network master brand ID (mid). Accepts comma separated values",
          in: "query",
          name: "network",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by network URL key. Accepts comma separated values",
          in: "query",
          name: "network_url_key",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by category id. Accepts comma separated values. See /category endpoint below for the type of response provided",
          in: "query",
          name: "category",
          required: !1,
          type: "string"
        },
        {
          description: "Sort by provided query. E.g. 'title' sorts in ascending order, and -title sorts in descending order",
          enum: [
            "available_from_date",
            "-available_from_date",
            "title",
            "-title"
          ],
          in: "query",
          name: "sort",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by container. Accepts any brand or series pid",
          in: "query",
          name: "container",
          required: !1,
          type: "string"
        },
        {
          description: "Filter by programme type. Accepts comma separated values",
          enum: [
            "brand",
            "series",
            "episode",
            "clip",
            "episode,clip"
          ],
          in: "query",
          name: "type",
          required: !1,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/ProgrammesResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/RadioErrorResponse" }
        }
      },
      summary: "Radio programmes",
      tags: ["Programmes"]
    } },
    "/radio/programmes/{pid}": { get: {
      description: `Find programmes by PID (brand, series, episode and clip)

N.B.  Swagger schemas cannot currently handle multiple combinations of object in an array i.e. a mix of Episode
and Clip Summaries so we are defining results as an array of Programme Summary here.  This will be resolved in V3 with full support for
 anyOf https://www.openapis.org/blog/2017/01/24/a-new-year-a-new-specification
`,
      operationId: "getRadioProgrammesByPid",
      parameters: [
        {
          description: "API_KEY",
          in: "header",
          name: "X-API-Key",
          required: !0,
          type: "string"
        },
        {
          description: "pid",
          in: "path",
          name: "pid",
          required: !0,
          type: "string"
        }
      ],
      responses: {
        200: {
          description: "OK",
          schema: { $ref: "#/definitions/ProgrammesResponse" }
        },
        default: {
          description: "Unexpected error",
          schema: { $ref: "#/definitions/RadioErrorResponse" }
        }
      },
      summary: "Available radio programme by Pid",
      tags: ["Programmes"]
    } }
  },
  definitions: {
    AncestorSummary: {
      properties: {
        ancestor_type: { type: "string" },
        id: { type: "string" },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        titles: { $ref: "#/definitions/AncestorTitles" },
        type: { type: "string" }
      },
      required: [
        "ancestor_type",
        "id",
        "images",
        "titles",
        "type"
      ],
      type: "object"
    },
    AncestorTitles: {
      properties: {
        title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "title",
        "type"
      ],
      type: "object"
    },
    AvailableVersions: {
      properties: {
        available: { type: "string" },
        available_from_date: { type: "string" },
        available_to_date: { type: "string" },
        duration: { type: "string" },
        has_guidance: { type: "boolean" },
        media_set: { type: "string" },
        type: { type: "string" },
        version_pid: { type: "string" },
        version_type: { type: "string" }
      },
      required: [
        "available",
        "available_from_date",
        "available_to_date",
        "duration",
        "has_guidance",
        "media_set",
        "type",
        "version_pid",
        "version_type"
      ],
      type: "object"
    },
    Body: {
      properties: {
        category_id: { type: "string" },
        platform: {
          enum: [
            "responsiveweb",
            "app"
          ],
          type: "string"
        }
      },
      required: [
        "category_id",
        "platform"
      ],
      type: "object"
    },
    Body_1: {
      properties: {
        category_id: { type: "string" },
        platform: {
          enum: [
            "responsiveweb",
            "app"
          ],
          type: "string"
        }
      },
      required: [
        "category_id",
        "platform"
      ],
      type: "object"
    },
    Body_2: {
      properties: {
        platform: {
          enum: [
            "responsiveweb",
            "app"
          ],
          type: "string"
        },
        service_id: { type: "string" }
      },
      required: [
        "platform",
        "service_id"
      ],
      type: "object"
    },
    Body_3: {
      properties: {
        platform: {
          enum: [
            "responsiveweb",
            "app"
          ],
          type: "string"
        },
        service_id: { type: "string" }
      },
      required: [
        "platform",
        "service_id"
      ],
      type: "object"
    },
    Body_4: {
      properties: {
        action: {
          enum: [
            "started",
            "ended",
            "paused",
            "heartbeat"
          ],
          type: "string"
        },
        elapsed_time: { type: "integer" },
        pid: { type: "string" },
        resource_type: {
          enum: [
            "episode",
            "clip"
          ],
          type: "string"
        },
        version_pid: { type: "string" }
      },
      required: [
        "action",
        "elapsed_time",
        "pid",
        "resource_type",
        "version_pid"
      ],
      type: "object"
    },
    BrandSummary: {
      properties: {
        available_versions: {
          items: { $ref: "#/definitions/AvailableVersions" },
          type: "array"
        },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        latest_available_episodes: {
          items: { $ref: "#/definitions/EpisodeSummary" },
          type: "array"
        },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        total_available_episodes: { type: "integer" },
        type: {
          enum: ["brand_summary"],
          type: "string"
        }
      },
      required: [
        "images",
        "latest_available_episodes",
        "network_summary",
        "pid",
        "short_synopsis",
        "titles",
        "total_available_episodes",
        "type"
      ],
      type: "object"
    },
    Broadcast: {
      properties: {
        duration: { type: "integer" },
        end: { type: "string" },
        is_audio_described: { type: "boolean" },
        is_blanked: { type: "boolean" },
        is_critical: { type: "boolean" },
        is_live: { type: "boolean" },
        is_repeat: { type: "boolean" },
        is_webcast: { type: "boolean" },
        pid: { type: "string" },
        programme: { $ref: "#/definitions/ProgrammeSummary" },
        service_id: { type: "string" },
        start: { type: "string" },
        type: { type: "string" },
        version_pid: { type: "string" }
      },
      required: [
        "duration",
        "end",
        "is_audio_described",
        "is_blanked",
        "is_critical",
        "is_live",
        "is_repeat",
        "is_webcast",
        "pid",
        "service_id",
        "start",
        "type",
        "version_pid"
      ],
      type: "object"
    },
    BroadcastsResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/Broadcast" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    CategoriesResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/Category" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    Category: {
      properties: {
        category_type: { type: "string" },
        child_categories: {
          items: { $ref: "#/definitions/ChildCategory" },
          type: "array"
        },
        depth: { type: "integer" },
        id: { type: "string" },
        pip_id: { type: "string" },
        title: { type: "string" },
        type: { type: "string" },
        url_key: { type: "string" }
      },
      required: [
        "category_type",
        "child_categories",
        "depth",
        "id",
        "pip_id",
        "title",
        "type",
        "url_key"
      ],
      type: "object"
    },
    CategoryError: {
      properties: {
        href: { type: "string" },
        id: { type: "string" },
        message: { type: "string" },
        replied_at: { type: "string" },
        status: { type: "integer" }
      },
      required: [
        "href",
        "id",
        "message",
        "replied_at",
        "status"
      ],
      type: "object"
    },
    CategoryErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/CategoryError" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "errors"
      ],
      type: "object"
    },
    CategorySummary: {
      properties: {
        category_type: { type: "string" },
        id: { type: "string" },
        key: { type: "string" },
        title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "category_type",
        "id",
        "key",
        "title",
        "type"
      ],
      type: "object"
    },
    ChildCategory: {
      properties: {
        category_type: { type: "string" },
        child_categories: {
          items: { $ref: "#/definitions/ChildCategory" },
          type: "array"
        },
        depth: { type: "integer" },
        id: { type: "string" },
        pip_id: { type: "string" },
        title: { type: "string" },
        type: { type: "string" },
        url_key: { type: "string" }
      },
      required: [
        "category_type",
        "child_categories",
        "depth",
        "id",
        "pip_id",
        "title",
        "type",
        "url_key"
      ],
      type: "object"
    },
    ClipSummary: {
      properties: {
        ancestors: {
          items: { $ref: "#/definitions/AncestorSummary" },
          type: "array"
        },
        available_versions: {
          items: { $ref: "#/definitions/AvailableVersions" },
          type: "array"
        },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        media_type: { type: "string" },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        release_date: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        type: {
          enum: ["clip_summary"],
          type: "string"
        }
      },
      required: [
        "ancestors",
        "available_versions",
        "images",
        "media_type",
        "network_summary",
        "pid",
        "release_date",
        "short_synopsis",
        "titles",
        "type"
      ],
      type: "object"
    },
    Contact: {
      properties: {
        handle: { type: "string" },
        name: { type: "string" },
        service: { type: "string" },
        url: { type: "string" }
      },
      required: [
        "handle",
        "name",
        "service",
        "url"
      ],
      type: "object"
    },
    DateRange: {
      properties: {
        end: { type: "string" },
        start: { type: "string" }
      },
      required: [
        "end",
        "start"
      ],
      type: "object"
    },
    DisplayModule: {
      properties: {
        description: { type: "string" },
        title: { type: "string" },
        type: { type: "string" },
        uri: { type: "string" }
      },
      type: "object"
    },
    Empty: {
      type: "object",
      "x-nullable": !0
    },
    EpisodeSummary: {
      properties: {
        ancestors: {
          items: { $ref: "#/definitions/AncestorSummary" },
          type: "array"
        },
        available_versions: {
          items: { $ref: "#/definitions/AvailableVersions" },
          type: "array"
        },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        media_type: { type: "string" },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        release_date: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        type: {
          enum: ["episode_summary"],
          type: "string"
        }
      },
      required: [
        "ancestors",
        "available_versions",
        "images",
        "media_type",
        "network_summary",
        "pid",
        "release_date",
        "short_synopsis",
        "titles",
        "type"
      ],
      type: "object"
    },
    Error: {
      properties: {
        href: { type: "string" },
        id: { type: "string" },
        message: { type: "string" },
        replied_at: { type: "string" }
      },
      required: [
        "href",
        "id",
        "message",
        "replied_at"
      ],
      type: "object"
    },
    ErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/Error" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "errors"
      ],
      type: "object"
    },
    ExperienceResponse: {
      properties: {
        $schema: { type: "string" },
        data: {
          items: { $ref: "#/definitions/DisplayModule" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "data"
      ],
      type: "object"
    },
    ExternalPartner: {
      properties: {
        type: { type: "string" },
        value: { type: "string" }
      },
      required: [
        "type",
        "value"
      ],
      type: "object"
    },
    Image: {
      properties: {
        id: { type: "string" },
        image_type: { type: "string" },
        template_url: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "id",
        "image_type",
        "template_url",
        "type"
      ],
      type: "object"
    },
    MetaData: {
      properties: {
        miscellaneous: { $ref: "#/definitions/Miscellaneous" },
        origin: { $ref: "#/definitions/Origin" },
        programme_type: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "miscellaneous",
        "origin",
        "programme_type",
        "type"
      ],
      type: "object"
    },
    Miscellaneous: {
      properties: { title: { type: "string" } },
      required: ["title"],
      type: "object"
    },
    MusicExportError: {
      properties: {
        message: { type: "string" },
        replied_at: { type: "integer" },
        status: { type: "integer" }
      },
      required: [
        "message",
        "replied_at",
        "status"
      ],
      type: "object"
    },
    MusicExportErrorResponse: {
      properties: {
        errors: {
          items: { $ref: "#/definitions/MusicExportError" },
          type: "array"
        },
        schema: { type: "string" }
      },
      required: [
        "errors",
        "schema"
      ],
      type: "object"
    },
    MusicExportJob: {
      properties: {
        created_at: { type: "string" },
        id: { type: "string" },
        job_id: { type: "string" },
        status: { type: "string" },
        vendor: { type: "string" }
      },
      required: [
        "created_at",
        "id",
        "job_id",
        "status",
        "vendor"
      ],
      type: "object"
    },
    MusicExportPreferences: {
      properties: {
        access_expires_at: { type: "string" },
        access_token: { type: "string" },
        add_plus_export: { type: "boolean" },
        authorization_code: { type: "string" },
        last_export: { type: "string" },
        legacy_state: { type: "string" },
        partner_id: { type: "string" },
        refresh_token: { type: "string" },
        terms: { type: "boolean" },
        vendor: { type: "string" }
      },
      required: [
        "access_expires_at",
        "access_token",
        "add_plus_export",
        "authorization_code",
        "last_export",
        "legacy_state",
        "partner_id",
        "refresh_token",
        "terms",
        "vendor"
      ],
      type: "object"
    },
    MusicExportPreferencesResponse: {
      properties: {
        method: { type: "string" },
        replied_at: { type: "string" },
        results: {
          items: { $ref: "#/definitions/MusicExportPreferences" },
          type: "array"
        },
        schema: { type: "string" },
        total: { type: "integer" }
      },
      required: [
        "method",
        "replied_at",
        "results",
        "schema",
        "total"
      ],
      type: "object"
    },
    MusicExportSuccess: {
      properties: {
        method: { type: "string" },
        replied_at: { type: "string" },
        schema: { type: "string" }
      },
      required: [
        "method",
        "replied_at",
        "schema"
      ],
      type: "object"
    },
    MusicPopularityArtist: {
      properties: {
        gid: { type: "string" },
        id: { type: "string" },
        imagePid: { type: "string" },
        name: { type: "string" },
        score: { type: "integer" },
        sortName: { type: "string" }
      },
      required: [
        "gid",
        "id",
        "imagePid",
        "name",
        "score",
        "sortName"
      ],
      type: "object"
    },
    MusicPopularityArtists: {
      properties: {
        limit: { type: "integer" },
        method: { type: "string" },
        offset: { type: "integer" },
        repliedAt: { type: "string" },
        results: {
          items: { $ref: "#/definitions/MusicPopularityArtist" },
          type: "array"
        },
        schema: { type: "string" },
        total: { type: "integer" }
      },
      required: [
        "method",
        "repliedAt",
        "results",
        "schema",
        "total"
      ],
      type: "object"
    },
    MusicPopularityError: {
      properties: {
        errors: {
          items: { type: "string" },
          type: "array"
        },
        schema: { type: "string" }
      },
      type: "object"
    },
    MusicPopularityPlaylist: {
      properties: {
        categories: {
          items: { type: "string" },
          type: "array"
        },
        commentsEnabled: { type: "boolean" },
        description: { type: "string" },
        externalPartners: {
          items: { $ref: "#/definitions/ExternalPartner" },
          type: "array"
        },
        genre: { type: "string" },
        id: { type: "string" },
        imagePid: { type: "string" },
        imageUrl: { type: "string" },
        kind: { type: "string" },
        mood: { type: "string" },
        oneOff: { type: "boolean" },
        playlistPlaybackType: { type: "string" },
        score: { type: "integer" },
        serviceId: { type: "string" },
        title: { type: "string" },
        updatedAt: { type: "string" },
        visibility: { type: "string" },
        wideImagePid: { type: "string" },
        wideImageUrl: { type: "string" }
      },
      required: [
        "categories",
        "commentsEnabled",
        "description",
        "externalPartners",
        "genre",
        "id",
        "imagePid",
        "imageUrl",
        "kind",
        "mood",
        "oneOff",
        "playlistPlaybackType",
        "score",
        "serviceId",
        "title",
        "updatedAt",
        "visibility",
        "wideImagePid",
        "wideImageUrl"
      ],
      type: "object"
    },
    MusicPopularityPlaylists: {
      properties: {
        limit: { type: "integer" },
        method: { type: "string" },
        offset: { type: "integer" },
        repliedAt: { type: "string" },
        results: {
          items: { $ref: "#/definitions/MusicPopularityPlaylist" },
          type: "array"
        },
        schema: { type: "string" },
        total: { type: "integer" }
      },
      required: [
        "method",
        "repliedAt",
        "results",
        "schema",
        "total"
      ],
      type: "object"
    },
    MusicPopularityTrack: {
      properties: {
        album: { type: "string" },
        artistGid: { type: "string" },
        artistName: { type: "string" },
        artists: {
          items: { $ref: "#/definitions/MusicTrackArtist" },
          type: "array"
        },
        baseTitle: { type: "string" },
        classical: { type: "boolean" },
        id: { type: "string" },
        mergedIds: {
          items: { type: "string" },
          type: "array"
        },
        preferredMultiplayRecordAudio: { $ref: "#/definitions/MusicRecordAudio" },
        preferredRecordAudio: { $ref: "#/definitions/MusicRecordAudio" },
        radioEdit: { type: "boolean" },
        recordAudio: {
          items: { $ref: "#/definitions/MusicRecordAudio" },
          type: "array"
        },
        recordImageHref: { type: "string" },
        recordImagePid: { type: "string" },
        score: { type: "integer" },
        title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "id",
        "score"
      ],
      type: "object"
    },
    MusicPopularityTracks: {
      properties: {
        limit: { type: "integer" },
        method: { type: "string" },
        offset: { type: "integer" },
        repliedAt: { type: "string" },
        results: {
          items: { $ref: "#/definitions/MusicPopularityTrack" },
          type: "array"
        },
        schema: { type: "string" },
        total: { type: "integer" }
      },
      required: [
        "method",
        "repliedAt",
        "results",
        "schema",
        "total"
      ],
      type: "object"
    },
    MusicRecordAudio: {
      properties: {
        audioType: { type: "string" },
        duration: { type: "integer" },
        identifier: { type: "string" },
        resourceType: { type: "string" }
      },
      required: [
        "audioType",
        "duration",
        "identifier",
        "resourceType"
      ],
      type: "object"
    },
    MusicTrackArtist: {
      properties: {
        gid: { type: "string" },
        imagePid: { type: "string" },
        name: { type: "string" },
        role: { type: "string" },
        sortName: { type: "string" }
      },
      required: [
        "gid",
        "imagePid",
        "name",
        "role",
        "sortName"
      ],
      type: "object"
    },
    Network: {
      properties: {
        active: { type: "boolean" },
        contacts: {
          items: { $ref: "#/definitions/Contact" },
          type: "array"
        },
        date_ranges: {
          items: { $ref: "#/definitions/DateRange" },
          type: "array"
        },
        group: { type: "string" },
        id: { type: "string" },
        international: { type: "boolean" },
        key: { type: "string" },
        preset: { type: "boolean" },
        promoted_category_summaries: {
          items: { $ref: "#/definitions/CategorySummary" },
          type: "array"
        },
        services: {
          items: { $ref: "#/definitions/Service" },
          type: "array"
        },
        short_title: { type: "string" },
        sort: { type: "integer" },
        title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "active",
        "contacts",
        "date_ranges",
        "group",
        "id",
        "international",
        "key",
        "preset",
        "services",
        "short_title",
        "sort",
        "title",
        "type"
      ],
      type: "object"
    },
    NetworkSummary: {
      properties: {
        active: { type: "boolean" },
        group: { type: "string" },
        id: { type: "string" },
        key: { type: "string" },
        titles: { $ref: "#/definitions/NetworkTitles" },
        type: { type: "string" }
      },
      required: [
        "active",
        "group",
        "id",
        "key",
        "titles",
        "type"
      ],
      type: "object"
    },
    NetworkTitles: {
      properties: {
        long_title: { type: "string" },
        short_title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "long_title",
        "short_title",
        "type"
      ],
      type: "object"
    },
    NetworksResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/Network" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    Origin: {
      properties: { type: { type: "string" } },
      required: ["type"],
      type: "object"
    },
    PersonalisedCategories: {
      properties: {
        created: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "created",
        "type"
      ],
      type: "object"
    },
    PersonalisedCategoriesResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "total"
      ],
      type: "object"
    },
    PersonalisedMusicActivity: {
      properties: {
        action: { type: "string" },
        activity: { type: "string" },
        added_at: { type: "string" },
        data: {
          items: { $ref: "#/definitions/PersonalisedMusicData" },
          type: "array"
        },
        domain: { type: "string" },
        id: { type: "string" },
        meta_data: { $ref: "#/definitions/PersonalisedMusicMetaData" },
        type: { type: "string" },
        urn: { type: "string" }
      },
      required: [
        "action",
        "activity",
        "added_at",
        "data",
        "domain",
        "id",
        "meta_data",
        "type",
        "urn"
      ],
      type: "object"
    },
    PersonalisedMusicArtist: {
      properties: {
        id: { type: "string" },
        images: {
          items: { $ref: "#/definitions/PersonalisedMusicImage" },
          type: "array"
        },
        name: { type: "string" },
        role: { type: "string" }
      },
      type: "object"
    },
    PersonalisedMusicBatchRequest: {
      properties: {
        action: { type: "string" },
        added_at: { type: "string" },
        context: { type: "string" },
        domain: { type: "string" },
        id: { type: "string" },
        meta_data: { $ref: "#/definitions/PersonalisedMusicMetaData" },
        type: { type: "string" }
      },
      required: [
        "action",
        "domain",
        "id",
        "type"
      ],
      type: "object"
    },
    PersonalisedMusicClip: {
      properties: {
        contributors: {
          items: { type: "string" },
          type: "array"
        },
        endDate: { type: "string" },
        entityType: { type: "string" },
        imageUrl: { type: "string" },
        masterbrandMid: { type: "string" },
        mediaType: { type: "string" },
        parentProgramme: { $ref: "#/definitions/PersonalisedMusicClipParentProgramme" },
        pid: { type: "string" },
        startDate: { type: "string" },
        synopsis: { type: "string" },
        title: { type: "string" },
        version: { $ref: "#/definitions/PersonalisedMusicVersion" }
      },
      type: "object"
    },
    PersonalisedMusicClipParentProgramme: {
      properties: {
        entityType: { type: "string" },
        pid: { type: "string" },
        title: { type: "string" }
      },
      type: "object"
    },
    PersonalisedMusicData: {
      properties: {
        artist: { $ref: "#/definitions/PersonalisedMusicArtist" },
        clip: { $ref: "#/definitions/PersonalisedMusicClip" },
        genre: { $ref: "#/definitions/PersonalisedMusicGenre" },
        playlist: { $ref: "#/definitions/PersonalisedMusicPlaylist" },
        service: { $ref: "#/definitions/PersonalisedMusicService" },
        track: { $ref: "#/definitions/PersonalisedMusicTrack" }
      },
      type: "object"
    },
    PersonalisedMusicError: {
      properties: {
        message: { type: "string" },
        replied_at: { type: "integer" },
        status: { type: "integer" }
      },
      required: [
        "message",
        "replied_at",
        "status"
      ],
      type: "object"
    },
    PersonalisedMusicErrorResponse: {
      properties: {
        errors: {
          items: { $ref: "#/definitions/PersonalisedMusicError" },
          type: "array"
        },
        schema: { type: "string" }
      },
      required: [
        "errors",
        "schema"
      ],
      type: "object"
    },
    PersonalisedMusicGenre: {
      properties: {
        id: { type: "string" },
        key: { type: "string" },
        title: { type: "string" },
        type: { type: "string" }
      },
      type: "object"
    },
    PersonalisedMusicImage: {
      properties: {
        format: { type: "string" },
        id: { type: "string" },
        type: { type: "string" }
      },
      type: "object"
    },
    PersonalisedMusicMetaData: {
      properties: { key: { type: "string" } },
      required: ["key"],
      type: "object"
    },
    PersonalisedMusicPlaylist: {
      properties: {
        description: { type: "string" },
        images: {
          items: { $ref: "#/definitions/PersonalisedMusicImage" },
          type: "array"
        },
        playback_type: { type: "string" },
        service_id: { type: "string" },
        title: { type: "string" },
        tracks: { $ref: "#/definitions/PersonalisedMusicTrack" },
        type: { type: "string" },
        updated_at: { type: "string" },
        version: { $ref: "#/definitions/PersonalisedMusicPlaylistVersion" }
      },
      type: "object"
    },
    PersonalisedMusicPlaylistVersion: {
      properties: {
        duration: { type: "string" },
        expires_at: { type: "string" },
        id: { type: "string" },
        starts_at: { type: "string" },
        warnings: {
          items: { type: "string" },
          type: "array"
        }
      },
      required: ["warnings"],
      type: "object"
    },
    PersonalisedMusicRequest: {
      properties: {
        action: { type: "string" },
        added_at: { type: "string" },
        context: { type: "string" },
        meta_data: { $ref: "#/definitions/PersonalisedMusicMetaData" }
      },
      required: ["action"],
      type: "object"
    },
    PersonalisedMusicResponse: {
      properties: {
        limit: { type: "integer" },
        method: { type: "string" },
        offset: { type: "integer" },
        replied_at: { type: "string" },
        results: {
          items: { $ref: "#/definitions/PersonalisedMusicActivity" },
          type: "array"
        },
        schema: { type: "string" },
        total: { type: "integer" }
      },
      required: [
        "limit",
        "method",
        "offset",
        "replied_at",
        "results",
        "schema",
        "total"
      ],
      type: "object"
    },
    PersonalisedMusicService: {
      properties: {
        id: { type: "string" },
        key: { type: "string" },
        title: { type: "string" },
        type: { type: "string" }
      },
      type: "object"
    },
    PersonalisedMusicSuccess: {
      properties: {
        method: { type: "string" },
        replied_at: { type: "string" },
        schema: { type: "string" }
      },
      required: [
        "method",
        "replied_at",
        "schema"
      ],
      type: "object"
    },
    PersonalisedMusicTrack: {
      properties: {
        contributions: {
          items: { $ref: "#/definitions/PersonalisedMusicTrackContribution" },
          type: "array"
        },
        id: { type: "string" },
        images: {
          items: { $ref: "#/definitions/PersonalisedMusicTrackImage" },
          type: "array"
        },
        media: {
          items: { $ref: "#/definitions/PersonalisedMusicTrackMedia" },
          type: "array"
        },
        title: { type: "string" },
        type: { type: "string" },
        version: { $ref: "#/definitions/PersonalisedMusicVersion" }
      },
      required: [
        "contributions",
        "id",
        "images",
        "media",
        "title",
        "type",
        "version"
      ],
      type: "object"
    },
    PersonalisedMusicTrackContribution: {
      properties: {
        id: { type: "string" },
        images: {
          items: { $ref: "#/definitions/PersonalisedMusicTrackImage" },
          type: "array"
        },
        name: { type: "string" },
        role: { type: "string" }
      },
      required: [
        "id",
        "images",
        "name",
        "role"
      ],
      type: "object"
    },
    PersonalisedMusicTrackImage: {
      properties: {
        format: { type: "string" },
        id: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "format",
        "id",
        "type"
      ],
      type: "object"
    },
    PersonalisedMusicTrackMedia: {
      properties: {
        duration: { type: "integer" },
        format: { type: "string" },
        id: { type: "string" },
        scope: { type: "string" },
        source: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "duration",
        "format",
        "id",
        "scope",
        "source",
        "type"
      ],
      type: "object"
    },
    PersonalisedMusicVersion: {
      properties: {
        classical: { type: "boolean" },
        duration: { type: "string" },
        radio: { type: "boolean" },
        vpid: { type: "string" }
      },
      type: "object"
    },
    PersonalisedNetworks: {
      properties: {
        created: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "created",
        "type"
      ],
      type: "object"
    },
    PersonalisedNetworksResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/PersonalisedNetworks" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    PersonalisedRadioActivity: {
      properties: {
        action: { type: "string" },
        activity: { type: "string" },
        added_at: { type: "string" },
        data: { $ref: "#/definitions/ProgrammeSummary" },
        domain: { type: "string" },
        id: { type: "string" },
        metadata: { $ref: "#/definitions/MetaData" },
        type: { type: "string" },
        uas_type: { type: "string" },
        urn: { type: "string" }
      },
      required: [
        "action",
        "activity",
        "added_at",
        "data",
        "domain",
        "id",
        "metadata",
        "type",
        "uas_type",
        "urn"
      ],
      type: "object"
    },
    PersonalisedRadioBatchRequest: {
      properties: {
        action: { type: "string" },
        added_at: { type: "string" },
        context: { type: "string" },
        id: { type: "string" },
        metadata: { $ref: "#/definitions/PersonalisedRadioMetaData" },
        type: { type: "string" }
      },
      required: ["action"],
      type: "object"
    },
    PersonalisedRadioErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/PersonalisedRadioErrorResponse_errors" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "errors"
      ],
      type: "object"
    },
    PersonalisedRadioErrorResponse_errors: {
      properties: {
        code: { type: "string" },
        detail: { type: "string" },
        href: { type: "string" },
        id: { type: "string" },
        status: { type: "integer" },
        timestamp: { type: "integer" },
        title: { type: "string" }
      },
      required: [
        "code",
        "detail",
        "href",
        "id",
        "status",
        "timestamp",
        "title"
      ]
    },
    PersonalisedRadioMetaData: {
      properties: { key: { type: "string" } },
      required: ["key"],
      type: "object"
    },
    PersonalisedRadioRequest: {
      properties: {
        action: { type: "string" },
        added_at: { type: "string" },
        context: { type: "string" },
        metadata: { $ref: "#/definitions/PersonalisedRadioMetaData" }
      },
      required: ["action"],
      type: "object"
    },
    PersonalisedRadioResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        method: { type: "string" },
        offset: { type: "integer" },
        replied_at: { type: "string" },
        results: {
          items: { $ref: "#/definitions/PersonalisedRadioActivity" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "method",
        "offset",
        "replied_at",
        "results",
        "total"
      ],
      type: "object"
    },
    PersonalisedRadioSuccessResponse: {
      properties: {
        $schema: { type: "string" },
        method: { type: "string" },
        replied_at: { type: "string" }
      },
      required: [
        "$schema",
        "method",
        "replied_at"
      ],
      type: "object"
    },
    PlayableItem: {
      properties: {
        description: { type: "string" },
        image_url: { type: "string" },
        pid: { type: "string" },
        title: { type: "string" },
        type: { type: "string" },
        version_pid: { type: "string" }
      },
      type: "object"
    },
    PlayspaceContainer: {
      properties: {
        id: { type: "string" },
        members: {
          items: { $ref: "#/definitions/PlayableItem" },
          type: "array"
        },
        title: { type: "string" },
        type: { type: "string" }
      },
      type: "object"
    },
    Podcast: {
      properties: {
        category_summaries: {
          items: { $ref: "#/definitions/CategorySummary" },
          type: "array"
        },
        days_available: { type: "integer" },
        entity_type: { type: "string" },
        first_published_date: { type: "string" },
        frequency: { type: "string" },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        latest_available_episodes: {
          items: { $ref: "#/definitions/PodcastEpisodeSummary" },
          type: "array"
        },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        rss_url: { type: "string" },
        synopses: { $ref: "#/definitions/PodcastSynopses" },
        territory: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        total_available_episodes: { type: "integer" },
        type: { type: "string" },
        updated_at: { type: "string" }
      },
      required: [
        "category_summaries",
        "days_available",
        "entity_type",
        "first_published_date",
        "frequency",
        "images",
        "latest_available_episodes",
        "network_summary",
        "pid",
        "rss_url",
        "synopses",
        "territory",
        "titles",
        "total_available_episodes",
        "type",
        "updated_at"
      ],
      type: "object"
    },
    PodcastEpisodeSummary: {
      properties: {
        asset_url: { type: "string" },
        available_versions: {
          items: { $ref: "#/definitions/AvailableVersions" },
          type: "array"
        },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        media_type: { type: "string" },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        release_date: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        type: { type: "string" }
      },
      required: [
        "asset_url",
        "available_versions",
        "images",
        "media_type",
        "network_summary",
        "pid",
        "release_date",
        "short_synopsis",
        "titles",
        "type"
      ],
      type: "object"
    },
    PodcastEpisodesResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "number" },
        offset: { type: "number" },
        results: {
          items: { $ref: "#/definitions/PodcastEpisodeSummary" },
          type: "array"
        },
        total: { type: "number" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ]
    },
    PodcastError: {
      properties: {
        href: { type: "string" },
        id: { type: "string" },
        message: { type: "string" },
        replied_at: { type: "string" },
        status: { type: "number" }
      },
      type: "object"
    },
    PodcastErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/PodcastError" },
          type: "array"
        }
      },
      type: "object"
    },
    PodcastSynopses: {
      properties: {
        long: { type: "string" },
        medium: { type: "string" },
        short: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "long",
        "medium",
        "short",
        "type"
      ],
      type: "object"
    },
    PodcastsFeatured: {
      properties: {
        featured_podcasts: {
          items: { $ref: "#/definitions/Podcast" },
          type: "array"
        },
        title: { type: "string" },
        type: { type: "string" }
      },
      type: "object"
    },
    PodcastsFeaturedResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "number" },
        offset: { type: "number" },
        results: {
          items: { $ref: "#/definitions/PodcastsFeatured" },
          type: "array"
        },
        total: { type: "number" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ]
    },
    PodcastsResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/Podcast" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    PopularError: {
      properties: {
        href: { type: "string" },
        id: { type: "string" },
        message: { type: "string" },
        replied_at: { type: "string" },
        status: { type: "integer" }
      },
      required: [
        "href",
        "id",
        "message",
        "replied_at",
        "status"
      ],
      type: "object"
    },
    PopularErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/PopularError" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "errors"
      ],
      type: "object"
    },
    PopularItemSummary: {
      properties: {
        data: { $ref: "#/definitions/ProgrammeSummary" },
        id: { type: "string" },
        score: { type: "integer" },
        type: { type: "string" }
      },
      required: [
        "data",
        "id",
        "score",
        "type"
      ],
      type: "object"
    },
    PopularResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/PopularItemSummary" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    Programme: {
      properties: {
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        latest_available_episodes: {
          items: { $ref: "#/definitions/EpisodeSummary" },
          type: "array"
        },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        total_available_episodes: { type: "integer" },
        type: {
          enum: [
            "brand_summary",
            "series_summary",
            "episode_summary",
            "clip_summary"
          ],
          type: "string"
        }
      },
      required: [
        "images",
        "network_summary",
        "pid",
        "short_synopsis",
        "titles",
        "type"
      ],
      type: "object"
    },
    ProgrammeSummary: {
      properties: {
        pid: { type: "string" },
        type: {
          enum: [
            "brand_summary",
            "series_summary",
            "episode_summary",
            "clip_summary"
          ],
          type: "string"
        }
      },
      required: [
        "pid",
        "type"
      ],
      type: "object"
    },
    ProgrammeTitles: {
      properties: {
        display_title: { type: "string" },
        entity_title: { type: "string" },
        primary_title: { type: "string" },
        secondary_title: { type: "string" },
        type: { type: "string" }
      },
      required: ["type"],
      type: "object"
    },
    ProgrammesResponse: {
      properties: {
        $schema: { type: "string" },
        limit: { type: "integer" },
        offset: { type: "integer" },
        results: {
          items: { $ref: "#/definitions/ProgrammeSummary" },
          type: "array"
        },
        total: { type: "integer" }
      },
      required: [
        "$schema",
        "limit",
        "offset",
        "results",
        "total"
      ],
      type: "object"
    },
    RadioError: {
      properties: {
        code: { type: "string" },
        detail: { type: "string" },
        href: { type: "string" },
        id: { type: "string" },
        status: { type: "integer" },
        timestamp: { type: "integer" },
        title: { type: "string" }
      },
      required: [
        "code",
        "detail",
        "href",
        "id",
        "status",
        "timestamp",
        "title"
      ],
      type: "object"
    },
    RadioErrorResponse: {
      properties: {
        $schema: { type: "string" },
        errors: {
          items: { $ref: "#/definitions/RadioError" },
          type: "array"
        }
      },
      required: [
        "$schema",
        "errors"
      ],
      type: "object"
    },
    SeriesSummary: {
      properties: {
        ancestors: {
          items: { $ref: "#/definitions/AncestorSummary" },
          type: "array"
        },
        images: {
          items: { $ref: "#/definitions/Image" },
          type: "array"
        },
        latest_available_episodes: {
          items: { $ref: "#/definitions/EpisodeSummary" },
          type: "array"
        },
        network_summary: { $ref: "#/definitions/NetworkSummary" },
        pid: { type: "string" },
        short_synopsis: { type: "string" },
        titles: { $ref: "#/definitions/ProgrammeTitles" },
        total_available_episodes: { type: "integer" },
        type: {
          enum: ["series_summary"],
          type: "string"
        }
      },
      required: [
        "ancestors",
        "images",
        "latest_available_episodes",
        "network_summary",
        "pid",
        "short_synopsis",
        "titles",
        "total_available_episodes",
        "type"
      ],
      type: "object"
    },
    Service: {
      properties: {
        active: { type: "boolean" },
        coverage: { type: "string" },
        date_ranges: {
          items: { $ref: "#/definitions/DateRange" },
          type: "array"
        },
        default: { type: "boolean" },
        default_language: { type: "string" },
        id: { type: "string" },
        region: { type: "string" },
        short_title: { type: "string" },
        title: { type: "string" },
        type: { type: "string" }
      },
      required: [
        "active",
        "coverage",
        "date_ranges",
        "default",
        "default_language",
        "id",
        "region",
        "short_title",
        "title",
        "type"
      ],
      type: "object"
    }
  }
};
export {
  e as default
};
